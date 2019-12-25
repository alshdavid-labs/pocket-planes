import React, { useState, useEffect, FormEvent } from "react"
import { useInject } from "~/gui/context"
import * as navigate from '~/gui/navigation'
import { forms } from '~/platform/forms'
import { aircraft } from "~/platform/aircraft"
import { strings } from "~/platform/strings"
import { useOnEmit } from "~/platform/use-subscribe"

export const HangerView = () => {
  const { aircraftMap ,router } = useInject()

  useOnEmit(aircraftMap.$aircrafts)
  const parkedAircraft = aircraftMap.getByLocation('hanger')
  
  console.log(parkedAircraft)

  const newAircraft = (f: any) => {
    const ID = strings.random()
    const a = new aircraft.Aircraft(ID, f.type, f.range, f.speed, f.location)
    aircraftMap.add(a)
  }

  const move = (a: aircraft.Aircraft) => {
    const dest = prompt('Where?')
    if (!dest) {
      return
    }
    aircraftMap.remove(a.ID)
    a.location = dest
    aircraftMap.add(a)
  }

  return <div>
    <button 
      onClick={() => navigate.toMainMenu(router)}>
      Back
    </button>
    <h1>Hanger</h1>
    <div>
    { parkedAircraft.length ? null : "No Parked Aircraft" }
    {
      parkedAircraft
        .map(aircraft => <div 
          onClick={() => move(aircraft)}
          key={aircraft.ID}>
          {aircraft.ID} {aircraft.type} {aircraft.range} {aircraft.speed} 
        </div>)
    }
    </div>
    <hr/>
    <button 
      onClick={() => newAircraft({ 
        type: 'X-Boomer', range: 3000, 
        speed: 300, location: 'hanger',
      })}>
      Add XBoomer
    </button>
    <form onSubmit={forms.submit(newAircraft)}>
      <input type="text" placeholder="type"/>
      <input type="number" placeholder="range"/>
      <input type="number" placeholder="speed"/>
      <input type="text" placeholder="location"/>
      <button type="submit">Add</button>
    </form>
  </div>
}
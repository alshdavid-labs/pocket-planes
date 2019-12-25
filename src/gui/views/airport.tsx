import React, { useState, useEffect } from "react"
import { useInject } from "~/gui/context"
import * as navigate from '~/gui/navigation'
import { useOnEmit } from "~/platform/use-subscribe"


export const AirportView = () => {
  const { airportMap, aircraftMap, router } = useInject()
  
  const [ airport ] = useState(airportMap.find(router.currentContext?.params['code']!)!)
  useEffect(() => {
    if (!airport) {
      navigate.toMainMenu(router)
      return 
    }
  }, [])

  useOnEmit(aircraftMap.$aircrafts)
  const parkedAircraft = aircraftMap.getByLocation(airport.code)

  return <div>
    <button 
      onClick={() => navigate.toMainMenu(router)}>
      Back
    </button>
    <h1>{ airport?.code }</h1>
    { parkedAircraft.length ? null : "No Parked Aircraft" }
    {
      parkedAircraft
        .map(aircraft => <div 
          key={aircraft.ID}>
          {aircraft.ID} {aircraft.type} {aircraft.range} {aircraft.speed} 
        </div>)
    }
  </div>
}
import React, { useState, useEffect } from "react"
import { useInject } from "~/gui/context"
import { paths } from '~/gui/navigation'
import { useOnEmit } from "~/platform/use-subscribe"

const useAirport = () => {
  const { airportMap, navigator } = useInject()

  const code = navigator.getParam(paths.airport.params.code)
  const [ airport ] = useState(airportMap.find(code))

  useEffect(() => {
    if (!airport) {
      navigator.toMainMenu()
      return 
    }
  }, [])

  return airport
}

export const AirportView = () => {
  const { aircraftMap, navigator } = useInject()
  
  const airport = useAirport()
  if (!airport) {
    return null
  }

  useOnEmit(aircraftMap.$aircrafts)
  const parkedAircraft = aircraftMap.getByLocation(airport.code)

  return <div>
    <button 
      onClick={() => navigator.toMainMenu()}>
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
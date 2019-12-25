import React from "react"
import { useInject } from "../context"
import * as navigate from '~/gui/navigation'

export const HomeView = () => {
  const { airportMap, navigator } = useInject()

  return <div>
    {
      airportMap
        .toArray()
        .map(airport => <button 
          key={airport.code} 
          onClick={() => navigator.toAirport(airport.code)}>
          {airport.code}
        </button>)
    }
    <div>
      <button 
        onClick={() => navigator.toHanger()}>
        Hanger
      </button>
    </div>
  </div>
}
import React from "react"
import { useInject } from "../context"
import * as navigate from '~/gui/navigation'

export const HomeView = () => {
  const { airportMap, router } = useInject()

  return <div>
    {
      airportMap
        .toArray()
        .map(airport => <button 
          key={airport.code} 
          onClick={() => navigate.toAirport(router, airport.code)}>
          {airport.code}
        </button>)
    }
    <div>
      <button 
        onClick={() => navigate.toHanger(router)}>
        Hanger
      </button>
    </div>
  </div>
}
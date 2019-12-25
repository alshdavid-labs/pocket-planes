import crayon from 'crayon'
import { airport } from '~/platform/airport'
import { aircraft } from '~/platform/aircraft'
import { Navigator } from '~/gui/navigation'

const airportMap = new airport.Map()
const aircraftMap = new aircraft.Map()

airportMap.add(new airport.Airport('AKL', -37.0082, 174.7850))
airportMap.add(new airport.Airport('SYD', -33.9399, 151.1753))
airportMap.add(new airport.Airport('LAX', 34.0522, -118.243))

export const state = {
  airportMap,
  aircraftMap,
  router: <crayon.Router>undefined!,
  navigator: <Navigator>undefined!,
}

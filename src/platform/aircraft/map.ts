import { Aircraft } from "./aircraft";
import { Subject } from 'rxjs'

export class Map {
  public aircrafts: Record<string, Aircraft> = {}
  public $aircrafts = new Subject<void>()

  public add(aircraft: Aircraft) {
    this.aircrafts[aircraft.ID] = aircraft
    this.$aircrafts.next()
  }

  public remove(ID: string) {
    delete this.aircrafts[ID]
    this.$aircrafts.next()
  }

  public getByID(ID: string): Aircraft | undefined {
    return this.aircrafts[ID]
  }

  public getByLocation(location: string): Aircraft[] {
    return this.toArray().filter(aircraft => aircraft.location === location)
  }

  public toArray(): Aircraft[] {
    return Object.values(this.aircrafts)
  }
}

import { Airport } from "./airport";

export class Map {
  private airports: Record<string, Airport> = {}

  public add(airport: Airport) {
    const id = airport.code.toLowerCase()
    this.airports[id] = airport
  }

  public find(code: string): Airport | undefined {
    return this.airports[code.toLowerCase()]
  }

  public toArray(): Airport[] {
    return Object.values(this.airports)
  }
}
// import { Airport } from "./airport";
// import { Plane } from "./plane";

// export class Flight {
//   constructor(
//     private start: Airport,
//     private dest: Airport,
//     private plane: Plane
//   ) {}

//   get distance(): number {
//     function toRad(value: number) {
//       return value * Math.PI / 180;
//     }

//     const R = 6371; // km
//     const dLat = toRad(this.dest.lat - this.start.lat);
//     const dLon = toRad(this.dest.long - this.start.long);
//     const lat1 = toRad(this.start.lat);
//     const lat2 = toRad(this.dest.lat);

//     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const d = R * c;
//     return d;
//   }

//   get duration(): number {
//     return this.distance / this.plane.speed / 2
//   }
// }
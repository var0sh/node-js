// interface Point {
//     x: number;
//     y: number;
// }

// interface Vehicle {
//     currentLocation: Point;
//     travelTo(point: Point): void;
// }

// class Taxi implements Vehicle{
//     // ..
//     currentLocation: Point;
//     travelTo(point: Point): void{
//         console.log(`Taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
//     }
// }

// class Bus implements Vehicle{
//     // ..
//     currentLocation: Point;
//     travelTo(point: Point): void{
//         console.log(`Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
//     }
// }

// let taxi1 : Taxi = new Taxi();
// taxi1.travelTo({x: 1, y: 6});

// taxi1.currentLocation = {x: 5, y: 7};
// console.log(taxi1.currentLocation.x);
// console.log(taxi1.currentLocation.y);

// let bus1 = new Bus();
// bus1.travelTo({x: 4, y: 6});
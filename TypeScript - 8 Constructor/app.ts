interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    constructor(location: Point, color?: string){
        this.currentLocation = location;
        this.taxiColor = color;
    }
    taxiColor: string;
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`Taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi1 : Taxi = new Taxi({x: 1, y: 8});
taxi1.travelTo({x: 1, y: 6});

// ******************************************************

let taxi2 = new Taxi({x: 5, y: 7});
taxi2.taxiColor = 'RED';

console.log(taxi2.taxiColor);
interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{

    constructor(private location: Point, private color?: string){}

    travelTo(point: Point): void{
        console.log(`Taksi X: ${point.x} Y: ${point.y}'dan X: ${this.location.x} Y: ${this.location.y} konumuna gidiyor.`);
    }

}

let taxi1 : Taxi = new Taxi({x: 1, y: 8});
taxi1.travelTo({x: 1, y: 6});
interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{

    constructor(private _location: Point, private _color?: string){}

    travelTo(point: Point): void{
        console.log(`Taksi X: ${point.x} Y: ${point.y}'dan X: ${this._location.x} Y: ${this._location.y} konumuna gidiyor.`);
    }

    get location(){
        return this._location;
    }

    set location(value: Point){
        if (value.x < 0 || value.y < 0) {
            throw new Error('koordinatlar yanlış');
        }
        this._location = value;
    }
}

let taxi1 = new Taxi({x: 4, y: 5});

taxi1.location = {x: 4, y: 10};

console.log(taxi1.location = {x: -2, y: 5});
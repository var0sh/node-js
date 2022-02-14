import { Taxi } from './Taxi';

let taxi1 = new Taxi({x: 4, y: 5});
taxi1.location = {x: 4, y: 10};

console.log(taxi1.location = {x: -2, y: 5});
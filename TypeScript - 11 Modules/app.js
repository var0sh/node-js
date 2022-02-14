"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Taxi_1 = require("./Taxi");
var taxi1 = new Taxi_1.Taxi({ x: 4, y: 5 });
taxi1.location = { x: 4, y: 10 };
console.log(taxi1.location = { x: -2, y: 5 });

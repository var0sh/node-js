var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi1 = new Taxi();
taxi1.travelTo({ x: 1, y: 6 });
taxi1.currentLocation = { x: 5, y: 7 };
console.log(taxi1.currentLocation.x);
console.log(taxi1.currentLocation.y);
var bus1 = new Bus();
bus1.travelTo({ x: 4, y: 6 });

var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.taxiColor = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi1 = new Taxi({ x: 1, y: 8 });
taxi1.travelTo({ x: 1, y: 6 });
var taxi2 = new Taxi({ x: 5, y: 7 });
taxi2.taxiColor = 'RED';
console.log(taxi2.taxiColor);

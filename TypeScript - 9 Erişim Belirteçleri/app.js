var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: ".concat(point.x, " Y: ").concat(point.y, "'dan X: ").concat(this.location.x, " Y: ").concat(this.location.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi1 = new Taxi({ x: 1, y: 8 });
taxi1.travelTo({ x: 1, y: 6 });

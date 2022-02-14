var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: ".concat(point.x, " Y: ").concat(point.y, "'dan X: ").concat(this._location.x, " Y: ").concat(this._location.y, " konumuna gidiyor."));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('koordinatlar yanlış');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi1 = new Taxi({ x: 4, y: 5 });
taxi1.location = { x: 4, y: 10 };
console.log(taxi1.location = { x: -2, y: 5 });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Punto = /** @class */ (function () {
    function Punto(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Punto.prototype.disegna = function () {
        console.log('x: ' + this._x, 'y: ' + this._y);
    };
    Object.defineProperty(Punto.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (valore) {
            if (valore < 0)
                throw new Error('non puoi passare valori negativi!');
            this._x = valore;
        },
        enumerable: true,
        configurable: true
    });
    return Punto;
}());
exports.Punto = Punto;

var Gangsta = /** @class */ (function () {
    function Gangsta() {
    }
    Gangsta.prototype.shoot = function () {
        Gangsta.totalBullets--;
        console.log("Bullet left : ".concat(Gangsta.totalBullets));
    };
    Gangsta.totalBullets = 100;
    return Gangsta;
}());
var g1 = new Gangsta();
g1.shoot();
var g2 = new Gangsta();
g2.shoot();

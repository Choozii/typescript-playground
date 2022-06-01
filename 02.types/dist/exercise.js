var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return "hello ".concat(this.name);
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return "".concat(howDeep, "m");
    };
    return Fish;
}());
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return pet.dive(5);
    }
    else {
        return 'Fish cannot talk, sorry';
    }
}
var myDog = new Dog('Sammy');
var myFish = new Fish('Lucky');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));

"use strict";
// class Player {
//   readonly first: string;
//   readonly last: string;
//   score = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
// }
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error(`score cannot be negative`);
        }
        this._score = newScore;
    }
}
const elton = new Player("Elton", "Steele", 100);
console.log(elton.fullName);
elton.score = 38;
console.log(elton.score);

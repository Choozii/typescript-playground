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
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error(`score cannot be negative`);
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999999;
  }
}

const elton = new Player("Elton", "Steele", 100);
console.log(elton.fullName);
elton.score = 38;
console.log(elton.score);

class Dog {
  constructor(public name: string) {}
  sayHello(): string {
    return `hello ${this.name}`;
  }
}
class Fish {
  constructor(public name: string) {}

  dive(howDeep: number): string {
    return `${howDeep}m`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return pet.dive(5);
  } else {
    return 'Fish cannot talk, sorry';
  }
}

const myDog = new Dog('Sammy');
const myFish = new Fish('Lucky');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));

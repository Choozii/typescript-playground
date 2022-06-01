type Person = {
  discriminator: 'person';
  address: string;
};

const isPerson = (object: any): object is Person => !!object && object.discriminator === 'person';
let person1: any;
person1 = JSON.parse('{"address" : "25Broadway"}');
console.log(person1.adress);

let person2: unknown;
person2 = JSON.parse('{"discriminator" : "person","address" : "25Broadway"}');
// console.log(person2.adress);

if (isPerson(person2)) {
  console.log(person2.address);
} else {
  console.log('person2 is not a Person');
}

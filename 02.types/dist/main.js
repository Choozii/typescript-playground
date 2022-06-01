var isPerson = function (object) { return !!object && object.discriminator === 'person'; };
var person1;
person1 = JSON.parse('{"address" : "25Broadway"}');
console.log(person1.adress);
var person2;
person2 = JSON.parse('{"discriminator" : "person","address" : "25Broadway"}');
// console.log(person2.adress);
if (isPerson(person2)) {
    console.log(person2.address);
}
else {
    console.log('person2 is not a Person');
}

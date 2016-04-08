// @flow

function printIntroduction(person: Person) {
  console.log('Hi! I am ' + person.name + ' and I am ' + person.age + ' years old!');
}

class Person {
  name: string;
  age: number;

  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }
}


var fakePerson = {name:"Fake Shashi", age:34, weight:86}; //this is not a prototype of person.. well or is it.. since it has the two properties that a person has..?
var pet = {type:'Dog', name:'Panther'};
var realPerson = new Person('Shashi',32);

printIntroduction(fakePerson);
printIntroduction(realPerson);
printIntroduction(pet);

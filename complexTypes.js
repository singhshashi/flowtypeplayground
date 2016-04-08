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


class Earthling extends Person {
  whoAmI() {console.log("I am an Earthling")};
}

//structurally identical to Person but nominally different
class Alien {
  name: string;
  age: number;

  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }
}


var fakePerson = {name:"Fake Shashi", age:34, weight:86}; //  Object and Interface types are structural. Thus it is not treated nominally by flow and will not throw any errors as structurally same.
var pet = {type:'Dog', name:'Panther'};
var realPerson = new Person('Shashi',32);
var alien = new Alien('ET', 2134);
var earthling = new Person('Jake',34);

printIntroduction(fakePerson);
printIntroduction(realPerson);
printIntroduction(pet);
printIntroduction(alien); //this throws an error because Alien is a class and is nominally different. Flow treats classes as nominal types
printIntroduction(earthling);
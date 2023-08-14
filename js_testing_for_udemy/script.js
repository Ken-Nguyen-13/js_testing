"use strict";

//Creates Obj
function Person(firstName, birthYear) {
  //Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never Create Methods in Constructors!!!!!!!!
}

const ken = new Person(`Ken`, 2012);
console.log(ken);

//steps Only happen because of "new"
//New empty obj created
//Func is called; this = createdObj
//Creates __proto__ property and its value is the proto property of the func that's being called
//func returns createdObj

const kevin = new Person(`Kevin`, 2018);
const katie = new Person(`Katie`, 2021);
console.log(kevin, katie);

const num = 13;

console.log(ken instanceof Person);
console.log(num instanceof Person);

//Prototypes
//Every Func comes with a Prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

ken.calcAge();
kevin.calcAge(); // Wrong Because of the months
katie.calcAge(); // Wrong Because of the months

console.log(ken.__proto__);
console.log(ken.__proto__ === Person.prototype); // Person.prototype is NOT the prototype of Person

console.log(Person.prototype.isPrototypeOf(ken));
console.log(Person.prototype.isPrototypeOf(kevin));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(katie));

Person.prototype.ageGroup = "Kid";
console.log(ken.ageGroup, kevin.ageGroup, katie.ageGroup)

console.log(ken.hasOwnProperty('firstName'))
console.log(ken.hasOwnProperty('ageGroup'))
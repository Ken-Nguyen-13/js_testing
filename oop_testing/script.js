//OOP Testing
function Person(firstName, lastName, birthYear, siblings, profession) {
  this.firstName = firstName || "First name";
  this.lastName = lastName || "Last name";
  this.birthYear = birthYear || 2000;
  this.siblings = siblings || "None";
  this.profession = profession || "Unemployed";
}
Person.prototype.age = function () {
  return 2023 - this.birthYear;
};

const fred = new Person("Fred", "Alaster", 2006, [
  "Carl Alaster",
  "Tisha Alaster",
]);
Person.prototype.canDrive = function () {
  return this.age() >= 16 ? "yes" : "no";
};
Person.prototype.id = function () {
  return `Name: ${this.firstName} ${this.lastName}. Born ${
    this.birthYear
  }, Age: ${this.age()}. Profession: ${this.profession}. Siblings: ${
    this.siblings
  }.`;
};
console.log(fred);
console.log(fred.age());
console.log(fred.canDrive());
console.log(fred.id());
// function Businessman(firstName, lastName, birthYear, siblings, profession) {
//   Person.call(this, firstName, lastName, birthYear, siblings, profession);
// }
// Businessman.prototype = new Person(); // The Businessman prototype or template, becomes an instance of Person()
// console.log(Businessman()); // --> undefined

const carl = new Person(
  "Carl",
  "Alaster",
  undefined,
  ["Fred Alaster", "Tisha Alaster"],
  "Businessman"
);
console.log(carl);
console.log(carl.age());
console.log(carl.canDrive());
console.log(carl.id());

const tisha = new Person(
  "Tisha",
  "Alaster",
  2009,
  ["Fred Alaster", "Carl Alaster"],
  "Manufacturer"
);
console.log(tisha);
console.log(tisha.age());
console.log(tisha.canDrive());
console.log(tisha.id());
console.log(carl.id());
console.log(fred.id());

function Family(mom, dad, children) {
  this.mom = mom;
  this.dad = dad;
  this.children = children;
}
Family.prototype.id = function () {
  return `Mom: ${this.mom}. Dad: ${this.dad}. Children: ${this.children}.`;
};
function Alasterfamily(mom, dad, children) {
  Family.call(this, mom, dad, children);
}
Alasterfamily.prototype = new Family();
const theAlasterFamily = new Alasterfamily("Garcia Alaster", "Tony Alaster", [
  fred.firstName + " " + fred.lastName,
  carl.firstName + " " + carl.lastName,
  tisha.firstName + " " + tisha.lastName,
]);
console.log(theAlasterFamily);
console.log(theAlasterFamily.id());

const sam = new Person(
  "Sam",
  "Park",
  1979,
  [`Jay Park`, "Glennon Park"],
  "Military Officer"
);
console.log(sam);
console.log(sam.age());
console.log(sam.canDrive());
console.log(sam.id());

const jay = new Person(
  "Jay",
  "Park",
  1987,
  [`Sam Park`, "Glennon Park"],
  "Delivery Driver"
);
console.log(jay);
console.log(jay.age());
console.log(jay.canDrive());
console.log(sam.id());

const glennon = new Person("Glennon", "Park", 1964, [`Sam Park`, "Jay Park"]);
console.log(glennon);
console.log(glennon.age());
console.log(glennon.canDrive());
console.log(glennon.id());
console.log(sam.id());
console.log(jay.id());

function Parkfamily(mom, dad, children) {
  Family.call(this, mom, dad, children);
}
Parkfamily.prototype = new Family();
const theParkFamily = new Parkfamily("Polly Park", "Neville Park", [
  sam.firstName + " " + sam.lastName,
  jay.firstName + " " + jay.lastName,
  glennon.firstName + " " + glennon.lastName,
]);
console.log(theParkFamily);
console.log(theParkFamily.id());

function Planet(name, mass /*in kg*/, gForce /*in m/s*/, makeUp /*mainly*/, planetOrder) {
    this.name = name;
    this.mass = mass;
    this.gForce = gForce;
    this.makeUp = makeUp;
    this.planetOrder = planetOrder;
}
Planet.prototype.id = function () {
    return `${this.name} is ${this.mass} kg, mostly composed of ${this.makeUp}. It is the ${this.planetOrder} planet from the Sun with a gravitationl force of ${this.gForce}.`
}
const mercury = new Planet(`Mercury`, (3.285 * (10 ** 23)), `3.7 m/s²`, `iron`, `1st`)
console.log(mercury)
console.log(mercury.id())
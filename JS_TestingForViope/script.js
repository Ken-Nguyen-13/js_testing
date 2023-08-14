function greaterThan(n) {
  return (m) => m > n;
}
var greaterThan10 = greaterThan(10); // GreaterThan10 is a func expression because the value assigned to it is a func!
//  GreaterThan10 = m => m > 10 ↑
console.log(greaterThan10(11) /* m = 11 > 10 */);

//---------------------------------------------------------------//

function noisy(f) {
  return (...args /*What is spread syntax?*/) => {
    // "noisy returns an arrow func"
    console.log("calling with", args /*args = [3, 2, 1] */);
    var result = f(...args); // f is a param of "noisy", standing for "function"
    console.log("called with", args, ", returned", result);
    return result;
  };
}

noisy(Math.min /*Returns the smallest set of numbers, 1 in this case*/)(
  3,
  2,
  1
); //What is this?

// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//---------------------------------------------------------------//

/* The higher-order function "not()", returns  
 a new function, which is brings to function f which,
 acts as it's arguments, and returns f's return value as it's negation */

function not(f) {
  // f = even()
  return function () {
    // Returns a new function which calls on f
    var result = f.apply(this, arguments);
    return !result; // and returns the negation
  };
}
// Function to check if a number is even
var even = function (x) {
  return x % 2 === 0;
};
// Function that works the opposite of the above
var odd = not(even);
[1, 1, 3, 5, 5].every(odd); // => true: every item is odd

// function testFunction(x, y, z) {
//   return x * y < z;
// }
// console.log(
//   [
//     [1, 2, 3],
//     [1, 3, 4],
//     [10, 1, 11],
//     [1, 1, 10],
//     [2, 6, 14],
//   ].every(testFunction)
// );
// console.log(
//   [[1, 2, 3], [1, 3, 4]].every(testFunction) // How does this not work???
// );

const users = [
  {
    name: 'Jack',
    age: 25
  },
  {
    name: 'Matt',
    age: 30
  },
  {
    name: 'Bob',
    age: 1
  }
];

function isAdult(user) {
  return user.age >= 18;
}

const adultUsers = users.filter(isAdult); // Creates new arr using properties of users that are true, calculated by isAdult

console.log(adultUsers); // Matt, Jack

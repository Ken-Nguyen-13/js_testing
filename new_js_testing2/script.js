"use strict";
function containsUppercase(str) {
  return /[A-Z]/.test(str);
}
console.log(containsUppercase("H")); // true
console.log(containsUppercase("h")); // false
console.log(containsUppercase("He")); // true
console.log(containsUppercase("hE")); // true
console.log(containsUppercase("he")); // false
console.log(containsUppercase("HE")); // true
console.log(containsUppercase("$")); // false
console.log(containsUppercase("$H")); // true

function containsNumber(str) {
  return /\d/.test(str);
}
console.log(`containsNumber()`);
console.log(containsNumber("1")); // true
console.log(containsNumber("0")); // true
console.log(containsNumber("-1")); // true
console.log(containsNumber("!")); // false
console.log(containsNumber("a")); // false
console.log(containsNumber("a1")); // true
console.log(containsNumber("1a")); // true
console.log(containsNumber('aaaaaaaaaaaaaaaaaaaaaaa"1"')); // true
console.log(containsNumber("[1]")); // true
console.log(containsNumber("Nothing in here")); // false
console.log(containsNumber("Noth1ng 1n Here")); // true
console.log(containsNumber(1)); // true

function containsSpecialChars(str) {
  if (
    str.includes("&") ||
    str.includes("$") ||
    str.includes("%") ||
    str.includes("§") ||
    str.includes("-") ||
    str.includes("_")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log("containsSpecialChars");
console.log(containsSpecialChars("$"));
console.log(containsSpecialChars("%"));
console.log(containsSpecialChars("&"));
console.log(containsSpecialChars("-"));
console.log(containsSpecialChars("_"));
console.log(containsSpecialChars("§")); // true
console.log(containsSpecialChars("JoF000000Loll4^^^")); //false
console.log(containsSpecialChars("epewrwrcepc&0&&&&&&wrepepppp")); //true
console.log(containsSpecialChars("%#%$^&*()")); //true
console.log(containsSpecialChars("")); //false

if (!1 < 2) {
  console.log("yay");
} else {
  console.log("nay");
}

let numberString = "12345";
let numberStringArray = numberString.split("");
console.log(numberStringArray);
console.log(
  (numberStringArray = numberStringArray.forEach(function (num) {
    return Number(num);
  }))
);
//console.log(2 * "2"); ---> 4

function dec2bin(dec) {
  // let valueOfMaxPlaceValue = 1;
  // let maxPlaceValue;
  // let reachedMaxPlaceValue = false;
  // for (let i = 0; !reachedMaxPlaceValue; i++) {
  //  // console.log(valueOfMaxPlaceValue, `Value Of Max Place Value`);
  //   if (valueOfMaxPlaceValue > dec) {
  //     reachedMaxPlaceValue = true;
  //     valueOfMaxPlaceValue /= 2;
  //     maxPlaceValue = i;
  //     break;
  //   }
  //   valueOfMaxPlaceValue *= 2;
  // }
  const binaryArray = [];
  const binaryArrayTranslation = 0;
  const originalDec = dec;
  const powerOfTwo = 1;
  
  let k = 1; 
  while (binaryArrayTranslation > originalDec) {
    k++
  }
  return binaryArray.join('');
}
console.log(dec2bin(50)); // "110010"
console.log(dec2bin(2)); // "10"
console.log(dec2bin(1)); // "1"
console.log(dec2bin(42)); // "101010"
console.log(dec2bin(51)); // "110011"

/////////////////////////////////////////////////////////////////////////////

const testVariable = console.log("Hello!"); // --> "Hello!"
console.log(testVariable) //--> undefined

console.log(Math.log(10), 10 / Math.E, Math.log(Math.E), Math.log(Math.PI))
console.log(origin)

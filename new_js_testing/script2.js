console.log(new Error());
console.log(console);
console.log(
  console.log(
    console.log(
      console.log(
        console.log(
          console.log(console.log(console.log(console.log(console.log("LOL")))))
        )
      )
    )
  )
);
//const testVariable = 1;
//throw testVariable; --> Uncaught 8
// throw 1; --> Uncaught 1
//throw true; --> Uncaught true
//throw new Array(); --> Uncaught []
//throw this; --> Uncaught Window {blah blah blah}
//throw console; --> Uncaught console {blah bloo blee};
function throwTestFunc1() {}
//throw throwTestFunc1; Uncaught ƒ throwTestFunc1() {}
const 𓆤 = '𓆤 WHAT?!';
const specialChar = '𓆤';
console.log(𓆤, specialChar)
const specialChar2 = $;
//const testVariable2 = '𓆤';
//const testVariable3 = 𓆤; Already declared??
//console.log(testVariable3)
//throw 𓆤; --> Uncaught 𓆤
//console.log(𓆤, testVariable2) // --> testVariable2 has already been declared at script2.js:1:1

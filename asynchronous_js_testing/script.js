let counterEl = document.getElementById("counter");
let counter = Number(document.getElementById("counter").textContent);
function add1ToCounter() {
  let counterValue = (counter + 0.001);
  counter = Number(counterValue.toFixed(3)) // toFixed returns a string which was the cause of all my frustration
  counterEl.textContent = counter;
}
setInterval(add1ToCounter, 1);

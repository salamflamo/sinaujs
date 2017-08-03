// function printOrder() {
//   console.log("akan mencetak : " + String(duit.toFixed(2)));
// }
// var duit = 99.99;
// printOrder();
// duit = duit *2;
// printOrder();

function printOrder(dt) {
  console.log(dt.toFixed(2));
}

function formatOrder(dt) {
  return "$ " + dt.toFixed(2);
}

var duit = 99.99;
printOrder(duit + 0.823556);
duit = formatOrder(duit);
console.log(duit);

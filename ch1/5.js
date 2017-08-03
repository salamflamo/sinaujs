//Belajar scope
function satu() {
  var a = 1; //variabel ini hanya dimiliki oleh fungsi ini
  console.log(a);
}
function dua() {
  var a = 2; //variabel ini hanya dimiliki oleh fungsi ini
  console.log(a);
}
satu();
dua();

//consider
function keluaran() {
  var a = 1;
  function didalam() {
    var b = 2;
    console.log(a + b);
  }
  didalam();
  console.log(a);
}
keluaran();

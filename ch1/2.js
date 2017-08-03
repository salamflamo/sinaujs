// belajar menggunakan kondisi

var saldo = 302.99;
var dompet = 80.00;

if (saldo >= dompet) {
  console.log("Beli makan");
}

// ----------------------------------------------- //

const MAKAN = 89.00;

if (dompet >= MAKAN) {
  console.log("Beli Makan");
} else {
  if (saldo >= dompet) {
    console.log("Ambil Duit");
  } else {
    console.log("Pergi saja");
  }
}

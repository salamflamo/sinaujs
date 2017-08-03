//Belajar fungsi
function printOrder() { //fungsi tanpa parameter
  console.log(Bayar.toFixed(2)); //variabel bayar di inisialisasi di bawah
}

var Bayar = 99.78988;
printOrder();
Bayar = Bayar *2;
printOrder();

function bayarOrder(dt) {
  console.log(dt.toFixed(2));
}

function formatBayar(dt) {
  return "Rp. " + dt.toFixed(2);
}

var duit = 98.897873;
bayarOrder(duit); //fungsi dengan parameter, tanpa menggunakan return, langsung cetak menggunakan console
duit = formatBayar(duit); //fungsi yang menggunakan parameter dan menggunakan return harus inisialisasi
// sebuah variabel dulu untuk menampung nilai hasil return
console.log(duit);
//mulai latihan
const PPN = 0.09;

function totalBayar(dt) {
  dt = dt + (dt*PPN);
  return dt;
}

duit = 102.324;
console.log("Rp. " + totalBayar(duit).toFixed(2));

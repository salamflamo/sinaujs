//aplikasi pembayaran telepon
const BATAS_PEMAKAIAN = 200;
const PAJAK = 0.08;
const HARGA_TELP = 99.99;
const HARGA_ACCS = 9.99;

var saldo = 303.91;
var duit = 0;

function hitungPajak(dt) {
  return dt * PAJAK;
}
function formatBayar(dt) {
  return "Rp. " + dt.toFixed(2);
}
while (duit < saldo) {
  duit = duit + HARGA_TELP;
  if (duit < BATAS_PEMAKAIAN) {
    duit = duit + HARGA_ACCS;
  }
}
duit = duit + hitungPajak(duit);
console.log("Satuan Harga HP Rp. "+HARGA_TELP);
console.log("Satuan Harga Aksesoris Rp. "+HARGA_ACCS);
console.log(
  "Kamu harus membayar " + formatBayar(duit)
);
if (duit > saldo) {
  console.log("Ternyata tidak sanggup membayar !!!");
}

var a = 1; //deklarasi variabel a dengan nilai awal 1
a = a + 1; //kemudian menjumlahkan variabel a dengan 1 dan menyimpannya di variabel itu sendiri

alert(a); //alert digunkan untuk menampilkan dalam bentuk pop-up
console.log(a); //digunkan untuk mencetak variabel a

var umur = promt("Masukan umur kamu : "); //prompt digunakan untuk memasukan sebuah nilai
console.log("Umur kamu " + String(umur));

var s = "99.99";
console.log(Number(s)); //untuk mengubah menjadi number gunakan Number(nilai)
s = 99.99;
console.log("Rp. " + String(s)); //untuk mengganti Number menjadi string dan '+' digunakan untuk konkat

const TAX_RATE = 0.09; //const digunakan untuk nilai konstan (tidak boleh berubah)

//menggunakan Perulangan

var pembeli = 10;
while (pembeli > 0) //kondisi jika benar maka akan melakukan Perulangan
{
  console.log("Hai ada yang bisa dibanting?");
  pembeli = pembeli-1;
}

pembeli = 5;
do //melakukan Perulangan minimal satu kali
{
  console.log("Perulangan menggunakan do");
  pembeli = pembeli - 1;
} while (pembeli > 0); //kondisi  jika benar akan melakukan Perulangan

for (var i = 0; i < 5; i++) { //untuk for seperti ini
  console.log("ini untuk for " + i);
}

while (true) //kondisi jika benar maka akan melakukan Perulangan
{
  if (pembeli == 10) {
    break; //ini untuk berhenti mendadak
  }
  console.log(pembeli);
  pembeli = pembeli+1;
}

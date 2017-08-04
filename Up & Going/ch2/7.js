function foo() {
  a = 1; //variabel tidak normal menjadi global, jangan lagi deklarasi variabel seperti ini 
  console.log(a);
}

foo();
console.log(a);

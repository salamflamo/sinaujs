var a =2;

foo();  //ini dulu yang dipanggil

function foo() {
  a = 3;
  console.log(a);
  var a;
}

console.log(a); //ini kedua

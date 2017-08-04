//fungsi
function foo() {
  return 42;
}

foo.bar = "Hello";
typeof foo; //fungsi
typeof foo(); //number
typeof foo.bar; //string

//method yang langsung digunakan
var a = "Halo Dunia";
var b = 3.141294;

console.log(a.length);
console.log(a.toUpperCase());
console.log(b.toFixed(2));

var c = "42";
var d = Number(c);
console.log(typeof(c));
console.log(typeof(d));

var e = 42;
console.log(e == c); // tanda '==' hanya bernilai kembar meskipun satunya number satunya string
console.log(e === c); // tanda '===' keduanya harus bernilai kembar dan bertipe sama, misal string dengan string dan number dg number

a = [1,2,3];
b = [1,2,3];
c = "1,2,3";
console.log(a == b);
console.log(a == c);

a = 41;
b = "42";
c = "43";
console.log(a < b);
console.log(b < c);

a = 42;
b = "foo";
console.log(a<b);
console.log(a>b);
console.log(a==b);

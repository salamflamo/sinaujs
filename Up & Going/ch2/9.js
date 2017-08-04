// belajar menggunakan kondisi

if (a == 2) {
  //do something
} else if (a == 3) {
  //do something else if
} else {
  //do something else
}


switch (a) {
  case 2:
    //do something
    break;
  case 3:
    //do something
    break;
  case 4:
    //do something
    break;
  default:
    //fallback, jika semua case tidak ada yang memenuhi maka akan dijadikan default
}

switch (a) {
  case 2:
  case 10:
    // case 2 dan 10 itu artinya jika a memenuhi 2 atau 10
    break;
  case 20:
    //do something
    break;
  default:
    //do default
}

var a = 42;
var b = (a > 41) ? "Hello" : "World";
// kondisi diatas ini sama saja seperti
// if (a > 41) {
//   b = "Hello";
// } else {
//   b = "World";
// }

// belajar strict mode
function foo() {
  "use strict"; //ini untuk strict mode aktif
  //strict mode
  function bar() {
    //strict mode
  }
}
//bukan strict mode

"use strict"; //ini untuk strict mode aktif
function foo() {
  //this code is strict
  function bar() {
    //thia code is strict
  }
}
//this code is strict


function daa() {
  "use strict"; //ini untuk strict mode aktif
  a = 1;
  console.log(a);
}

daa();

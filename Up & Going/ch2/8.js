function foo() {
  var a = 1;

  if (a >= 1) {
    let b =2;

    while (b < 5) {
      let c = b * 2; //it's just belongs in while , karena menggunakan let maka hanya akan dikenali didalam tanda {}
      b++;

      console.log(a + c);
    }

  }
}

foo();

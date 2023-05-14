function outer() {
  debugger;
  function iner() {
    console.log("ini dari iner fungsi");
  }
  iner();
  // cuma bisa di panggil di dalam fungsi terluar saja
  iner();
}

outer();

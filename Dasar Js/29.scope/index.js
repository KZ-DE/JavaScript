// scope merupakan area akses sebuah data (global scope dam local scope)
// golbal scope
let nilai = 0;
function tambah() {
  nilai++;
}
tambah();
tambah();
console.log(nilai);

// local scope
function a() {
  let x = 0;
  function b() {
    x++;
  }
  b();
  b();
  b();
  console.log(x);
}
a();

// console.log(x); tidak bisa di panggil di luar karena scope local

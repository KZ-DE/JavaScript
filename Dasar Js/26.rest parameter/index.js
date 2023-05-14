// rest parameter
// cuma ada 1 di setiap fungsi jika ingin di gunakan
// harus di gunakan pada akhir parameter jika menggunakan paramerter lebih dari 1

// contoh  1
function rapot(nama, ...nilai) {
  console.log(`${nama} dengan nilai ${nilai}`);
}

rapot("bejo", 2, 3, 4, 23, 4, 2, 432, 3, "hallo", true);

// contoh 2
function nilai(...a) {
  for (const i of a) {
    console.log(i);
  }
}

nilai(3, 4, 32, 4, 3, 3, 2, 42, 4, 24, true, "test");

// contoh 3
function tambah(...x) {
  let hasil = null;
  for (const a of x) {
    hasil += a;
  }
  console.log(hasil);
}

tambah(0, 9, 3, 3, 2, 3);

// spread syntax
let angka = [1, 2, 2, 5, 7, 3];
tambah(angka); // akan berbeda dengan yang atas karena menggunakan vallue

// agar bisa di guakan maka menggunakan ... sebelum nama variabelnya
tambah(...angka);

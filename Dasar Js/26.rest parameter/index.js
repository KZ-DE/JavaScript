// rest parameter
// cuma ada 1 di setiap fungsi jika ingin di gunakan
// harus di gunakan pada akhir parameter jika menggunakan paramerter lebih dari 1

//
function rapot(nama, ...nilai) {
  console.log(`${nama} dengan nilai ${nilai}`);
}

rapot("bejo", 2, 3, 4, 23, 4, 2, 432, 3, "hallo", true);

//
function nilai(...a) {
  for (const i of a) {
    console.log(i);
  }
}

nilai(3, 4, 32, 4, 3, 3, 2, 42, 4, 24, true, "test");

//
function tambah(...x) {
  let hasil = null;
  for (const a of x) {
    hasil += a;
  }
  console.log(hasil);
}

tambah(0, 9, 3, 3, 2, 3);

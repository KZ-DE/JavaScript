// tanpa parameter
function cetak() {
  console.log("Hello word");
}

cetak();

// dengan parameter
function sapa(nama, konsidsi) {
  console.log(`hallo ${nama}, selamat ${konsidsi} `);
}

sapa("sudrun", "malam");

// menambahkan return
function sapa2(nama, konsidsi) {
  const say = `hallo ${nama}, selamat ${konsidsi} `;
  return say;
}
console.log(sapa2("kz", "siang"));
const b = sapa2("bejo", "pagi");
console.log(b);

// menghentikan progam dengan retrun
function cek(array, nilai) {
  for (const isi of array) {
    if (isi === nilai) {
      return 1;
      console.log("test");
    }
  }
  return false;
}
console.log(cek([1, 2, 3, 4, 5, 4, 6, 32, 5], 6));

// parameter default
function hello(name, kondisi = "pagi" || "sore") {
  console.log(`hello ${name}, selamat ${kondisi}`);
}

hello("bejo");

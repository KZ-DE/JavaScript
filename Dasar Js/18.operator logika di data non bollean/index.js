// jika menggunakan OR(||) akan mengambil data boolean yang bersifat truty
let a;
let b;
let c = {};

if (a || b) {
  console.log("Hasil true");
} else {
  console.log("hasil false");
}

if (a || c) {
  console.log("Hasil true");
} else {
  console.log("hasil false");
}

console.info("" || 0);
console.log(null || NaN);
console.log("hallo" || 1);

// studi kasus
// akan mengambil nilai akhir jika nilai awal kosong atau bersifat false
const nama = {
  awal: "",
  akhir: "KZ",
};

console.log(nama.awal || nama.akhir);

console.log("");

// and (&&) akan mengambil nilai fulsy
console.log(1 && 0);
console.log(0 && 1);
console.log("" && 0);
console.log(1 && "nol");

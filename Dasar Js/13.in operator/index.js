// untuk mengecek sebuah properti ada di dalam objek atau tidak
// bisa juga untuk melihat data di dalam index array

let buah = {
  nama: "apel",
  berat: 25,
  harga: null,
};

console.log(buah);
// format yang bener
console.log("nama" in buah);
console.log("harga" in buah);
// format yang salah
console.log(buah.nama in buah);

// karena hasilnya true dan false bisa juga di gabung dengan if
if ("nama" in buah) {
  console.log(buah.nama);
}

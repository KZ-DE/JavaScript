// untuk mengakses properti di dalam objek tampa menggunakan nama objek

const mahasiswa = {
  nama: "sudrun",
  nim: 2219122121,
  semester: 3,
};

// tampa with
console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

console.log("");

// menggunakan whit
with (mahasiswa) {
  console.log(nama);
  console.log(nim);
  console.log(semester);
}

// membuat objek kosong
let orang = {};

// memberi data defaut objek
let mahasiswa = {
  nama: "sudrun",
  nim: 2219111165,
};
console.log(mahasiswa);

// merubah data objek
// format bisa seperti ini
mahasiswa["nama"] = "bejo";
//atau seperti ini
mahasiswa.nim = 10120391233;
console.log(mahasiswa);

// menambah data objek
mahasiswa["hobi"] = "tidur";
mahasiswa.prodi = "Teknik Elektro";
console.log(mahasiswa);

// menghapus data objek
delete mahasiswa.hobi;
console.log(mahasiswa);

// di lihat dengan tabel
console.table(mahasiswa);

// menggunakan console.info
console.log(`Nama : ${mahasiswa.nama}`);
console.info(`Nama : ${mahasiswa.nama}`);

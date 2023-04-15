// digunakan untuk mengamankan ketika ingin mengakses sebuah objek dari data nullis

// tampa optional chaining (akan error karana datanya tidak ada atau undifined)
let nama = {};
// const hasil = nama.pria.hasil;

// console.log(hasil);

// menggunakan optional chaining
console.log(nama?.putri?.hasil2);

// jika di beri nilai
nama = {
  putri: {
    hasil2: "wanita",
  },
};
console.log(nama?.putri?.hasil2);

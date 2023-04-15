// tampa tenary operator
let nilai = 75;
let ucapan; // tidak bisa const karena berubah

if (nilai >= 75) {
  console.log("selamat anda lulus");
} else {
  console.log("Coba Lagi besok ya kak");
}

// dengan tenary operator
// kiri true, kanan false
const sapa =
  nilai >= 75 ? console.log("Hallo Tuan") : console.log("Anda siapa"); // bisa menggunakan const karena nilainya belum tetap

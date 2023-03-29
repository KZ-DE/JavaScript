document.write("Test 123"); // untuk menulisakn teks di dalam web

let nama;

nama = prompt("masukan nama anda "); // untuk menampilkan inputan yang bisa di isi oleh pengguna

user = confirm(`nama anda ${nama}`); // untuk menampilkan konfirmasi ke pengguna

if (nama == "taufik") {
  alert(`halo tuan ${nama}`); // untuk menampilkan pesan
} else {
  alert("siapa kamu?");
}

console.log(nama);

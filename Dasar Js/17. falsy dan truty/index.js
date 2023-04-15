// falsy
// digunakan untuk menganggap sebuah vallue ata nilai dalam konteks boolean di anggap false
// sting kosng, undifine, null, 0

// cek dangan menggunakan if
let data = ""; // akan berubah menjadi false jika di gunakan

if (data) {
  console.log("true");
} else {
  console.log("false");
}

// menggunakan tenary
console.log(data ? "true" : "false");

// truty
// semua vallue selain vallue falsy
let array = []; // bernilai true
console.log(array ? "hasil true" : "hasil false");

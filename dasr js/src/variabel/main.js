// dalam js membuat variabel dapat menggunkan let, var dan const

var a = 12;
var b = "ucup";
var c = [12, "ucup", true];

console.log(a, b, c); // bisa di tampilkan menjadi 1 sekaligus

for (let index = 0; index < c.length; index++) {
  // untuk menampilkan semua data pada array menggunakan for loop
  console.log(c[index]);
}

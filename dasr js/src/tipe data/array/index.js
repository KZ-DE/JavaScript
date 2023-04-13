// membuat array
let array = [1, 2, 3];
document.write(`<p>variabel array = ${array}</p>`);

// untuk menmabhakn nilai baru pada array menggunaka method push (di gunakan untuk mengisi value baru secara berurutan)
array.push("ucup");
document.write(
  `<p> menggunakan method push untuk menambahkan data baru pada array = ${array} </p>`
);
// jika inggin pada index tertentu bisa menggunakan cara <namun index yang belum mempunyai value akan kosong>
array[10] = "dudung";

// untuk melihat isi index serta isi dari arraynya bisa menggunakan concole.tabel
console.table(array);

// meliaht panajang array
console.log(array.length);

// kelemahan menggunakan psuhyaitu tidak akan mengisi index yang kosong
array.push("otong", "bejo");
console.table(array);

// menghapus vallue dalam array (tidak akan mengubah posisi index)
delete array[3];
console.table(array);

// 3D array
let d1 = [1, 2, 3];
d1.push([4, 5, 6]);
// tampilan pada console
console.table(d1);
console.log(d1);
// tampilan pada web
document.writeln(`<p>array 2 dimensi ${d1}</p>`);
// jika menggunakan looping
for (let i = 0; i < d1.length; i++) {
  document.writeln(`<p>menampilkan array dengan looping${d1[i]}</p>`);
}

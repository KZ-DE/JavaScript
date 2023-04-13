// array kosong
let k = [];
console.log(k);
console.log("");

// aray dengan isinya
let a = [1, 2, 3, 4, 5.5, true, "sudrun"];
console.log(a);
console.log("");

// menambah array
// dengan memberi urutan
a[10] = "kz"; // jika index sebelumnnya masih kosng maka akan tetap kosong (empity items artinya masih ada index yang kosong)
console.log(a);
console.log("");

// dengan variabel
let val = "10";
a[8] = val;
console.log(a);
console.log("");

// dengan method push(supaya urut indexnya)
a.push(6);
a.push(7, "delapan");
console.log(a);
console.log("");

// di sarankan untuk melihat tipe data array menggunakan console.table (namun tidak di perlihatkan tulisan empity item)
console.table(a);
console.log("");

// untuk menghitung panjang array
console.log(a.length);
console.log("");

// untuk mengambil data pada index tertentu
console.log(a[3]);
console.log("");

// mengubah data pada index tertentu
a[3] = 4.6;
console.log(a[3]);
console.log("");

// mengkososngkan nilai pada index tertentu
delete a[(1, 2)];
console.table(a);

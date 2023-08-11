let a = 10;
let b = "10";
let hasil;


// ketika beda tipe data + tampa di konversi dahulu
hasil = a + b;
console.log(hasil);
console.log(typeof hasil);
console.log("");
// 1010
// string


// konversi string ke number
// string ke bil bulat
c = parseInt(b);
hasil = a + c;
console.log(hasil);
console.log(typeof parseInt(b));
console.log("");
// 20
// number


// string  ke bil pecahan
c = parseInt(b);
hasil = a + c;
console.log(hasil);
console.log(typeof parseFloat(b));
    console.log("");

// string ke number<int / float>
c = parseInt(b);
hasil = a + c;
console.log(hasil);
console.log(typeof Number(b));
console.log("");

// number ke string
d = a.toString();
console.log(typeof d);
console.log();

// jika konversi string ke number tidak sesuai maka akan berubah Nan (Not a Number)
let x = "kz";
x = Number(x);
console.log(x);
console.log(typeof x);

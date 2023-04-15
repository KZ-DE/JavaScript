// mirip seperti tenary operator

// menggunakan cara bisa
let data, hasil;
hasil = data;

if (hasil === undefined || hasil == null) {
  hasil = "Default";
}
console.log(hasil);

// cara nullis
let nullis = data ?? "Nullis defaule";
console.log(nullis);

// dengan blok
const fungsi = (...name) => {
  console.log(`hello ${name}`);
};

fungsi("bejo", "sudrun");

// tampa blok namun fungsi sedehana yang cuma 1 baris
let nonblok = (name) => console.log(`hello ${name}`);

nonblok("kz");

// dengan retrun
// jika menggunakan block
let ablok = (x, y) => {
  return x + y;
};
console.log(ablok(2, 3));

// tampa block
let anonblock = (x, z) => x + z;

console.log(anonblock(3, 3));

// tampa kurung parameter
let nonparm = (name) => console.log(`hello ${name}`);

nonparm("sudrun");

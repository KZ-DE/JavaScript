const orang = {
  name: "bejo",
  sapa: (name) => console.log(`hello ${name}`),
};
console.log(orang.name);
orang.sapa("sudrun");

// test fungsi berisi objek
let a = (param) => {
  let x = {
    pertama: "satu",
    kedua: "dua",
  };
  return x;
};

for (let c in a()) {
  console.log(a()[c]);
}

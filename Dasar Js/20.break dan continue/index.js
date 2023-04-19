// break
let a = 0;

while (true) {
  a++;
  console.log(a);
  if (a === 10) {
    break;
  }
  console.log("hello word");
}

// continue
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    continue; // akan melewatkan perulangan yang di inginkan(jika 'i' nya genap)
  }
  console.log(i);
}

for (let x = 0; x < 5; x++) {
  console.log(x); // akan di eksekusi bila perulangan di atas selesai
}

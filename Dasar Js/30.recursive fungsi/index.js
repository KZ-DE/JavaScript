// kemampuan fungsi memanggil dirinya sendiri

// contoh faktorial tampa recursive fungsi
function faktor(x) {
  let a = 1;
  for (let i = 1; i <= x; i++) {
    a *= i;
  }
  return a;
}

console.log(faktor(5));

// dengan rekursiv
function a(x) {
  if (x === 1) {
    return 1;
  } else {
    console.log(x);
    return x * a(x - 1);
  }
}

console.log(a(5));

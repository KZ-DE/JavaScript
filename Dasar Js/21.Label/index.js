// di gunakan untuk memilih mana yang akan di break dan di continue

loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 50; j++) {
    if (j > 10) {
      continue loopi;
    }
    console.log(`${i}-${j}`);
  }
}

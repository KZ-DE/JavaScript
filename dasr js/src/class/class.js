class hero {
  constructor(...args) {
    // wajib menggunakan this
    this.args = args;
  }

  nama(...self) {
    console.log(
      `Hallo ${self[0]} ${this.args[0]}, ${self[1]} muda umur ${this.args[1]}`
    );
  }
}

// new di gunakan untuk menyalin dan menipa isi variabel dari sebuah constructor
const bos = new hero("taufik", 22);

bos.nama("tuan bos", "tuan");
console.log(bos);

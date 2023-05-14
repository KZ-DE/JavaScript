// untuk mengakses scope lokal untuk di akses menjadi global
function header(vall) {
  let bahan = "haeder";
  function isi(params) {
    console.log(bahan); // mengakses local scope
    return console.log(vall + params);
  }
  return isi;
}

// mengakses di luar fungsi
const a = header(5);
a(10);

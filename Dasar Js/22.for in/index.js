// di gunakan untuk mengambil nama property dalam tipe data objek

const mahasiswa = {
  nama: "sudrun",
  nim: 221912222222,
  semester: 3,
};

for (let a in mahasiswa) {
  console.log(`${a} = ${mahasiswa[a]}`);
}

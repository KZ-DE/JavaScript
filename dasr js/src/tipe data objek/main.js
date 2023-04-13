// tipe data objek adalah vallue array yang bukan nummber

// membuat obejek
let x = { test: "123", hallo: "apa kabar" };
console.log(x);
console.table(x);

// membuat objek kosong
const profil = {};

// menambah atau mengubah obejek
// menambah
profil["nama depan"] = "sudrun";
profil["nama belakang"] = "bin bejo";
profil["umur"] = 20;
// merubah
profil["nama belakang"] = "bejo makmur";
profil["perkerjaan"] = "teknisi di google";
profil.cita = "sukses";
console.table(profil);
// menghapus
delete profil.perkerjaan;
console.table(profil);

// tampilan pada web
document.writeln(
  `<p>${profil["nama belakang"] + " " + profil["nama depan"]}</p>`
);

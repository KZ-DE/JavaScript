// 1. parse di gunakan untuk mengubah format tipe data ke int atau float
// untuk ke string menggunakan string()
// untuk ke bool make boolean()
let saldoSaatIni = parseInt(prompt("Masukan Saldo Anda : "))
let saldoTambahan = parseInt(prompt("masukan Tabungan Anda : "))
let saldoTotal
saldoTotal = parseInt(saldoSaatIni, saldoTambahan)
saldoTotal = saldoSaatIni + saldoTambahan
alert (`Total saldo anda sebesar ${saldoTotal}`)

// 2.
let hari = new Date().getDay()
let namaHari
switch (hari) {
    case 1:
        namaHari = "senin"
        break;
    case 2:
        namaHari = "selasa"
        break;
    case 3:
        namaHari = "rabu"
        break;
    case 4:
        namaHari = "kamis"
        break;
    case 5:
        namaHari = "jum'at"
        break;
    case 6:
        namaHari = "sabtu"
        break;
    default:
        namaHari = "Minggu"
        break;
}
console.log(`Hari ini adalah hari ${namaHari}`)
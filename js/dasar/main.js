// alert di gunakan untuk menulis string untuk di tampilkan di box pemberitahuan web 
alert("Hello World")





//  di gunakan untuk menampilkan di dalam console (tempat trobel shooting sebelum di tampilkan di web)
console.log("Test console")





// untuk menampilkan popup untuk mengisi imputan
var usia = prompt ("Maukan umur anda anda : ")
alert("Umur anda adalah : " + usia)





// membuat variabel ada beberapa cara

// cara 1
var nama = "Taufik"
console.log("Hallo " + nama)
// cara 2
const a = 2 // nilai variabelnya tidak dapat di ubah

// cara 3
let b = 2 // nilainya dapat di rubah






// tipe data yang ada di js

// string
var nama = "bejo"
// int
var usia = 10
// float
var tinggiBadan = 124.3
// tak ada
var beratBadan
// kosong
var teman = null





//// percabangan
// if
if (teman == null) {
    teman = "Nolep"
} else {
    teman = "mantap"
}

// switch
switch (tinggiBadan) {
    case 120:
        console.log("bejo pendek")
        break;
    case 200:
        console.log("Bejo Tinggi")
        break;
    default:
        console.log("Bejo sedengan")
        break;
}



// format stringbdengan variabel
// menggunakan tanda petik terbalik <sebelah angka 1> serta menggunakan dolar dan kurawal untuk variabelnya
alert(`nama saya ${nama}, dan usia saya ${usia}, tinggi badan saya
${tinggiBadan}, berat badan saya ${beratBadan} dan teman saya ${teman}`) // sepasi dan enter mempengaruhi tampilan yang ada di web






// menggunakan aritmatika di dalam format string

let sladoAwal = 50.000
let saldoTambahan = 20.000

alert(`Saldo awal saya sebesar ${sladoAwal}, sedangkan saldo tambahan saya sebesar ${saldoTambahan}. \n jumlah total saldo saya sebesar ${sladoAwal+saldoTambahan}`)

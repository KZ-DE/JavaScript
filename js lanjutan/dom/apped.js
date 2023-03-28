// melihat isi dari title HTML
console.log(document.title)

// mengubah Title HTML
document.title = "Tes"




// mengubah isi dari body HTML
console.log(document.body)



// untuk menulis isi body html di js
const body = document.body
// mengisi body
body.append("Hello Word")




// membuat variabel element H1
const h1 = document.createElement("h1")
// mengisi isi h1
h1.textContent = "<marquee>APA KABAR</marquee>"
// menampilkannya di web
body.append(h1)


// menggunakan innerb Html
//  bisa di gabung dengan element lainnya
const nama = document.createElement('p')
nama.innerHTML = '<marquee>Bejo</marquee>'
body.append(nama)

// menggunakan inner teks
const teman = document.createElement('p')
teman.innerText = '<marquee>sudrun</marquee>'
body.append(teman)


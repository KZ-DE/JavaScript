a = 10;
b = 1.2;
c = true;
d = "sudrun";

// string biasa
console.log("Umur saya " + a + " dan nama saya " + d);

// string template
console.log(`umur saya ${a} dan nama saya ${d}\n`);

// bisa juga menambah expresi + bisa untuk multiline
// misal ipk lulus minimal 1,5
console.log(`nama : ${d}
ipk : ${b}
dinyatakan lulus : ${b >= 1.5}
`);

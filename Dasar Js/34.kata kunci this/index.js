// kata kunci untuk melihat refrensi progam milik siapa
// sering di gunakan di objek method

const person = {
  name: "ucup",
  sayhello: (name) => {
    console.log(`hello ${name}, nama saya adalah ${person.name}`); // tidak bisa menggunaka this.name
  },
};

person.sayhello("bejo");

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector("btn2");
const btn3 = document.getElementById("btn3");

// syeling di dalam js
btn1.style.border = "none";
btn1.style.pandding = "8px";
btn1.style.fontSize = "24px";
btn1.style.background = "red";
btn3.style.borderRadius = "20px";

// menggunakan perintah onclik
function test() {
  btn1.style.background = "blue";
}

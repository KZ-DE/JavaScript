const http = require("http");
const host = "localhost";
const port = 3001;

// request = data masuk dari luar
// response = data keluar dari sistem

const server = http.createServer(function (requeest, response) {
  // penggunaan variable yang di dalam kurung wajib ada karean baawa dari fungsi creatserver

  response.statusCode = 500;
  response.end("Hello Word\nApa kabar?"); // ketika server 3001 di buka akan menghasilkan tulisan hello word
});

// di gunakan untuk membuat server terus menyala dan menuliskan sesuati di termina sebagai parameter
server.listen(port, host, function () {
  console.log(`server menyala... port${port}:${host}`);
});

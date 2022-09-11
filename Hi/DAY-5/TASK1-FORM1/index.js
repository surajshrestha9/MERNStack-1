const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const dirPath = path.join(__dirname, "public");
console.log(dirPath);

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     // console.log("TRUE");
//     fs.createReadStream(`${dirPath}/index.html`, "utf-8").pipe(res);
//     res.writeHead(200, { "Content-Type": "text/html" });
//   } else if (req.url == "/form1.html") {
//     fs.createReadStream(`${dirPath}/form1.html`, "utf-8").pipe(res);
//     res.writeHead(200, { "Content-Type": "text/html" });
//   } else if (req.url == "/form2.html") {
//     fs.createReadStream(`${dirPath}/form2.html`, "utf-8").pipe(res);
//     res.writeHead(200, { "Content-Type": "text/html" });
//   }
//   // console.log(req.method);
// });

/////////////////// -------------> FOR TESTING
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(`${__dirname}/public/form1.html`, "utf-8").pipe(res);
  }
  if (req.method == "POST") {
    let data;
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000, () => {
  console.log("SERVER AT 8000");
});

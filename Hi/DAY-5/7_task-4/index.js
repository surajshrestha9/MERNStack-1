// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const path = require("path");
// const dirPath = path.join(__dirname, "public");
// const server = http.createServer((req, res) => {
//   // render and display index.html

//   if (req.url === "/") {
//     fs.readFile(`${dirPath}/index.html`, "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//         res.end();
//       }
//     });
//   }
// });

// server.listen(8000, () => {
//   console.log("server at 8000");
// });

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const http = require("http");
const path = require("path");
const fs = require("fs");
const dirPath = path.join(__dirname, "public");
console.log(dirPath);
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    // // res.write("GET METHOD");
    // fs.readFile(`${dirPath}/index.html`, "utf-8", (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     // res.write(data);
    //     res.end(data);
    //     // res.end();
    //   }
    // });
    //////////////////////////////////
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(`${dirPath}/index.html`).pipe(res);
  } else if (req.method == "POST") {
    // res.write("your form is submit ... and this msg comes from post method");
    // res.end();
    // but now ... i want to read the data from client what data client send us ...
    let data = null;
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text" });
      res.write(data);
      res.end();
    });
  }
});
server.listen(8000, () => {
  console.log("SERVER AT 8000");
});

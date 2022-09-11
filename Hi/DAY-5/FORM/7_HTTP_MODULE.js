const fs = require("fs");
const url = require("url");
const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("HI");
  }
  if (req.url == "/form1") {
    fs.readFile("./form1.html", "utf-8", (err, data) => {
      if (err) {
        console.log("ERROR");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        // console.log(data);
      }
    });
    // res.end("HI");
  }

  //   if (req.method == "GET") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("HELLO FROM GET METHOD");
  //   } else if (req.method == "POST") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("HELLO FROM POST METHOD");
  //   } else {
  //     res.writeHead(405, "Unknow method", { "Content-Type": "text/html" });
  //     res.write("405 UNKNOW METHOD ERROR");
  //   }
  //   //   console.log(`${req.method}: ${Date()}`);
  //   //   res.write("HI, SHIBU");
  //   res.end();
});
server.listen(8000, () => {
  console.log("server at 8000");
});

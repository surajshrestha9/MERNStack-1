const http = require("http");
// const url = require("url");
const fs = require("fs");
const path = require("path");

const mySitePath = path.join(__dirname, "MYSITE1");

// INTEGRATE THE HTML CSS JS FILE IN NODE JS ENV

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(`${mySitePath}/index.html`, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url.match(".css$")) {
    //load css file
    let cssPath = path.join(__dirname, "MYSITE1", req.url);
    let fileStream = fs.createReadStream(cssPath, "utf-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match(".jpg$")) {
    //load jpg file
    let imgPath = path.join(__dirname, "MYSITE1", req.url);
    let fileStream = fs.createReadStream(imgPath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else if (req.url.match(".js$")) {
    let jsPath = path.join(__dirname, "MYSITE1", req.url);
    let fileStream = fs.createReadStream(jsPath, "utf-8");
    res.writeHead(200, { "Content-Type": "text/script" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page not found");
  }
});

server.listen(8000, () => {
  console.log("server at 8000");
});

////////////////////////////////////////////////////////////////////

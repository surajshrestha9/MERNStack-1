var xml = require("xml");
const fs = require("fs");

let jsonData = fs.readFileSync("./sample.json", "utf-8", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("data read success");
  }
});

// let xmlData = xml(jsonData, true);
let xmlData = xml(jsonData);
fs.writeFileSync("data/sample3.xml", xmlData, "utf-8");

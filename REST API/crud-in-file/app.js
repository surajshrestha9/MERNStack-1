const express = require("express");
const fs = require("fs");
let database = require("./data.json");
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  let data = JSON.parse(req.body);
  fs.writeFile("./data.json", "shiva", "utf-8", (err, result) => {
    if (err) console.log("error");
    console.log("done");
  });
});

app.listen(8000, () => {
  console.log("server at 8000");
});

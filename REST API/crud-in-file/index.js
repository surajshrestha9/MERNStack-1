const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

let data = { id: 1, name: "shiva", address: "ktm" };

fs.writeFile("data.json", JSON.stringify(data), "utf-8", (err, result) => {
  if (err) console.log("error");
  console.log("success");
});

app.listen(8000, () => {
  console.log("server at 8000");
});

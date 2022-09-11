// const express = require("express");
// const path = require("path");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static("public"));

// const publicPath = path.join(__dirname, "public");

// app.get("/:id", (req, res) => {
//   res.send("you are in overview page");
//   // console.log(req.query);
//   // console.log(req.params);
//   // console.log(req.path);
// });

// app.get("/home", (req, res) => {
//   res.send("THIS IS OUR HOME PAGE");
// });

// app.get("/form", (req, res) => {
//   res.sendFile(`${publicPath}/form.html`);
// });

// app.post("/", (req, res) => {
//   res.send("YOUR FORM IS SUBMIT");
// });

// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/404.html`);
// });

// app.listen(8000, () => {
//   console.log("SERVER STARTED AT 8000");
// });

//////////////////////////////////////////////////////////////////////////////
const http = require("http");

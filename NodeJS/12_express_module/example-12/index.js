// npm init

// create new app

var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.get("", (req, res) => {
  //   res.send(" hi there");
  res.render("index"); // by default  //views/index.ejs
});

app.get("/contact", (req, res) => {
  // res.render("contact");
  var objPerson = {
    id: 1,
    name: "thapa",
    address: "ltp",
  };
  var objPersons = [

    {id: 1,   name: "shiva", address:'KTM'},
    {id: 2,   name: "BISHAL", address:'LAT'},
    {id: 3,   name: "NIROJ", address:'LAG'},
    {id: 4,   name: "ASIM", address:'LUB'},
    {id: 5,   name: "MITRE", address:'KTM'}
    
  ];//file//
  res.render("contact", { objPerson,objPersons}); // views/index.ejs
});

//csv
//pagination  -> mini library painxa
app.listen(8000);

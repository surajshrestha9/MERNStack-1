import { insertRecord } from "./database.js";

var homeController = (request, response) => {
  response.render("index");
};

const formController = (req, res) => {
  //   res.send("HI, THERE iam coming from formController");
  // receives all values from web form
  //   console.log(req.body);
  //   res.send(req.query);
  let fullName = req.query.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.query.message;
  // validation?
  // if (pass) -> send to database ...
  let values = ["a", "s@", "sub1", "msg"];
  let result = insertRecord(values);
  if (result) {
    // res.send("Connect database successfully");
    res.send("Insert record successfully");
  } else {
    // res.send("Error to connect database");
    res.send("Error to insert record");
  }
};

export { homeController, formController };

import mysql from "mysql";
const connectDB = () => {
  // connect with database server
  // true or false
  let result = false;
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mern6",
  });

  // insert, update, select, delete

  // at the begin
  conn.connect(function (err) {
    if (!err) {
      console.log("Connected");
      result = true;
    } else {
      throw err;
    }
  });

  // At the end
  conn.end(function (err) {
    if (err) {
      return console.log(`error: ${err}`);
    }
    console.log("Close the database connection");
  });
  return result;
};

let insertRecord = (values) => {
  let res = false;
  let sql = `INSERT INTO queries(name, email, subject, message) VALUES(?)`;
  // let values = ['shibu chapagain', "shibu@gmail.com", "DSA", "MESSAGE1"];
  var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mern6",
  });
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, [values], function (err, result) {
      if (!err) {
        //   console.log(result.affectedRows);
        console.log("Insert record successfully");
        res = true;
      } else {
        throw err;
      }
    });
  });
  return res;
};

export { insertRecord };

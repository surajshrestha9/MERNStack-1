import mysql from "mysql";

// const conn_str = {
//   connectionLimit: 5,
//   host: "localhost",
//   user: "root",
//   password: "",
// };
const conn_str2 = {
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  password: "",
  database: "mern6",
};

const connectDBServer = function () {
  const conn = mysql.createConnection(conn_str);
  conn.connect(function (err) {
    if (!err) {
      console.log("Connected");
    } else {
      throw err;
    }
  });

  conn.end(function (err) {
    if (err) {
      return console.log(`error: ${err}`);
    }
    console.log("Close the database connection");
  });
};

const displayDatabases = () => {
  var conn = mysql.createConnection(conn_str);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query("show databases", function (err, result, fields) {
      if (!err) {
        console.log(result); // HW -> listing name of database using forEach loop.
      } else {
        throw err;
      }
    });
  });
};

const createDatabase = (dbName) => {
  var conn = mysql.createConnection(conn_str);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(`CREATE DATABASE ${dbName}`, function (err, result, fields) {
      if (!err) {
        console.log(result);
      } else {
        throw err;
      }
    });
  });
};

const dropDatabase = (dbName) => {
  var conn = mysql.createConnection(conn_str);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(`DROP DATABASE ${dbName}`, function (err, result, fields) {
      if (!err) {
        console.log(result);
      } else {
        throw err;
      }
    });
  });
};

const createTable = () => {
  let sql = `CREATE TABLE IF NOT EXISTS persons(
        pid int primary key,
        name varchar(50) not null,
        address varchar(50) not null
    )`;
  var conn = mysql.createConnection(conn_str2);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, function (err, result, fields) {
      if (!err) {
        console.log(result);
      } else {
        throw err;
      }
    });
  });
};

// CRUD

// Create
const insertRecord = (values) => {
  let sql = `INSERT INTO persons(pid, name, address) VALUES(?)`;
  var conn = mysql.createConnection(conn_str2);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, [values], function (err, result) {
      if (!err) {
        console.log(result.affectedRows);
      } else {
        throw err;
      }
    });
  });
};

// Select / Retrieve

const selectAll = () => {
  let sql = `SELECT * FROM persons`;
  var conn = mysql.createConnection(conn_str2);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, function (err, result) {
      if (!err) {
        console.log(result);
      } else {
        throw err;
      }
    });
  });
};

const searchRecord = (pid) => {
  let sql = `SELECT * FROM persons WHERE pid=?`;
  let values = [pid]; // set pid value
  var conn = mysql.createConnection(conn_str2);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err) {
        console.log(result);
      } else {
        throw err;
      }
    });
  });
};

const updateRecord = (values) => {
  let sql = `UPDATE persons SET name=?, address=? WHERE pid=?`;
  var conn = mysql.createConnection(conn_str2);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err) {
        console.log(result.affectedRows);
      } else {
        throw err;
      }
    });
  });
};

const recordDelete = (pid) => {
  let sql = `DELETE FROM persons WHERE pid=?`;
  let values = [pid];
  var conn = mysql.createConnection(conn_str2);
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err) {
        console.log(result.affectedRows);
      } else {
        throw err;
      }
    });
  });
};

// connectDBServer();
// displayDatabases();
//createDatabase("mern6");
// dropDatabase("mern6");
// displayDatabases();
// createTable();
// HW -> Display all the tables of database

/////////////////////////////////////////////////////////////////////////////
// CRUD ------>
// C -> Create / Insert
// let values = [1, "shiva chapagain", "Pokhara"];
// insertRecord(values);

// R -> Read / Retrieve
// selectAll();

// Read -> select with filter
// searchRecord(1);

// U --> Update | Edit
// let values = ["shibu chapagain", "Kathmandu", 1];
// updateRecord(values);
// selectAll();

// D --> Delete
// recordDelete(1);

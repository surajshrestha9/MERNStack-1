// npm install mysql
<<<<<<< HEAD
// Database Info
/*
    HOST: localhost/127.0.0.1
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

// Database Info
/*
    HOST: localhost/127.0.0.1/192.168.0.101
    PORT: 3306
    USER: root
    PASS: ''
    DB: test
    TABLE: persons (pid*, name, address)
*/

// var mysql = require('mysql');
import mysql from 'mysql';

// Connect with database server

<<<<<<< HEAD
// var conn = mysql.createConnection({host: "localhost", port: 3306, user: "root", password: ""});
// var conn = mysql.createConnection({host: "localhost", user: "root", password: "", database:'test'});

var conn = mysql.createConnection({host: "localhost", user: "root", password: ""});
/* var conn = mysql.createConnection({host: "localhost", user: "root", password: "", database:'test'});
=======
/*
var conn = mysql.createConnection({host: "localhost", user: "root", password: ""});
// var conn = mysql.createConnection({host: "localhost", user: "root", password: "", database:'test'});
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
conn.connect(function(err) {
    if (!err) {
        console.log("Connected!");
    }
    else{
        throw err;
    }    
});
<<<<<<< HEAD
//insert, update, select ,delete
=======
//insert, update, select, delete
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
conn.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
<<<<<<< HEAD
  console.log('sucessfuly the database connection.');
}); */
=======
  console.log('Close the database connection.');
});
*/
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

// Note: 
    // connection.destroy();

// Connection pool
/*
<<<<<<< HEAD
//normally database 1 database 1 user pool le 1 db 5 user
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
var pool = mysql.createPool({connectionLimit: 5, host: 'localhost', user: 'root', password: '', database: 'test'});
pool.getConnection(function(err, connection) {
    // execute query
    // ...
    connnection.release();
});
pool.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
    // close all connections
});
*/

// Display all the databases of server
<<<<<<< HEAD

=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
/*
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query("show databases", function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
<<<<<<< HEAD
}); */

=======
});
*/
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

// Create new database
/*
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query("create database dbnode", function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Drop database
/*
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query("drop database dbnode", function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Creating new table
/*
let sql = `CREATE TABLE IF NOT EXISTS persons(
    pid int primary key,
    name varchar(50) not null,
    address varchar(50) not null
)`;
<<<<<<< HEAD
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});

    // conn.query("CREATE database dbnode", function (err, result, fields) {
    // conn.query("DROP database dbnode", function (err, result, fields) {
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
<<<<<<< HEAD
}); */


// Inserting new record
/*
=======
});
*/

// Inserting new record
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
let sql = `INSERT INTO persons(pid, name, address) VALUES(?)`;
let values = [1, 'Raj Rai', 'Kathmandu'];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, [values], function (err, result) {
      if (!err){
        console.log(result.affectedRows);
      } 
      else{
        throw err;
      }            
    });
<<<<<<< HEAD
}); */


// Display All Records

/* let sql = `SELECT * FROM persons`;
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
});

// Display All Records
/*
let sql = `SELECT * FROM persons`;
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, function (err, result) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
<<<<<<< HEAD
}); */


// Search Records

/* let sql = `SELECT * FROM persons WHERE pid=?`;
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
});
*/

// Search Records
/*
let sql = `SELECT * FROM persons WHERE pid=?`;
let values = [10,];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
<<<<<<< HEAD
}); */
=======
});
*/
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

//Update Record
/*
let sql = `UPDATE persons SET name=?, address=? WHERE pid=?`;
let values = ['Rita Bhatta', 'Lalitpur', 2];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err){
        console.log(result.affectedRows);
      } 
      else{
        throw err;
      }            
    });
<<<<<<< HEAD
}); */


// Delete record

/* let sql = `DELETE FROM persons WHERE pid=?`;
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
});
*/

// Delete record
/*
let sql = `DELETE FROM persons WHERE pid=?`;
let values = [2,];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err){
        console.log(result.affectedRows);
      } 
      else{
        throw err;
      }            
    });
<<<<<<< HEAD
}); */
=======
});
*/
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

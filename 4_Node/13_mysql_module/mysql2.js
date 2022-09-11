import mysql from 'mysql';

const conn_str = { host: "localhost", user: "root", password: "" }
const conn_str2 = { host: "localhost", user: "root", password: "", database: "mern6" }

var connectDBServer = function () {
    var conn = mysql.createConnection(conn_str);
    conn.connect(function (err) {
        if (!err) {
            console.log("Connected!");
        }
        else {
            throw err;
        }
    });
    conn.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Connection close');
    });
}

var displayDatabases = function () {
    var conn = mysql.createConnection(conn_str);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query("show databases", function (err, result, fields) {
            if (!err) {
                console.log(result); //hw -> listing name of database using foreach loop
            }
            else {
                throw err;
            }
        });
    });
}

var createDatabase = function (dbName) {
    var conn = mysql.createConnection(conn_str);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(`CREATE DATABASE ${dbName}`, function (err, result, fields) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
}

var dropDatabase = function (dbName) {
    var conn = mysql.createConnection(conn_str);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(`DROP DATABASE ${dbName}`, function (err, result, fields) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
}

var createTable = () => {
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
            }
            else {
                throw err;
            }
        });
    });
};

var insertRecord = (values) => {
    let sql = `INSERT INTO persons(pid, name, address) VALUES(?)`;
    var conn = mysql.createConnection(conn_str2);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, [values], function (err, result) {
            if (!err) {
                console.log(result.affectedRows);
            }
            else {
                throw err;
            }
        });
    });
};

var selectAll = () => {
    let sql = `SELECT * FROM persons`;
    var conn = mysql.createConnection(conn_str2);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, function (err, result) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
};

var searchRecord = (pid) => {
    let sql = `SELECT * FROM persons WHERE pid=?`;
    let values = [pid,];
    var conn = mysql.createConnection(conn_str2);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, values, function (err, result) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
};


var updateRecord = (values) => {
    let sql = `UPDATE persons SET name=?, address=? WHERE pid=?`;
    var conn = mysql.createConnection(conn_str2);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, values, function (err, result) {
            if (!err) {
                console.log(result.affectedRows);
            }
            else {
                throw err;
            }
        });
    });
}

var deleteRecord = (pid) => {
    let sql = `DELETE FROM persons WHERE pid=?`;
    let values = [pid,];
    var conn = mysql.createConnection(conn_str2);
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, values, function (err, result) {
            if (!err) {
                console.log(result.affectedRows);
            }
            else {
                throw err;
            }
        });
    });
};

<<<<<<< HEAD
var showTable = () => {
    var sql = "SHOW TABLES  ";
    var con = mysql.createConnection(conn_str2);

    con.connect(function (err) {
        if (err) throw err;
        console.log('connected');

    });

    var tableContent = document.getElementById("tableContent");
    tableContent.innerHTML = "";

    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var i;
        for (i = 0; i < result.length; i++) {

            var num = result[i].Tables_in_test;
            var list = "<tr><td><button value=" + num + " onclick='deletorr(this)'></button></td></tr>";
            tableContent.innerHTML += list;
        }
    });

};


// connectDBServer();

// displayDatabases();
=======

// connectDBServer();

displayDatabases();
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
// createDatabase('mern6');

// dropDatabase('mern6');
// displayDatabases();

// createTable();
// hw -> display all the tables of database
<<<<<<< HEAD
var express = require('express')
var app = express()
app.use(express.urlencoded());
app.get('', (request, response) => {
    response.send(showTable());
});


// CRUD

// C - Create | Insert Record
=======

// CRUD
// C - Crete | Insert Record
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
// let values = [1, 'Raj Rai', 'Kathmandu'];
// insertRecord(values);

// R - Retrive | Select | Filter
// selectAll();
// searchRecord(1);

// U - Update | Edit
// let values = ['Rita Bhatta', 'Lalitpur', 1];
// updateRecord(values);
// selectAll();

<<<<<<< HEAD
// D - Delete / Remove
// let pid = 1;
// deleteRecord(pid);
// selectAll();
=======
// D - Delete / Remove 
let pid = 1;
deleteRecord(pid);
selectAll();
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8


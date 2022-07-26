// Example-1
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    response.send("Hello world of express!");
});
app.listen(8000);
*/

// Example-2 - Multiple Request
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    response.send("Index page!");
});
app.get('/about', (request, response)=>{
    response.send("About Us");
});
app.get('/services', (request, response)=>{
    response.send("Our Services");
});
app.get('/contact', (request, response)=>{
    response.send("Contact Us");
});
app.get('*', (request, response)=>{
    response.send("404 Page not found!");
});
app.listen(8000);
*/

// Example-3- HTML Contents
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    var str1 = `
    <html>
        <head><title>Index Page</title></head>
        <body>
            <h1>Welcome to mysite.com</h1>
            <p><a href=''>Index</a> | <a href='/about'>About Us</a> |<a href='/services'>Services</a> | <a href='/contact'>Contact Us</a></p>
        </body>
    </html>`;
    response.send(str1);
});
app.get('/about', (request, response)=>{
    var str1 = `
    <html>
        <head><title>About Us</title></head>
        <body>
        <h1>About Us</h1>
        <p>Building Global IT Professionals since 2008<br/>
        AN ISO 9001:2015 CERTIFIED IT LEARNING CENTER<br/>
        Broadway Infosys Nepal is one of the best inclusive computer training institutes in Kathmandu, Nepal. Established in 2008, our professional IT Training and Development center has been employing experts in this field to impart professional education.</p>
        <p><a href='/'>Index</a> | <a href=''>About Us</a> |<a href='/services'>Services</a> | <a href='/contact'>Contact Us</a></p>
        </body>
    </html>`;
    response.send(str1);
});
app.get('/services', (request, response)=>{
    var str1 = `
    <html>
        <head><title>Our Services</title></head>
        <body>
            <h1>Our Services</h1>
            <p>Building Global IT Professionals since 2008<br/>
            AN ISO 9001:2015 CERTIFIED IT LEARNING CENTER<br/>
            Broadway Infosys Nepal is one of the best inclusive computer training institutes in Kathmandu, Nepal. Established in 2008, our professional IT Training and Development center has been employing experts in this field to impart professional education.</p>
            <p><a href='/'>Index</a> | <a href='/about'>About Us</a> |<a href=''>Services</a> | <a href='/contact'>Contact Us</a></p>
            </body>
    </html>`;
    response.send(str1);
});
app.get('/contact', (request, response)=>{
    var str1 = `
    <html>
        <head><title>Contact Us</title></head>
        <body>
            <h1>Contact Us</h1>
            <p>Building Global IT Professionals since 2008<br/>
            AN ISO 9001:2015 CERTIFIED IT LEARNING CENTER<br/>
            Broadway Infosys Nepal is one of the best inclusive computer training institutes in Kathmandu, Nepal. Established in 2008, our professional IT Training and Development center has been employing experts in this field to impart professional education.</p>
            <p><a href='/'>Index</a> | <a href='/about'>About Us</a> |<a href='/services'>Services</a> | <a href=''>Contact Us</a></p>
            </body>
    </html>`;
    response.send(str1);
});
app.get('*', (request, response)=>{
    var str1 = `
    <html>
        <head><title>404 Page not found!</title></head>
        <body>
            <h1>404 Page not found</h1>
        </body>
    </html>`;
    response.send(str1);
});
app.listen(8000);
*/

// Example-4- Reading contents from file
/*
var fs = require("fs");
var express = require("express");
var app = express();

app.get('', (request, response)=>{
    //reading file (async)
    // fs.readFile('./data/index.txt', (err, data)=> {
    //     console.log(data.toString());
    //     response.send(data.toString()); 
    // });

    //reading file (sync)
    var data = fs.readFileSync('./data/index.txt', 'utf-8');
    console.log(data.toString());
    response.send(data.toString());

});
app.get('/about', (request, response)=>{
    //reading file (sync)
    var data = fs.readFileSync('./data/about.txt', 'utf-8');
    console.log(data.toString());
    response.send(data.toString());
});
app.get('/services', (request, response)=>{
    //reading file (sync)
    var data = fs.readFileSync('./data/services.txt', 'utf-8');
    console.log(data.toString());
    response.send(data.toString());
});
app.get('/contact', (request, response)=>{
   //reading file (sync)
   var data = fs.readFileSync('./data/contact.txt', 'utf-8');
   console.log(data.toString());
   response.send(data.toString());
});
app.get('*', (request, response)=>{
    //reading file (sync)
    var data = fs.readFileSync('./data/pagenotfound.txt', 'utf-8');
    console.log(data.toString());
    response.send(data.toString());
});
app.listen(8000);
*/

//Example-5 - Reading contents from database (MySql)
/*
    database (create, drop, select)
    table (create, alter, drop)
    table data (insert, select, update, delete)
*/
// https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.0.18/
// xampp-windows-x64-8.0.18-0-VS16.zip

// var express = require('express')
// var app = express()

// Read from MySQL
/* var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  database : 'BATCH'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
}); */
/* connection.query('CREATE DATABASE BATCH', function (error, results, fields) {
    if (error) throw error;
    // connected!
    }); */

/* connection.query('CREATE TABLE Ariel(id int,name varchar(255))', function (error, results, fields) {
    if (error) throw error;
    // connected!
  }); 
connection.query("UPDATE Ariel Values(1,'suraj')", function (error, results, fields) {
    if (error) throw error;
    // connected!
  }); */

/* connection.query(`UPDATE Ariel
SET name = "oos"
WHERE id=1;`, function (error, results, fields) {
    if (error) throw error;
    // connected!
  }); */

/*  app.get('/database',(req,res)=>{
    connection.query("SELECT * From Ariel", function (error, results, fields) {
        if (error) throw error;
        else console.log(results)
        for (const result of  results) {
            console.log(result.id)
        }
        res.send(results);
    });
})
app.listen(8000) */

//Example-6 Returning HTML
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    response.send(`<h1>Welcome to Broadway</h1>`);
});
app.listen(8000);
*/

//Example-7 Returning JSON
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    objPerson = {
        pid:1,
        name:'broadway',
        address:'ktm'
    };
    strPerson = JSON.stringify(objPerson);
    response.send(strPerson);
});
app.listen(8000);
*/

//Example-8 Returning XML ?
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    response.send(`
        <person>
            <pid>1</pid>
            <name>broadway</name>
            <address>ktm</address>
        </person>
    `);
});
app.listen(8000);
*/

// string to xml in node library
// install, test, and implement

// Example-9 Render HTML File (read and display)
/*
var express = require("express");
var path = require("path");
var filePath = path.join(__dirname, "example-9")
var app = express();
app.get('', (request, response)=>{
    response.send(``);
});
app.use(express.static(filePath));
app.listen(8000);
// about, services, contact, pagenotfound -> render (HW)
*/

// Example-10 Render HTML File (read and display) -2
/*
var express = require("express");
var path = require("path");

var filePath = path.join(__dirname, "example-10")
var app = express();
app.get('', (request, response)=>{
    response.sendFile(`${filePath}/index.html`);
});
app.get('/about', (request, response)=>{
    response.sendFile(`${filePath}/about.html`);
});
app.listen(8000);
*/





















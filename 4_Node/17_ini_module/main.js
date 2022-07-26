// Write on ini file

//Read ini file
const fs = require('fs');
const ini = require('ini');
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
console.log(config);

<<<<<<< HEAD
// hw  --config info default info read garna
// write on ini
// update on ini file
// read from ini -section and key   read only selected section
=======
//write on ini file
//update on ini file
//read fron ini - section and key
>>>>>>> b9a26d50873d3b9cdbcb5672cd2274ae5ea390df

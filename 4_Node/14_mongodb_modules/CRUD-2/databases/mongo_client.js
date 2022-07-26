<<<<<<< HEAD
//yeslai controller ma call garnuparcha mongo client bata export

import mongodb from 'mongodb'
var mongoClient = mongodb.MongoClient;
// var mongoClient = require('mongodb').MongoClient;
var databaseName = 'mern11'
var url = `mongodb://localhost:27017/${databaseName}`;
var collectionName = 'person';

// insert record
var insertRecord = (objPerson) => {
    let response = true;
    try {
        // connect with db
        mongoClient.connect(url, function (err, db) {
            if (err) {
                response=false
            };
            var dbo = db.db(`${databaseName}`);    //use database// var myobj = { name: "Raj Rai", address: "Ktm" };
            // var myobj = { name: "Kiran Thapa", address: "Bhk" };    // var myobj = { name: "Rojina ", address: "Bhk" };

            // insert on respective collection
            dbo.collection(`${collectionName}`).insertOne(objPerson, function (err, res) {
                if (err) {
                    response = false;
                }
                else {
                    console.log(res)
                    console.log("Document insert successfully");
                    db.close();
                }
            });
        });
    } catch (err) {
        response = false
    }
    return response;
}

var getAll = () =>  mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(`${databaseName}`);
    dbo.collection(`${collectionName}`).find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result)
        db.close();
    })
})


export { insertRecord, getAll }
=======
// var mongoClient = require('mongodb').MongoClient;

import mongodb from 'mongodb'

var mongoClient = mongodb.MongoClient;
var databaseName = 'mern10';
var collectionName = 'persons';
var url = `mongodb://localhost:27017/${databaseName}`;

// insert record
var insertRecord = (objPerson) => {
  //connect with db
  var res = false;
  mongoClient.connect(url, function (err, db) {
    if (err) {
      // throw err;
      res = false;
    }
    var dbo = db.db(`${databaseName}`); //use database
    // var myobj = { name: "Raj Rai", address: "Ktm" };
    // var myobj = { name: "Kiran Thapa", address: "Lat" };
    // var myobj = { name: "Rojina ", address: "Bhk" };
    //insert on respective collection
    dbo.collection(`${collectionName}`).insertOne(objPerson, function (err, res) {
      if (err) {
        res = false;
        // throw err;
      }
      else {
        console.log("Document insert successfully...");
        objPerson.result = true;
        db.close();
        res = true;
      }
    });
  });
  //return insert result (true/false)
  console.log(`Result : ${res}`);
  return res;
}

var getAll = async () => {
  await mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(`${databaseName}`);
    dbo.collection(`${collectionName}`).find({}).toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      db.close();
      return result;
    });
  });
}

export { insertRecord, getAll };
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3

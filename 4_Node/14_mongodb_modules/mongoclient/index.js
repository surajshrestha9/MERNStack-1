<<<<<<< HEAD
<<<<<<< HEAD
=======
// npm install mongodb
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
// npm install mongodb
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
var mongoClient = require('mongodb').MongoClient;

var databaseName = 'mern10'
var url = `mongodb://localhost:27017/${databaseName}`;

//Creating new database or use existing database
<<<<<<< HEAD
<<<<<<< HEAD

/*  mongoClient.connect(url, function (err, db) {      //terminal ma use <DBName> gareko
  if (err) throw err;
  console.log("Create new database successfully!");
  db.close();
}); */


// Creating Collection (Table) 
var collectionName = 'person';

/* mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("databaseName");     //select database//use databasename jasto ho
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
/*
mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Create new database successfully!");
  db.close();
});
*/

// Creating Collection (Table) 
/*
var collectionName = 'persons';
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(databaseName);//select database //use databasename
<<<<<<< HEAD
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
  dbo.createCollection(`${collectionName}`, function(err, res) {
    if (err) throw err;
    console.log("Create new collecton successfully!");
    db.close();
  });
<<<<<<< HEAD
<<<<<<< HEAD
}) */


// Drop collection

/* mongoClient.connect(url, function(err, db) {
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
});
*/

// Drop collection
/*
mongoClient.connect(url, function(err, db) {
<<<<<<< HEAD
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
  if (err) throw err;
  var dbo = db.db(databaseName);
  dbo.dropCollection(collectionName, function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Delete collection successfully");
    db.close();
  });
<<<<<<< HEAD
<<<<<<< HEAD
}); */


// Insert Record

/* mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  var myobj = { name: "Raj Rai", address: "Ktm" };
  // var myobj = { name: "Kiran Thapa", address: "Bhk" };
  // var myobj = { name: "Rojina ", address: "Bhk" };
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
});
*/

// Insert Record-1
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  // var myobj = { name: "Raj Rai", address: "Ktm" };
  // var myobj = { name: "Kiran Thapa", address: "Lat" };
  var myobj = { name: "Rojina ", address: "Bhk" };
<<<<<<< HEAD
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
  dbo.collection(`${collectionName}`).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Document insert successfully");
    db.close();
  });
<<<<<<< HEAD
<<<<<<< HEAD
}); */
// Insert Record-2

/* mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  var myobjs = [
    { name: "Raj Rai", address: "Ktm" },
    { name: "Kiran Thapa", address: "Bhk" },
    { name: "Rojina ", address: "Bhk" }
  ]
  dbo.collection(`${collectionName}`).insertMany(myobjs, function (err, res) {
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
});

// Insert Record-2
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  var myobjs =[
      { name: "Raj Rai", address: "Ktm" },
      { name: "Kiran Thapa", address: "Lat" },
      { name: "Rojina ", address: "Bhk" }
  ]
  dbo.collection(`${collectionName}`).insertMany(myobjs, function(err, res) {
<<<<<<< HEAD
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    if (err) throw err;
    console.log("Document insert successfully");
    db.close();
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
 */

// Insert Record-3 |  BULK WRITE ->hw
=======

// Insert Record -3 | BulkWrite ?
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======

// Insert Record -3 | BulkWrite ?
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

// Find Records
// Find one
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  dbo.collection(`${collectionName}`).findOne({}, function(err, result) {
    if (err) throw err;
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(result.name, result.address);
=======
    console.log(result);
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
    console.log(result);
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    db.close();
  });
});
*/

// Find all-1
<<<<<<< HEAD
<<<<<<< HEAD
/*
=======
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  dbo.collection(`${collectionName}`).find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
*/
=======
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

// Find all-2
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  dbo.collection(`${collectionName}`).find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

// Update Record
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  var myquery = { name: "Gita Sharma" };
  var newvalues = { $set: {name: "Reeta Sharma", address: "Banepa" } };
  dbo.collection(`${collectionName}`).updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("Record update successfully");
    db.close();
  });
});
*/

// Delete Record
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  var myquery = { name: 'Reeta Sharma' };
  dbo.collection(`${collectionName}`).deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("Record delete successfully");
    db.close();
  });
});
*/

// Searching Record-1
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  var query = { name: /^R/ };
  dbo.collection(`${collectionName}`).find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

// Sorting Record-1
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  // var mysort = { name: 1 };
  var mysort = { name: -1 };
  dbo.collection(`${collectionName}`).find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

// Limit Record
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  dbo.collection(`${collectionName}`).find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

// Joins
// Orders
/*
[
  { _id: 1, product_id: 154, status: 1 }
]
*/

// products
/*
[
  { _id: 154, name: 'Chocolate Heaven' },
  { _id: 155, name: 'Tasty Lemons' },
  { _id: 156, name: 'Vanilla Dreams' }
]
*/

// Join -1
/*
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(`${databaseName}`);
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
*/
var fs = require("fs");

//1. File Management
//Create new file
/*
fs.open("./data/data1.txt", "w", function(err, file){
    if(err) 
        throw err;
    console.log("File created successfully");
});
*/

//Rename file
/*
fs.rename('./data/data1.txt', './data/data_1.txt', function (err) {
    if (err)
        throw err;
    console.log('File Renamed Successfully!');
});
*/

//Delete file
/*
fs.unlink('./data/data_12.txt', function (err) {
    if (err) 
        throw err;
    console.log('File deleted successfully!');
});
*/

//Write content on file-1
/*
fs.writeFile('./data/data2.txt', 'Hello world of nodejs!', function (err) {
    if (err) 
        throw err;
    console.log('Saved!');
});
*/

//Write content on file-2
/*
fs.writeFile('./data/data3.txt', 'Hello world of nodejs', function (err) {
    if (err)
        throw err;
    console.log('Write content on file successfully');
  });
*/

//Append content on file
/*
fs.appendFile('./data/data3.txt', '\nParagraph-2', function (err) {
    if (err) 
        throw err;
    console.log('Append content on file');
});
*/

//Task-1
    //Upload file on server using nodejs.

// 2. Directory Management
// Display all files of directory-1
/*
var path = "c:/";
let files = fs.readdirSync(path);
files.forEach((file) => {
    console.log(file);
});
*/

// Display all files of directory-2
/*
var path = "c:/";
let openedDir = fs.opendirSync(path);
let filesLeft = true;
while (filesLeft) {  
  let fileDirent = openedDir.readSync();
  if (fileDirent != null)
    console.log(fileDirent.name);
  else filesLeft = false;
}
*/

// Global info
console.log(__dirname);
console.log(__filename);
console.log(process.argv);

// Creating a new directory
/*
var path = "./Folder-1";
fs.access(path, (error) => { //existance
    if (error) {
        fs.mkdir(path, (error) => { //create new
            if (error) {
              console.log(error);
            } 
            else {
              console.log("New Directory created successfully");
            }
          });
    }
    else {
        console.log("Folder already exists");
    }
});
*/


//Remove directory
/*
var path = "./Folder-1";
fs.rmdir(path, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Folder deleted successfully");
  }
});
*/

// Creating new directory with sub directories
var path = "./Folder-1/Folder-2/Folder-3";
fs.access(path, (error) => {  
  if (error) {
    fs.mkdir(path, { recursive: true }, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("New Directory created successfully");
      }
    });
  } else {
    console.log("Directory already exists");
  }
});

// Remove directory with sub directories - HW
var path = "./Folder-1/Folder-2/Folder-3";
// Accessing HardDrive Info - HW
// Accessing GoogleDrive Info - HW
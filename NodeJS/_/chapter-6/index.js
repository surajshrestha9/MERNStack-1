const fs = require('fs');
//fs.writeFileSync('data1.txt', 'Hello world of node.js');

const path = require('path');
const dirPath = path.join(__dirname, "files");

//console.warn(dirPath);

// Creating files
/*
for(i=0; i<5; i++){
    // fs.writeFileSync("data.txt","hello world of nodejs");
    // fs.writeFileSync("data"+i+".txt","hello world of nodejs");
    // fs.writeFileSync(`data${i}.txt`,"hello world of nodejs");    
    fs.writeFileSync(`${dirPath}/data${i}.txt`,"hello world of nodejs");
    // fs.writeFileSync(dirPath+"/data"+i+".txt","hello world of nodejs");
}
*/

//Read dir-1
/*
fs.readdir(dirPath, (error, files)=>{
    console.warn(files); //[ 'data0.txt', 'data1.txt', 'data2.txt', 'data3.txt', 'data4.txt' ]
});
*/

//Read dir-2
/*
fs.readdir(dirPath, (error, files)=>{
    files.forEach((file)=>{
        console.log(file);
    });
});
*/

//Questions
/*
// node command takes a current folder as web server   
*/

const fs1 = require('fs');
const path1 = require('path');
const dirPath1 = path.join(__dirname, 'crud')
const filePath1 = `${dirPath1}\\data1.txt`
// console.log(filePath1);

// Create a file
// fs1.writeFileSync(filePath1, 'Hello world of nodejs');

// Read a file
/*
fs1.readFile(filePath1, (err, item)=>{
    console.log(item);
});
*/

// Update a file
/*
fs1.appendFile(filePath1, 'Hi from node.js', (error)=>{
    if(!error) console.log("update on file successfully");
});
*/

// Rename a file
/*
fs1.rename(filePath1, `${dirPath1}\\data2.txt`, (error)=>{
    if(!error) console.log("File rename successfully");
});
*/

// Delete a file
fs1.unlinkSync(`${dirPath1}\\data2.txt`)

// Questions
// What is buffer?

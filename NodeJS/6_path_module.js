var path=require('path');

//error  var strPath="C:\Users\suraj\Downloads\Broadway\MERNStack-6\NodeJS\favicon.ico";
var strPath="C:\\Users\\suraj\\Downloads\\Broadway\\MERNStack-6\\NodeJS\\favicon.ico";
// var strPath="C:/Users/suraj/Downloads/Broadway/MERNStack-6/NodeJS/favicon.ico";

console.log(path.basename(strPath));//file name
console.log(path.dirname(strPath));//path C:\Users\suraj\Downloads\Broadway\MERNStack-6\NodeJS

var strDrive="C:";
var strDirs="Users\\suraj\\Downloads\\Broadway\\MERNStack-6\\NodeJS";
var strFile="favicon.ico";

var strNewPath=path.join(strDrive,strDirs,strFile);
console.log(strNewPath);

console.log(__dirname);
console.log(__filename);
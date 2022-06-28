var path = require('path');

// var strPath = 'C:\Users\Administrator\Desktop\JS\MERNStack-6\NodeJS\favicon.ico';
var strPath = 'C:\\Users\\Administrator\\Desktop\\JS\\MERNStack-6\\NodeJS\\favicon.ico';
// var strPath = 'C:/Users/Administrator/Desktop/JS/MERNStack-6/NodeJS/favicon.ico';

console.log(path.basename(strPath)); //file name
console.log(path.dirname(strPath)); //C:\\Users\\Administrator\\Desktop\\JS\\MERNStack-6\\NodeJS\\

var strDrive = 'C:';
var strDirs = 'Users\\Administrator\\Desktop\\JS\\MERNStack-6\\NodeJS';
var strFile = 'favicon.ico';

var strNewPath = path.join(strDrive, strDirs, strFile);
console.log(strNewPath);

console.log(__dirname);
console.log(__filename);
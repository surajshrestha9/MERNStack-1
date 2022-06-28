const fs = require('fs');
//write content on file
fs.writeFileSync("data.txt", "Hello world of Node FileSystem");
console.log(__dirname);//absulute path
console.log(__filename);//file name with absolute path 

const fs2  = require('fs').writeFileSync;
fs2("data2.txt", "Hello world of Node FileSystem");
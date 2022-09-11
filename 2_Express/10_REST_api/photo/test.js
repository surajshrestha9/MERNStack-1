//image to binary file
import fs from 'fs';
var photoFile='<path>'
var photoFile2='<path>'
const file= Buffer.from(photoFile)
const blob= Buffer.from(file)
// console.log()
console.log(blob);

//binary to image file
// fs.writeFileSync(photoFile2, blob)

//binary to image file-1
const buf1=Buffer.from(file)
console.log(buf1)

// buf1->   encrypt->   database
// database ->decrypt   ->buf2

//binary to image file-2
fs.writeFile("test1.jpg",buf1,'binary', function(err){
    if(err) throw err;
    console.log('file saved')
})




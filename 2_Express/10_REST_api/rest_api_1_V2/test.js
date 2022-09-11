// console.log()
//image to binary file
import fs from 'fs';
var photoFile="C:\\Users\\surajShrestha'\\Downloads\\Broadway\\MERNStack-6\\2_Express\\10_REST_api\\rest_api_1_V2\\public\\images\\image1.png";
                    // var photoFile2="C:\\Users\\surajShrestha'\\Downloads\\Broadway\\MERNStack-6\\2_Express\\10_REST_api\\rest_api_1_V2\\public\\images\\image3.png";
const file=fs.readFileSync(photoFile);

// get file path
// get file name
// get file extension
// new file exist or not
// file compress -quality?

/* 
{
    id:1,
    name:'mitra',
    address:'ktm'
    photo:binary_data    //type file
    // file_name:image1,    //string
    file_extension:jpg,    //string
    file_path:c:\downloads\    //string  * pathname is not compulsory 
}   -> insert on collection (persons)->api (POST http://127.0.0.1/v1/persons/)

after insert on database  delete file
*/

const blob= Buffer.from(file)
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




// npm install crypto
import fs from 'fs';
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

var file1 = '.\22_UTILITIES\\1_reading_writting_binary_file\\test1.jpg';
const file = fs.readFileSync(file1);
var file1="image1.jpg"
    // var file1_data= binary data of file1
    // var file1_data_encrypt= encrypt(file1_data)
    // save file1_data_encrypt on database collection
    // read file1_data_encrypt on database collection
    
    // var file1_data_decrypt= decrypt(file1_data_encrypt)
    // write file1_data_decrypton file and display file in page
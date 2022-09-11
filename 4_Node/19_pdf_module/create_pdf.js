const PDFDocument = require('pdfkit');
const fs = require('fs');

let pdfdoc = new PDFDocument();
pdfdoc.pipe(fs.createWriteStream('document1.pdf'));
pdfdoc.text("Hello world of PDFKit");
pdfdoc.end();

<<<<<<< HEAD
<<<<<<< HEAD
// create content from pdf file ->OCR /SCANNER/Natural Langauge Analysis NLA
// file management(copy , rename , delete, move file)
=======
//read contents from pdf file -> OCR/Scanner/NLA
//file management (copy, rename, delete, move file)
>>>>>>> b9a26d50873d3b9cdbcb5672cd2274ae5ea390df
=======
//read contents from pdf file -> OCR/Scanner/NLA
//file management (copy, rename, delete, move file)
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

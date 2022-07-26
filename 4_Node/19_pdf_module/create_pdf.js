const PDFDocument = require('pdfkit');
const fs = require('fs');

let pdfdoc = new PDFDocument();
pdfdoc.pipe(fs.createWriteStream('document1.pdf'));
pdfdoc.text("Hello world of PDFKit");
pdfdoc.end();

<<<<<<< HEAD
// create content from pdf file ->OCR /SCANNER/Natural Langauge Analysis NLA
// file management(copy , rename , delete, move file)
=======
//read contents from pdf file -> OCR/Scanner/NLA
//file management (copy, rename, delete, move file)
>>>>>>> b9a26d50873d3b9cdbcb5672cd2274ae5ea390df

const PDFDocument = require("pdfkit");
const fs = require("fs");

let pdfDoc = new PDFDocument();
pdfDoc.pipe(fs.createWriteStream("shivam.pdf"));

const data = fs.readFileSync("./sample.json", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("read success");
  }
});
//   console.log(data);

pdfDoc.text(data);

pdfDoc.end();

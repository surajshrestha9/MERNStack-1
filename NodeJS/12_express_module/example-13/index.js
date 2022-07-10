// npm init
// npm install express
// npm install ejs

var express=require('express')
var app=express()
var fs = require("fs");
var pdfLib=require("pdf-lib")

app.set('view engine','ejs')
//rendering ejs file(forms)->read and display
app.get('',(request,response)=>{
    response.render('forms');
});
//create url pattern to receive data form webform

app.get('/getform1',(request,response)=>{
    // read values of txt1
    // console.log(request.query)
    // console.log(request.query['txt1'])
    // response.send("hello")
    
    var n1=Number(request.query['txt1'])
    var n2=Number(request.query['txt2'])
    var n3=n1+n2;
    /* //result redirected to browser
    // response.send("result: "+n3) */
    
    // redirect to text file write on txt file(n1,n2,result,datetime)
    // write using sync and async
    var dt = new Date();
    var objResult={
        num1:n1,
        num2:n2,
        num3:n3,
        datetime:dt
    };
    // console.log(objResult);
    strResult=JSON.stringify(objResult)
    // fs.appendFile("./data/data1.txt",strResult,(error)=>{
    //     if(error){
    //         console.log("error: "+error)
    //     }
    //     else{
    //         console.log("Append on file sucessfully")
    //     }
    // })
    
    // export result on pdf file  ->we used pdfLib

    async function createPdf(data){
        try{
            var pdfDoc=await pdfLib.PDFDocument.create();
            var pdfPage=pdfDoc.addPage()
            pdfPage.drawText(strResult)
            pdfDoc.save();
        }
        catch(err){
            console.log(err)
        }      
    }
    createPdf('1.pdf');
    

    // export result on xml file
    // export result on INI file

//result redirected to browser
    response.send(strResult);
})
app.post('/getform2',(request,response)=>{
    response.send("hello")
// get values
// process
// output

// redirect o/p to file
// redirect o/p to pdf
// redirect o/p to xml
// redirect o/p to ini
// redirect o/p to datavbase(rdbms,nosql)

})


// process them, and redirect to display on template(ejs)
app.listen(80,()=>{
    console.log("server is started")
})
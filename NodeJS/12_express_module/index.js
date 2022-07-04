//Example-1
// var express = require('express')
// var app = express()
// app.get('/',(req, res)=>{
//     res.send('Hello Express')
// })
// app.get('/about',(req, res)=>{
//     res.send('About')
// })
// app.get('/service',(req, res)=>{
//     res.send('Service')
// })
// app.get('/contact',(req, res)=>{
//     res.send('{"contact": "Niroj 98214132"}')
// })

// app.get('*',(req,res)=>{
//     res.status(404).send('Not found')
// })
// app.listen(8000)





// Example 2 --Multiple Request

// var express = require('express')
// var app = express()

// app.get('', (req, res)=>{
//     res.send('Index Page')
// })
// app.get('/about', (req, res)=>{
//     res.send('About Us')
// })
// app.get('/services', (req, res)=>{
//     res.send('Service Page')
// })
// app.get('/contact', (req, res)=>{
//     res.send('contact Page')
// })
// app.get('*',(req,res)=>{
//     res.status(404).send('404 :: Page not found')
// })
// app.listen(8000)



// Example 3 HTML Contents and loading HTML file
// var express = require('express')
// var app = express()

// app.get('', (req, res)=>{
//     var str1 = `
//     
//     res.send(str1)
// })
// app.get('/about', (req, res)=>{
//     var str1 = `
    // <html>
    // <head>
    //     <title>About</title
    // </head>
    // <body>
    //     <h1>About Page</h1>
    //     <p> <a href="/">Index</a> </p>
    //     <p> <a href="">About Us</a> </p>
    //     <p> <a href="/services">Services</a> </p>
    //     <p> <a href="/contact">Contact</a> </p>
    //     <p>Broadway Infosys Nepal is one of the best inclusive computer training institutes in Kathmandu, Nepal. Established in 2008, our professional IT Training and Development center has been employing experts in this field to impart professional education.</p>
    // </body>
    // </html>`
//     res.send(str1)
// })
// app.get('/services', (req, res)=>{
//     var str1 = `
    // <html>
    // <head>
    //     <title>Services</title
    // </head>
    // <body>
    //     <h1>Services Page</h1>
    //     <p> <a href="/">Index</a> </p>
    //     <p> <a href="/about">About Us</a> </p>
    //     <p> <a href="">Services</a> </p>
    //     <p> <a href="/contact">Contact</a> </p>
    //     <p>Professional IT Training leads to individuals being qualified for jobs and projects. Broadway Infosys has been providing consistent vacancy and career opportunities, in-house and external, to deserving candidates with decent salary prospects! If you are a part of us, you are a part of our facilities as well! Here are some career opportunities that you may be interested in!</p>
    // </body>
    // </html>`
//     res.send(str1)
// })
// app.get('/contact', (req, res)=>{
//     var str1 = `
    // <html>
    // <head>
    //     <title>Contact</title
    // </head>
    // <body>
    //     <h1>Contact Page</h1>
    //     <p> <a href="/">Index</a> </p>
    //     <p> <a href="/about">About Us</a> </p>
    //     <p> <a href="/services">Services</a> </p>
    //     <p> <a href="">Contact</a> </p>
    //     <p>Shriganesh Marg, Subidhanagar, Tinkune, Kathmandu 44600, Nepal
    //     +977-1-4117578, 4111849, 4111583
    //     9841002000, 9808724535
    //     info@broadwayinfosys.com
    //     hr@broadwayinfosys.com
    //     support@broadwayinfosys.com
    //     inquiry@broadwayinfosys.com</p>
    // </body>
    // </html>`
//     res.send(str1)
// })
// app.get('*',(req,res)=>{
//     res.status(404).send('404 :: Page not found')
// })
// app.listen(8000)

/* //hw load html file here
app.get('/loadhtml', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.get('*', (request,response)=>{
    response.send("404 not found");``
});    //* except
app.listen(8000,()=>{
    console.log("server is started")
}); */


// Example 3_2 Reading content from file


const express = require('express')
const app = express()
const fs = require('fs')


app.get('', (req, res)=>{

    fs.readFile(('./data/index.txt'),(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})
app.get('/about', (req, res)=>{
    fs.readFile(('./data/about.txt'),'utf8',(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})
app.get('/services', (req, res)=>{
    fs.readFile(('./data/services.txt'),'utf8',(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})
app.get('/contact', (req, res)=>{
    fs.readFile(('./data/contacts.txt'),'utf8',(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})
app.get('*',(req,res)=>{
    res.status(404).send('404 :: Page not found')
})
app.listen(8000)





// Example 4  Reading content from database

// Read from MySQL
// Database (create, drop select)
// Table (create, alter , drop)
// table data(insert, select, update ,delete)
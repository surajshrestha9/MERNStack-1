// var express=require('express')
import express, { request, response } from 'express'   //"type":"module", le enable gareko
import news from './routes/news.js'//import news
import users from './routes/users.js'//import users
const app=express();
const port=process.env.PORT || '8000' ;

app.use('/news',news);//load news
app.use('/users',users);//load users


app.listen(port);



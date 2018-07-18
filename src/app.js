const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express();

//importing routes
const personaRoutes = require('./routes/persona');


//setitings

app.set('port',process.env.PORT ||3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 

//middlewares
app.use(morgan('dev '));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password :'1234',
    port:3306,
    database:'express3'
},'single'));
app.use(express.urlencoded({extended:false}));


//routes
app.use('/',personaRoutes);

//statig files
app.use(express.static(path.join(__dirname,'public')));

//starting the server

app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});
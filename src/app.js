const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


//**------------------------ */
//codigo correcto de correoooo/
var  nodeMailer = require('nodemailer'),
     bodyParser = require('body-parser');
     const app = express();

   // app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    //var port = 3002;
   // app.get('/', function (req, res) {
      //res.render('persona');
    //});
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'betojim.2097@gmail.com',
              pass: 'yo20an20'
          }
      });
      let mailOptions = {
          from: '"jose antonio jimenez" <betojim.2097@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
             // res.render('persona');
          });
      });
    
        // aki termina
      //-----------------------   





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
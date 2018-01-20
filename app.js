const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressVlidator = require('express-validator');
 
 
var app = express();

/*
var logger = function(req, res, next){
  console.log('Login...');
  next();
};

app.use(logger);
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false})); 

//Set Satic Path
app.use(express.static(path.join(__dirname, 'public')));

//Express Validation

//Parse JSON
// var people =[
//   {
//   name: 'Jeff',
//   age: 30
// },
// {
//   name: 'Eleni',
//   age: 33
// }
// ]

// app.get('/', (req, res)=>{
//   res.json(people);
// }) 

var users =[
  {
    id: 1,
    first_name: 'John',
    last_name: 'Zeb',
    email: 'john@gmail.com'
  },
  {
    id: 2,
    first_name: 'Costas',
    last_name: 'Zebekis',
    email: 'costas@gmail.com'
  },
  {
    id: 3,
    first_name: 'Eleni',
    last_name: 'Zebeka',
    email: 'eleni@gmail.com'
  }
]

app.get('/', (req, res)=>{
  
  res.render('index', {
    title: 'Cutomers',
    users: users
  });
}) 

app.post('/users/add', (req, res)=>{
  // console.log(req.body.first_name);
  let newUser ={
    first_name: 'req.body.first_name',
    last_name: 'req.body.last_name',
    emal: 'req.body.email'
  }
  console.log(newUser);
});

app.listen(3000, function(){console.log('Server Started on port 3000')});

 Just a basic Express Install in Node.js

#What is Express.js

ExpressJS is a minimalistic, open source web framework for Node.js

Use to build powerful web applications and APIs
Most popular framework for Node.js
Uses MVC concepts
 
$npm init // Will create the package.json file

$ npm install express --save // --save will add express to the package.json file

Starting an application

$ npm init  // create the package.json file

Next set the package.json info

There are 2 ways to include express or any other module
$ npm install express --save // using --save it will include it in package.json file

Added them to the package.json file as 
"dependencies": {
   "express": "1.0",   // Either add the version you know, if you know 
   "body-parser": "*"  //Or add * to get the latest version
 },

Then run npm install if you choose the second choice

Include the modules you want in you app.js file with

const express = require(‘express’);

const bodyParser = require(‘body-parser’); 

const path = require(‘path’);   // It is a module to simplify file paths and it is a core module not need to install

Middleware are functions that have access to that request and response messages

Include all your frontend resources in the public folder (Angular, css, html …)

To avoid having to restart the server there are utilities we can use like nodemon 

$npm install nodemon -g

Then just run nodemon instead of node app.js

Template Engine

EJS 

npm install ejs --save

Form validation module

Express-validation

npm install express-validator

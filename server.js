// This file is the entry point for the app.

//===================================BASE SETUP======================================
// Create objects for all the dependency modules
var express = require('express');

var bodyParser = require('body-parser'); // extracting the contents of json
var morgan = require('morgan');        // logging
var mongoose   = require('mongoose');  // DB connection

var app = express();  // creating the express instance.
var port = 8182;  // If you change this , then change the port in sendJson.py as well.

var register = require('./config/register');

// using the modules imported above.
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Cloud DB connection - log in to mongolab.com to see.
var username = "mobdb"
var password = "mobdb";
var address = '@ds043220.mongolab.com:43220/mobile';
var url = 'mongodb://' + username + ':' + password + address;


//Connect DB
mongoose.connect(url);




//==================================ROUTE SETUP=====================================

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
// do logging
console.log('Pre-processing happening.');
next();
});

// This is just for testing. Android Client shall not handle this.
router.get('/', function(req, res) {
    res.json({ message: '!! welcome to our LibTrac !!' });   
});

// Begin : Registration
router.route('/register')

	.post(function(req, res){
		var username = req.body.username;
		var password = req.body.password;
		//console.log('The username '+username);
		register.register(username, password,function (found) {
			console.log(found);
		    res.json(found);
	});
});


// ---------------------------ALL OUR ROUTES SHALL BE HERE -------------------------------


// all of our routes will be prefixed with /
app.use('/', router);


// START THE SERVER
// =============================================================================

app.listen(port);
console.log('The server runs on port ' + port);

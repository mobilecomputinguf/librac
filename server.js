// This file is the entry point for the app.

//===================================BASE SETUP======================================
// Create objects for all the dependency modules
var express = require('express');
var connect = require('connect');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose   = require('mongoose');
var app = express();
var port = 8182;

var register = require('./config/register');

// using the modules imported above.
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//DB connection
var username = "mobdb"
var password = "mobdb";
var address = '@ds043220.mongolab.com:43220/mobile';
var url = 'mongodb://' + username + ':' + password + address;


var mongoose = require('mongoose');
mongoose.connect(url);

var User     = require('./app/models/user');


//==================================ROUTE SETUP=====================================
//require('./routes/routes.js') (app);
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
// do logging
console.log('Pre-processing happening.');
next();
});

router.get('/', function(req, res) {
    res.json({ message: '!! welcome to our LibTrac !!' });   
});


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


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('The server runs on port ' + port);

var mongoose = require('mongoose');
var user = require('../app/models/user');


exports.register = function(username,password,callback) {
	console.log('The username '+username);
	//console.log('The password '+password);
	var newUser = new user ({
		username : username,
		password : password,
	});

	user.find({username:username}, function(err, users){
		var len = users.length;
		if(len == 0){
			newUser.save(function(err){
				callback({'response':"success registration"});
			});
		}
		else{
			callback({'response':"username already Registered"});
		}
	})
}

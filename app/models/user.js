// Here define the 'user' model
//Location : /app/models/user.js


var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


// This schema for user may or may not be final. Mac-Address and some more columns may come.
var UserSchema   = new Schema({
	
	username : {type: String, unique: true},
	password : String
});


module.exports = mongoose.model('user', UserSchema);
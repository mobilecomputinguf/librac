// Here define the 'user' model
//Location : /app/models/user.js


var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	
	username : {type: String, unique: true},
	password : String
});


module.exports = mongoose.model('user', UserSchema);
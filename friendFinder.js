var mongoose = require('mongoose');
var schema  = mongoose.Schema;

var UFL  = schema({
	userName:{
	type: String
	},
	friendName:{
	type:Array
	},
	nickName:{
	type:String
	}
});

module.exports = mongoose.model('Friend', 'Friend');

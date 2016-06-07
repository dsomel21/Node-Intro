'use strict';
var http = require("http");
const bl = require("bl");
const concat = require('concat-stream')


var user_input = process.argv[2];

http.get(user_input, function(result) {
	result.pipe(concat(function (data) {
		// if (err) {
		// 	throw err;
		// }
		console.log(data.length);
		console.log(data.toString());
	}));
});
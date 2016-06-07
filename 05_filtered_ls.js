'use strict';
var fs = require('fs');

module.exports = function filter(path_name, ext, callback){
	var fileExtention;
	var results = []

	fs.readdir(path_name, function(err, list){
		if (err){
			return callback(err);
		}
		list.forEach(function(file){
			fileExtention = file.split(".")[1];
			if (ext === fileExtention) {
				results.push(file);
			}
			return callback(null, results);
		}); 
	});
};
var filter = require('./05_filtered_ls');
'use strict';

var path_name = process.argv[2];
var ext = process.argv[3];

filter(path_name, ext, myCallback);

var myCallback = function(err, data) {
	if (err) {
		console.log('Error!')
	} else {
		console.log(data.toString());
	}
}
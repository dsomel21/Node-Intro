var fs = require('fs');

var file = process.argv[2];
var str;
var count = 0;
var lines = 0;

fs.readFile(file, function(err, data){
	if (err){
		throw err;
	}
	str = data.toString();
	lines = str.split('\n');
	count = lines.length - 1;
	console.log(count);
});
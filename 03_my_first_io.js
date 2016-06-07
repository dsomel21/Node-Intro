var fs = require('fs');

var file = process.argv[2];
var str = fs.readFileSync(file).toString().split("\n");
// var lines = str.split("\n");
var count = line.length - 1;

console.log(count);
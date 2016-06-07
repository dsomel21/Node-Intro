'use strict';
var http = require('http');
const concat = require('concat-stream');

var listUrls = process.argv.slice(2);
var resultData = [];
var count = 0;

listUrls.forEach(function(url){
	getData(url);
});


function getData(url){
	http.get(url, function(res){
		res.pipe(concat(function (data) {
			var str = data.toString();
			resultData.push(str);
			count++;
			if (count === 3){
				displayResult();
			}
		}));
	});
}

function displayResult(){
	listUrls.forEach(function(url) {
		// for(var i = 0; i < listUrls.length; i++){
			// console.log(listUrls[i]);
		// console.log(listUrls[url]);
		console.log(resultData[0]);
		// console.log(resultData[url]);
	});
}
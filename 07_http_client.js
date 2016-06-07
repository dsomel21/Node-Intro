var http = require('http');

// The requestListener is a function which is automatically added to the 'request' event.
// var user_url = process.argv[2];
// console.log('the url is ', user_url)

http.get('http://www.google.ca/', function(response){
	// console.log(user_url);
	response.setEncoding('utf8');
	response.on("data", function(data){
		console.log("THIS IS SOME CRAZYYYY DATA!!!",data);
	});
}).on('error', function (err) { console.log(err) });

// // var http = require('http')  
  
// // http.get(process.argv[2], function (response) {  
// //   response.setEncoding('utf8')  
// //   response.on('data', console.log)  
// //   response.on('error', console.error)  
// // }).on('error', console.error) 
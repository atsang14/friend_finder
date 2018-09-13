// requiring packages
var express = require('express');
var app 	= express();
var path 	= require("path");
var mysql   = require('mysql');

//session stuff
	var cookieParser = require('cookie-parser');

	var session = require('express-session');

	//allow sessions
	router.use(session({ secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));

	router.use(cookieParser());

app.set('view engine','ejs');
//you need this to be able to process information sent to a POST route
	var bodyParser = require('body-parser');

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// parse application/json
	app.use(bodyParser.json());

var path = require("path");


app.post("/submit", function(req,res) {
	console.log(req);
})

app.listen(3000, function(){
	console.log('listening on 3000');
});


   // * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   // * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
   //   * Example: 
   //     * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
   //     * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
   //     * Total Difference: **2 + 1 + 2 =** **_5_**
   // * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   // * The closest match will be the user with the least amount of difference.

   // If you'd like, you can pull off the above in a SQL query, which is the ideal way













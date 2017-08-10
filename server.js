'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');

var app = express();

// mongoose.Promise = global.Promise;
//
// //Connect to MongoDB
// mongoose.connect('mongodb://local/host/recipes', {
// 	useMongoClient: true
// });

// Allow us to parse POST requests into req.body
app.use(bodyParser.json());

// Mount our website (inside the public directory) at /
app.use('/', express.static('./public'));

// Listen on port 3000
app.listen(3000, function(err) {
	console.log('Listening at http://localhost:3000');
});

app.get('/recipes/:url', function(req,res) {
	getRecipe(req.params.url).then(function(recipe) {
		res.json(recipe);
	});
});

function getRecipe(url) {
	var apiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract';
	apiUrl += '?forceExtraction=false&url='+encodeURIComponent(url);
	return new Promise(function(resolve,reject) {
		request.get({
			url: apiUrl,
			headers: {
				'X-Mashape-Key': 'CDTZcuIyj5mshwR1HS9KD4s5ZNrUp133DL4jsnuOt0WIsEP5DX'
			},
			json: true
		}, function(err,response,body) {
			if(err) return reject(err);
			resolve(body);
		});
	});
}

function saveList(){

}

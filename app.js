
var express = require('express'),		
	app = express(),
	sqlite = require('sqlite3').verbose(),
	db = new sqlite.Database('./game.db');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {    
	db.all("select * from Games", function(err, games){
	    var tagline = "Join a group and start playing games.";	
	    res.render('index', {
	        games: games,
	        tagline: tagline
	    });
	});
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.listen(8080);

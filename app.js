
var express = require('express'),		
	app = express(),
	sqlite = require('sqlite3').verbose(),
	db = new sqlite.Database('./game.db'),
	fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {	
    var tagline = "Join a group and start playing games.";	
    res.render('index', {
        tagline: tagline
    });

});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/games', function(req, res) {
	var sql = fs.readFileSync('./queries/game_list.sql').toString();
	db.all(sql, function(err, games) {
		res.render('games', {
			games: games
		});
	});
});

app.get('/groups', function(req, res) {
	res.render('groups');
});

app.get('/events', function(req, res) {
	res.render('events');
});


app.get('/test', function(req, res) {
	res.render('test');
});

app.listen(8080);

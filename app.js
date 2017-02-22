
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

app.get('/game', function(req, res) {
	var id = req.query.GameID;
	var sql = fs.readFileSync('./queries/game_details.sql').toString() + "where GameID = " + id;
	db.all(sql, function(err, game) {
		res.render('game', {
			game: game[0]			
		});		
	});
});

app.get('/groups', function(req, res) {
	var sql = fs.readFileSync('./queries/group_list.sql').toString();
	db.all(sql, function(err, groups) {
		res.render('groups', {
			groups: groups
		});
	});	
});

app.get('/group', function(req, res) {
	var id = req.query.GroupID;
	var sql_group = fs.readFileSync('./queries/group_details.sql').toString().replace('{0}', id);
	var sql_events = fs.readFileSync('./queries/group_events.sql').toString().replace('{0}', id);	
	db.all(sql_group, function(err, group) {
		db.all(sql_events, function(er, events) {		
			res.render('group', {
				group: group[0],
				events: events
			});
		});
	});
});

app.get('/events', function(req, res) {
	res.render('events');
});


app.get('/test', function(req, res) {
	res.render('test');
});

app.listen(8080);

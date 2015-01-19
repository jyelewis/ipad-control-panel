var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9823);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.use("/", express.static(__dirname + '/resources'));



//socket setup
var power = require("./commands/power");
var spotify = require("./commands/spotify");

io.on('connection', function (socket) {
	socket.on('deskMasterPower', function(){
		power.masterPower();
	});

	socket.on('lightToggle', function(){
		power.light();
	});

	socket.on('spotifyPlay', function(){
		spotify.play();
	});

	socket.on('spotifyPause', function(){
		spotify.pause();
	});

	socket.on('spotifyVolDown', function(){
		spotify.down();
	});

	socket.on('spotifyVolUp', function(){
		spotify.up();
	});
});
//tell application "Spotify" to pause

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
//exec("ls -la", puts);

exports.play = function(){
	exec('osascript -e \'tell application "Spotify" to play\'');
};

exports.pause = function(){
	exec('osascript -e \'tell application "Spotify" to pause\'');
};

exports.prev = function(){
	exec('osascript -e \'tell application "Spotify" to previous track\'');
};

exports.next = function(){
	exec('osascript -e \'tell application "Spotify" to next track\'');
};

exports.up = function(){
	exec('osascript -e \'tell application "Spotify" to next track\'');
};

exports.down = function(){
	exec('osascript -e \'tell application "Spotify" to next track\'');
};
//var SerialPort = require("serialport").SerialPort;

/*var serialPort = new SerialPort("/dev/tty.usbserial-A600bmY5", {
  baudrate: 9600
}, true); // this is the openImmediately flag [default is true]
*/

exports.masterPower = function(){
	serialPort.write("1", function(err, results) {});
};

exports.light = function(){
	serialPort.write("2", function(err, results) {});
};
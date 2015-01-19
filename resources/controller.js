var socket = io.connect();

var config = {
	 linkLightDesk: false
	,autoScreensaver: true
	,clockOverlay: true
};

$(document).ready(function(){
	updateToggleViews();


	$("[data-event]").click(function(){
		socket.emit($(this).attr("data-event"));
	});

	$("[data-toggle]").click(function(){
		config[$(this).attr("data-toggle")] = !config[$(this).attr("data-toggle")];
		updateToggleViews();
	});

	//manual listners
	$("#btnMasterPower").click(function(){
		socket.emit("deskMasterPower");
		if(config.linkLightDesk) {
			setTimeout(function(){
				socket.emit("lightToggle");
			}, 1500);
		}
	});

	$("#btnActivateScreensaver").click(function(){
		startScreensaver();
	});

 	$('.clock').FlipClock({
		clockFace: 'TwelveHourClock',
		showSeconds: false
	});

	$('#screensaverClock').FlipClock({
		clockFace: 'TwelveHourClock',
		showSeconds: false
	});
});

function updateToggleViews() {
	$("[data-toggle]").each(function(){
		$(this).removeClass("true").removeClass("false");
		if(config[$(this).attr("data-toggle")]){
			$(this).addClass("true");
		} else {
			$(this).addClass("false");
		}
	});
}

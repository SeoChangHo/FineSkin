
var init = function(){
	document.addEventListener("deviceready", onDeviceReady, true);
}

var onDeviceReady = function(){
	openDB();
}

var openDB = function(){
	
}

$(document).on("pageinit", init);
/*
	protocol.js
	code by:youzi
	time:2020.12.21
	HighwayDownload's web
*/
changeProtocol();
delatehrefHTMLType();
function changeProtocol() {
	var protocol = window.location.protocol;
	if (protocol == "http:") {
		window.location.href = window.location.href.replace("http","https");
	}
	return window.location.href == "https"
}
function delatehrefHTMLType() {
	var href = window.location.href;
	if (href.indexOf(".html") != -1) {
		href.replace(/.html/g,"");
	}
}
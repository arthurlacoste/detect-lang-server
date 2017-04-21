var express = require('express');
var app = express();
var franc = require('franc-min');
var iso6393 = require('iso-639-3');

var port = process.env.PORT || 1337;

app.get('/lang/:phrase', function(req, render) {
	render.setHeader('Content-Type', 'application/json');
	var toot = req.params.phrase.toString()
	.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
	
	var langISO6391 = '';
	
	while(toot.length<10) {
		toot += ' ' + toot;
	}
	
	var langISO6393 = franc(toot);

	try {
		if (langISO6393 == "cmn") {
			langISO6391 = "zh-CN"; // mandarin detected -> chinese ISO 639-1
		} else {
			iso6393.forEach(function (language) {	
				if (language.iso6393 !== langISO6393) {
					return;
				} else {
					langISO6391 = language.iso6391 ;
				}
			});
		}
		console.log(langISO6391 + "=" + toot) // langue détecté format ISO
		render.end(JSON.stringify({ lang: langISO6391}));
	} catch(e) {
		console.log(e.message);
	}

})

.listen(port, function () {
	console.log('Listening on localhost:' + port);
});

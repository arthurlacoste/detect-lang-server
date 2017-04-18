var express = require('express');
var app = express();
const translate = require('google-translate-api');

var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
  res.send('Hello World!');
})

.get('/lang/:phrase', function(req, render) {
    render.setHeader('Content-Type', 'application/json');
	var toot = 	req.params.phrase.toString();
				
	
	//console.log('Détection de la langue de : ' + req.params.phrase + '...');
	
	translate(toot, {to: 'fr'}).then(translate => {
		//console.log(translate.text); // traduction
		console.log(translate.from.language.iso + "=" + toot) // langue détecté format ISO
		render.end(JSON.stringify({ lang: translate.from.language.iso}));
	}).catch(err => {
		console.error(err);
	});
})

.listen(port, function () {
  console.log('Listening on localhost:' + port);
});

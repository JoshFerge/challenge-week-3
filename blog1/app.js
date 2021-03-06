var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile('./views/index.html');
});

app.get('/about', function(req, res) {
	res.sendfile('./views/about.html');
});

app.get('/article', function(req, res) {
	res.sendfile('./views/article.html');
});

app.get('/contact', function(req, res) {
	res.sendfile('./views/contact.html');
});

app.listen(3000);
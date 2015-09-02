var express = require('express');
var exphbs = require('express3-handlebars');

var app = express();
// var hbs = exphbs.create({});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to hbs
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// make express look in the public directory for assets (css/js/img)
app.use('/public', express.static('public'));

// set the home page route
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.listen(port);
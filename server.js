var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express();

var hbs = exphbs.create({
	defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', {home: true});
});

app.get('/conductors', function (req, res) {
    res.render('conductors', {conductors: true});
});

app.get('/event', function (req, res) {
    res.render('event', {event: true});
});

app.get('/contact', function (req, res) {
    res.render('contact', {contact: true});
});

app.use(express.static(__dirname));

app.listen(3000);

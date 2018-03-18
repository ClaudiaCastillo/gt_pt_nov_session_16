var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var port = process.env.PORT || 5000;
var methodOverride = require('method-override');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// extended true lets you send arrays and objects in the form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var main_routes = require('./routes/main_routes');
var api_routes = require('./routes/api_routes');

// app.use('/api/notes', main_routes);
app.use('/', main_routes);
app.use('/api', api_routes);

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});











// app.get('/', function(req, res) {

// 	// res.render('index', {layout: 'another'});
// 	Note.findAll().then(function(data) {
// 		res.render('index', {title: 'Index Page', notes: data});
// 	});
// });
var router = require('express').Router();
var Op = require('sequelize').Op;
var Note = require('../models').note;
var path = require('path');

// CRUD -- Create Read Update Delete

// Note.create({
// 	title: 'Another title',
// 	details: 'Some details about note 2'
// });

// localhost:5000/api/notes
router.get('/', function(req, res) {
	Note.findAll().then(function(data) {
		res.render('index', {notes: data});
		// res.sendFile(path.join(__dirname, '../views/index.html'));
	});

	// Note.findAll({
	// 	where: {
	// 		count: {
	// 			[Op.gt]: 10 
	// 		}
	// 	}
	// }).then(function(data) {
	// 	res.render('index', {notes: data});
	// 	// res.sendFile(path.join(__dirname, '../views/index.html'));
	// });
});



router.post('/note', function(req, res) {
	// req.body {title: 'some title', details: 'some details'}
	Note.create(req.body).then(function() {
		res.redirect('/');
	});
});

router.delete('/notes', function(req, res) {
	Note.destroy({
		where: {
			id: req.query.id
		}
	}).then(function() {
		res.redirect('/');
	})
});

module.exports = router;

















// router.post('/create', function(req, res) {
// 	res.render('index');
// 	// Note.findAll().then(function(data) {
// 	// 	res.render('index', {title: 'Index Page', notes: data});
// 	// });
// });

// router.get('/:id', function(req, res) {
// 	res.render('index');
// 	// Note.findAll().then(function(data) {
// 	// 	res.render('index', {title: 'Index Page', notes: data});
// 	// });
// });



// module.exports = function(app) {

// }
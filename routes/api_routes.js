var router = require('express').Router();
var Note = require('../models').note;

// starts at localhost:5000/api
router.get('/notes', function(req, res) {
	Note.findAll().then(function(data) {
		res.send(data);
	});
});

router.post('/notes', function(req, res) {
	// req.body {title: 'some title', details: 'some details'}
	Note.create(req.body).then(function(result) {
		res.send(result);
	});
});

module.exports = router;

var keystone = require('keystone');

// var keystone = require('keystone'),
// 	Gallery = keystone.list('Gallery');


exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'gallery';
	
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));

	view.render('gallery');
	
}


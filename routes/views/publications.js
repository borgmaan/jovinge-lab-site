var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'publications'; // this has to match key in /routes/views/middleware.js
	view.query('pubs', keystone.list('Publication').model.find());	

	// Render the view
	view.render('publications');
	
};

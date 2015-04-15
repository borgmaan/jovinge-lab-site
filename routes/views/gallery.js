
var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'gallery';
	
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));
	
	view.render('gallery');
	
}

// var keystone = require('keystone');//,
// 	// Gallery = keystone.list('Gallery');

// exports = module.exports = function(req, res) {
	
// 	var view = new keystone.View(req, res),
// 		locals = res.locals;

// 	// Set locals
// 	locals.section = 'gallery';
// 	// locals.data = {
// 	// 	galleries: [] // storing all info for our galleries in an array...
// 	// };
	

// 	// one way to set this up
// 	// Gallery.model.find()
// 	//     .sort('sortOrder')
// 	//     .exec(function(err, gals) {
//  //        // do something with posts
//  //        	console.log('printing query results');
//  //        	console.log(gals);
//  //        	locals.data.galleries = gals
//  //        	if (err) return handleError(err);
//  //    	});

// // ._.publishedDate.format('Do MMM YYYY')

// 	// this is our current working one...
// 	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));


	
// 	view.render('gallery');
	
// }
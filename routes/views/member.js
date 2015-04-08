var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'member';


	// locals.data = {
	// 	members: []
	// };


	// query all of our team members
	// view.on('init', function(next) {
		
	// 	console.log('init');
	// 	console.log(locals);
		
	// 	var q = keystone.list('Member').model.find();
		
	// 	q.exec(function(err, results) {

	// 		console.log('this should be the query results...');
	// 		console.log(results);
	// 		locals.data.members = results;
	// 		next(err);
	// 	});

	// 	console.log(locals);
	// 	console.log('done init...');
		
	// });

	view.query('members', keystone.list('Member').model.find());	


	// Render the view
	view.render('team');
	// console.log('should be rendered....');
	// console.log(locals);

	
};

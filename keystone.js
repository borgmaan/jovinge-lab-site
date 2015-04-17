// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone'),
	handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Jovinge Lab',
	'brand': 'Jovinge Lab',
	
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',
	
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '[k8wpyAsrQ,E!q;n1ynwp:shctF4F5ZFGi{z%~b2%`rG/uPl51c#48lTal/10&JE'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'enquiries': 'enquiries',
	'galleries': 'galleries',
	'members': 'members',
	'publications': 'publications',
	'users': 'users'
});


// sercurely serve our images over https
keystone.set('cloudinary secure', true);

// add additional admin ui options
keystone.set('wysiwyg menubar', true);
// keystone.set('wysiwyg images', true)
keystone.set('wysiwyg cloudinary images', true);
keystone.set('wysiwyg additional buttons', 'searchreplace, forecolor, backcolor, emoticons, media, preview, print');
keystone.set('wysiwyg additional plugins', 'example, table, advlist, anchor, autolink, autosave, bbcode, charmap, contextmenu, directionality, emoticons, fullpage, hr, media, pagebreak, paste, preview, print, searchreplace, textcolor, visualblocks, visualchars, wordcount');



// Start Keystone to connect to your database and initialise the web server

keystone.start();

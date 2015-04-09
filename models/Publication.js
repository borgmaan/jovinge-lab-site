var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Model for a team member
 * ==========
 */

var Publication = new keystone.List('Publication', {
	map: { name: 'shortTitle' },
	autokey: { path: 'key', from: 'name'},
	defaultSort: '-publishedDate'
});

Publication.add({
	shortTitle: { type: Types.Text },
	fullTitle: { type: Types.Text },
	authors: {
		abbreviatedList: {type: Types.Text},
		fullList: {type: Types.Text}
	},
	journal:{ type: Types.Text },
	status: { type: Types.Select, options: 'preprint, accepted, published', default: 'published', index: true },
	publishedDate: { type: Types.Date, index: true},
	doi: { type: Types.Text },
	featuredFigure: { type: Types.CloudinaryImage },
	synopsis: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	}
});

Publication.defaultColumns = 'shortTitle, journal, status, publishedDate';
Publication.register();


// fa-newspaper-o
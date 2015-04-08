var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Model for a team member
 * ==========
 */

var Member = new keystone.List('Member', {
	map: { name: 'scientist' },
	autokey: { path: 'key', from: 'name'}
});

Member.add({
	scientist: { type: Types.Name },
	role: { type: Types.Text },
	image: { type: Types.CloudinaryImage },
	bio: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	}
});

Member.defaultColumns = 'name, role';
Member.register();

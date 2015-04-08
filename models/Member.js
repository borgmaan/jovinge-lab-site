var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Model for a team member
 * ==========
 */

var Member = new keystone.List('Member', {
	autokey: { path: 'slug', from: 'name'}
});

Member.add({
	scien: { type: Types.Name },
	role: { type: Types.Text },
	image: { type: Types.CloudinaryImage },
	bio: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	}
});

Member.defaultColumns = 'name, role';
Member.register();

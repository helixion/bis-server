'use strict';

const bookshelf = require('../bookshelf');

const Comments = bookshelf.Model.extend({
	tableName: 'comments',
	hasTimestamps: true,

	posts: function() {
		return this.belongsTo('Posts');
	},

	author: function() {
		return this.hasOne('Users');
	}
});

module.exports = bookshelf.model('Comments', Comments);
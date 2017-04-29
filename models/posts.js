'use strict';

const bookshelf = require('../bookshelf');

const Posts = bookshelf.Model.extend({
	tableName: 'posts',
	hasTimestamps: true,

	author: function() {
		return this.hasOne('Users');
	},

	comments: function() {
		return this.hasMany('Comments');
	}
});

module.exports = bookshelf.model('Posts', Posts);
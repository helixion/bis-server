'use strict';

const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'localhost',
		user: 'bis',
		password: 'hihi00hihi',
		database: 'bis',
		charset: 'utf8'
	}
});

const Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');

module.exports = Bookshelf;
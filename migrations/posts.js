'use strict';
const knex = require('knex');

exports.up = function(knex) {
	return knex.schema
		.createTable('posts', function(table) {
			table.increments('id').primary();
			table.string('title');
			table.text('body');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTable('posts');
};
'use strict';

const knex = require('knex');

exports.up = function(knex) {
	return knex.schema
		.createTable('comments', function(table) {
			table.increment('id').primary();
			table.text('body');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTable('comments');
};
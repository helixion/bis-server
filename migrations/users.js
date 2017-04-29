'use strict';

const knex = require('knex');

exports.up = function(knex) {
	return knex.schema
		.createTable('users', function(table) {
			table.increments('id').primary();
			table.string('username');
			table.string('password');
			table.string('email');
			table.string('avatar');
		})
};

exports.down = function(knex) {
	return knex.schema
		.dropTable('users');
};
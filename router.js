const express = require('express');
const routes = require('./routes');

module.exports = function(app) {

	const router = express.Router();

	router.route('/posts')
		.get(fetchAllPosts());

	return router;

};

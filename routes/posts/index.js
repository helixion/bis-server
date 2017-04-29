const Posts = require('../../models/posts');

const fetchAllPosts = function(req, res, next) {
	Posts.fetchAll({withRelated: ['posts.author', 'posts.comments']})
		.omit(['users.password'])
		.then(posts => {
			if (!posts) {
				return res.status(404).json({ message: 'No posts were found.'});
			}
			return res.status(200).json(posts);
		});
};
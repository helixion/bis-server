'use strict';

const bookshelf = require('../bookshelf');
const Promise = require('bluebird');
const bcrypt = Promise.promisfyAll(require('bcrypt-nodejs'));

const Users = bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: true,
	saving: this.on('saving', securePassword),

	securePassword: function(model, attrs, options) {

		return new Promise(function(resolve, reject) {
			bcrypt.genSalt(10, null).then(salt => {
				bcrypt.hash(model.attributes.password, salt). then(hashedPassword => {
					model.set('password', hashedPassword);
					resolve(hashedPassword);
				})
			})
		})
		.catch(e => {
			reject(e);
		});
	},

	login: Promise.method(function(email, password) {

		if (!email || !password) return 'Email and password must be entered';
		return new this({email: email.toLowerCase().trim() }).fetch({required: true}).tap(function(user) {
			if (!user) {
				return 'No user found with that criteria'.
			}
			return bcrypt.compare(password, user.get('password'))
				.then(function(res) {
					if (!res) {
						return 'Invalid password';
					}

				});
		});
	}),

	posts: function() {
		return this.belongsTo('Posts');
	},

	
});

module.exports = bookshelf.model('Users', Users);
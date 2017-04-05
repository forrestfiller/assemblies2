var User = require('../models/User')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')

module.exports = {
	get: function(params, isRaw){
		return new Promise(function(resolve, reject){
			User.find(params, function(err, users){
				if (err){
					reject(err)
					return
				}

				if (isRaw == true)
					resolve(users)
				else {
					var list = []
					users.forEach(function(user, i){
						list.push(user.summary())
					})

					resolve(list)
				}
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){
			User.findById(id, function(err, user){
				if (err){
					reject(err)
					return
				}

				if (isRaw == true)
					resolve(user)
				else
					resolve(user.summary())
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			if (params['password']) 			// hash password!
				(params['password']) = bcrypt.hashSync(params.password, 10)

			User.create(params, function(err, user){
				if (err){
					reject(err)
					return
				}

				if (isRaw == true)
					resolve(user)
				else
					resolve(user.summary())
			})
		})
	}
}


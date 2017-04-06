var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')

router.get('/:action', function(req, res, next) {
	var action = req.params.action

	if (action == 'currentuser'){
		if (req.session == null){
			res.json({
				confirmation:'success',
				user:null
			})
			return
		}

		if (req.session.user == null){
			res.json({
				confirmation:'success',
				user:null
			})
			return
		}

		controllers.user
		.getById(req.session.user, false)
		.then(function(user){
			res.json({
				confirmation:'success',
				user:user
			})
		})
		.catch(function(err){
			res.json({
				confirmation:'fail',
				user:err
			})
		})
	}

	if (action == 'logout'){
		req.session.reset()
		res.json({
			confirmation:'success',
			message:'logout'
		})
	}
})

router.post('/:action', function(req, res, next) {
	var action = req.params.action
	if (action == 'register'){
		controllers.user
		.post(req.body, false)
		.then(function(user){
			req.session.user = user.id // set the session
			res.json({
				confirmation:'success',
				user:user
			})
		})
		.catch(function(err){
			res.json({
				confirmation:'fail',
				message: err
			})
		})
	}
	if (action == 'login'){
		controllers.user
		.get({username: req.body.username}, true) // only time i pass true!

		.then(function(users){
			if (users == 0){
				res.json({
					confirmation:'fail',
					message: 'User not found'
				})
				return
			}
			var user = users[0]
			// check password

			var isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
			if (isPasswordCorrect == false){
				res.json({
					confirmation:'fail',
					message:'wrong password!'
				})
				return
			}

			req.session.user = user._id
			res.json({
				confirmation:'success',
				user: user.summary()
			})
		})

		.catch(function(err){
			res.json({
				confirmation:'fail',
				message:err
			})
		})
	}
})

module.exports = router

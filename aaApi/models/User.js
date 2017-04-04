var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: {type:String, default:''},
  id: {type:String, default:''},
  password: {type:String, default:''},
  firstName: {type:String, default:''},
  lastName: {type:String, default:''},
  location: {type:Object, default:{}},
  technologies: {type:Array, default:[]},
  avatar: {type:String, default:''},
  timestamp: {type:Date, default: Date.now}
})

module.exports = mongoose.model('UserSchema', UserSchema)

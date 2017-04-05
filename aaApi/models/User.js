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

UserSchema.methods.summary = function(){
  var summary = {
    username: this.username,
    id: this._id.toString(),
    firstName: this.firstName,
    lastName: this.lastName,
    location: this.location,
    technologies: this.technologies,
    avatar: this.avatar,
    timestamp: this.timestamp
  }

  return summary

}

module.exports = mongoose.model('UserSchema', UserSchema)

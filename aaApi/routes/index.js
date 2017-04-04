var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
  res.json({
    confirmation: 'success',
    message: 'You are at the index'
  })
})

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource

  if (resource == 'user'){
    res.json({
      confirmation: 'success',
      message: 'user'
    })
  }
  else {
    res.json({
      confirmation: 'fail',
      message: 'invalid resource'
    })
  }

})

module.exports = router

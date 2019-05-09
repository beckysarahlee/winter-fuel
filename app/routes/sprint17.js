
const express = require('express');
const router = express.Router()

router.get('/sprint17/', function(req, res) {
    res.render('./sprint17/whattodo')
  })
  
  router.post('/sprint15/international/declaration', function(req, res) {
    res.redirect('/sprint15/international/applicationcomplete')
  }) 

module.exports = router;
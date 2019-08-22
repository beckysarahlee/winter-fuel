const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint22/exceptions', (req, res) => {
    res.redirect('/sprint22/exceptions-result')
  })
  ;

  //    } else if (something === something) {

  module.exports = router;

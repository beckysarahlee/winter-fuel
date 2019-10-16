const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/get', (req, res) => {
    res.redirect('/sprint26/top-up')
  })
  ;



  module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Find someone to find result
  router.post('/sprint33c/address', (req, res) => {
    res.redirect('/sprint33c/address-1')
  })
  ;

  module.exports = router;

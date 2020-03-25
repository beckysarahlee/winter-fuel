const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/emergency-topup-payments/find', (req, res) => {
    res.redirect('/emergency-topup-payments/overview')
  })
  ;


  module.exports = router;

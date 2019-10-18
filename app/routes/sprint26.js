const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/get-underpayment', (req, res) => {
    res.redirect('/sprint26/top-up')
  })
  ;

  router.post('/sprint26/get-overpayment', (req, res) => {
    res.redirect('/sprint26/overpayment')
  })
  ;

  // Top up referral to payment

  router.post('/sprint26/top-up', (req, res) => {
    res.redirect('/sprint26/top-up-payment')
  })
  ;

  // Top up payment to referral

  router.post('/sprint26/top-up-payment', (req, res) => {
    res.redirect('/sprint26/top-up-confirmation')
  })
  ;



  module.exports = router;

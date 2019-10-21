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

  router.post('/sprint26/overpayment-debt', (req, res) => {
    res.redirect('/sprint26/overpayment-confirmation')
  })
  ;

  // Top up referral to payment

  router.post('/sprint26/top-up', (req, res) => {
    res.redirect('/sprint26/top-up-confirmation')
  })
  ;

  // Top up payment to referral

  router.post('/sprint26/top-up-payment', (req, res) => {
    res.redirect('/sprint26/top-up-confirmation')
  })
  ;

  // Top up confirmation to get another

  router.post('/sprint26/top-up-confirmation', (req, res) => {
    res.redirect('/sprint26/get-underpayment')
  })
  ;

  // Underpayment confirmation to get another

  router.post('/sprint26/overpayment-confirmation', (req, res) => {
    res.redirect('/sprint26/get-overpayment')
  })
  ;

  module.exports = router;

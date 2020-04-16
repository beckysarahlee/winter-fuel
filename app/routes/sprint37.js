const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


  // Teleclaim or postal claim
  router.post('/sprint37-international/application-type', (req, res) => {
    res.redirect('/sprint37-international/date-of-birth')
  })
  ;

  // DOB to phone/postal journey
  router.post('/sprint37-international/date-of-birth', function(req, res) {
      if (req.body["dob-year"] === "1960") {
        res.redirect('post-too-young');
      }
      else if (req.body["dob-year"] === "1959") {
        res.redirect('phone-too-young');
      } else {
        res.redirect('find');
      }
  });

  // Find to name
  router.post('/sprint37-international/find', (req, res) => {
    res.redirect('/sprint37-international/confirm-name')
  })
  ;

  // Name to address
  router.post('/sprint37-international/confirm-name', (req, res) => {
    res.redirect('/sprint37-international/address')
  })
  ;

  // Address during Q week
  router.post('/sprint37-international/address', function(req, res) {
      if (req.body["living-q-week"] === "yes") {
        res.redirect('move-date');
      } else {
        res.redirect('address-q-week');
      }
  });

  // Name to address
  router.post('/sprint37-international/move-date', (req, res) => {
    res.redirect('/sprint37-international/living-with')
  })
  ;

  //
  router.post('/sprint37-international/living-with', function(req, res) {
      if (req.body["living-with"] === "yes") {
        res.redirect('living-with-about');
      } else {
        res.redirect('contact');
      }
  });

  // Living with about
  router.post('/sprint37-international/living-with-about', (req, res) => {
    res.redirect('/sprint37-international/contact')
  })
  ;


  // Contact to type of account
  router.post('/sprint37-international/contact', (req, res) => {
    res.redirect('/sprint37-international/type-of-account')
  })
  ;

  // Type of account to UK or International
  router.post('/sprint37-international/type-of-account', function(req, res) {
      if (req.body["bank-type"] === "uk-bank-account") {
        res.redirect('uk-bank-details');
      } else {
        res.redirect('international-bank-details');
      }
  });





  module.exports = router;

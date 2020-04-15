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
    res.redirect('/sprint37-international/name')
  })
  ;

  // Name to address
  router.post('/sprint37-international/name', (req, res) => {
    res.redirect('/sprint37-international/address')
  })
  ;

  // Address during Q week
  router.post('/sprint37-international/address', function(req, res) {
      if (req.body["living-q-week"] === "yes") {
        res.redirect('living-with');
      } else {
        res.redirect('address-q-week');
      }
  });

  //
  router.post('/sprint37-international/living-with', function(req, res) {
      if (req.body["living-with"] === "yes") {
        res.redirect('living-with-about');
      } else {
        res.redirect('contact');
      }
  });






  module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/frequency', (req, res) => {
    res.redirect('/sprint19/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/bankdetails', (req, res) => {
    res.redirect('/sprint19/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/workphone', (req, res) => {
    res.redirect('/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/mobilephone', (req, res) => {
    res.redirect('/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/email', (req, res) => {
    res.redirect('/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/homephone', (req, res) => {
    res.redirect('/sprint19/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/find', (req, res) => {
    res.redirect('/sprint19/find-1')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint19/address', (req, res) => {
    res.redirect('/sprint19/address-1')
  })
  ;

  router.post('/sprint19/address-1', (req, res) => {
    res.redirect('/sprint19/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/sprint19/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/sprint19/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/sprint19/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/sprint19/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/sprint19/workphone', (req, res) => {
    res.redirect('/sprint19/overview')
  })
  ;

  // Email removal
  router.post('/sprint19/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/sprint19/marital-status', (req, res) => {
    res.redirect('/sprint19/marriage-details')
  })
  ;

  router.post('/sprint19/marriage-details', (req, res) => {
    res.redirect('/sprint19/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/sprint19/contact-preferences', (req, res) => {
    res.redirect('/sprint19/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/sprint19/occupants', function(req, res) {
    if ( req.body['who-lives'] != "user" ) {
        res.redirect('/sprint19/reason-removed1');
    } else {
        res.redirect('/sprint19/reason-removed1')
    }
  })
  ;

  router.post('/sprint19/reason-removed1', (req, res) => {
    res.redirect('/sprint19/searchlight-check')
  })
  ;


  router.post('/sprint19/searchlight-check', function(req, res) {
    if ( req.body['searchlight'] === 'yes' ) {
      res.redirect('evidence-request');
    } else {
      res.redirect('move-date');
    }
  });

  router.post('/sprint19/move-date', (req, res) => {
    res.redirect('/sprint19/confirm-top-up')
  })
  ;

  router.post('/sprint19/check-underpayment', (req, res) => {
    res.redirect('/sprint19/evidence-request')
  })
  ;

  router.post('/sprint19/evidence-request', (req, res) => {
    res.redirect('/sprint19/overview-awaiting-verification')
  })
  ;

  router.post('/sprint19/evidence-verification', (req, res) => {
    res.redirect('/sprint19/confirm-top-up')
  })
  ;

  router.post('/sprint19/new-address-date', (req, res) => {
      res.redirect('/sprint19/other-occupants')
    })
    ;

    router.post('/sprint19/other-occupants', function(req, res) {
          if ( req.body['correct-address'] != "yes" ) {
              res.redirect('/sprint19/live-alone-date');
          } else {
              res.redirect('/sprint19/confirm-top-up')
          }
        })
        ;

  // Option for updating a record

  router.post('/sprint19/occupants1', function(req, res) {
      if ( req.body['correct-address'] === 'yes' ) {
          res.redirect('/sprint19/other-occupants');
      } else {
          res.redirect('/sprint19/new-address')
      }
    })
    ;

  // Stopping payments
  router.post('/sprint19/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;

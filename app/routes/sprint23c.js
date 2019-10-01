const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query

  router.post('/sprint23c/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint23c/find');
  }
  });



  router.post('/sprint23c/frequency', (req, res) => {
    res.redirect('/sprint23c/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint23c/bankdetails', (req, res) => {
    res.redirect('/sprint23c/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint23c/workphone', (req, res) => {
    res.redirect('/sprint23c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint23c/mobilephone', (req, res) => {
    res.redirect('/sprint23c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint23c/email', (req, res) => {
    res.redirect('/sprint23c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint23c/homephone', (req, res) => {
    res.redirect('/sprint23c/contact')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint23c/find', (req, res) => {
    res.redirect('/sprint23c/find-1')
  })
  ;

  router.post('/sprint23c/find-1', (req, res) => {
    res.redirect('/sprint23c/security')
  })
  ;


  router.post('/sprint23c/security', (req, res) => {
    res.redirect('/sprint23c/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint23c/address', (req, res) => {
    res.redirect('/sprint23c/address-1')
  })
  ;

  router.post('/sprint23c/address-1', (req, res) => {
    res.redirect('/sprint23c/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/sprint23c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/sprint23c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/sprint23c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/sprint23c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/sprint23c/workphone', (req, res) => {
    res.redirect('/sprint23c/contact')
  })
  ;

  // Email removal
  router.post('/sprint23c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/sprint23c/marital-status', (req, res) => {
    res.redirect('/sprint23c/marriage-details')
  })
  ;

  router.post('/sprint23c/marriage-details', (req, res) => {
    res.redirect('/sprint23c/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/sprint23c/contact-preferences', (req, res) => {
    res.redirect('/sprint23c/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/sprint23c/occupants', (req, res) => {
    res.redirect('/sprint23c/reason-removed1')
  })
  ;

  router.post('/sprint23c/reason-removed1', (req, res) => {
    res.redirect('/sprint23c/move-date')
  })
  ;

  router.post('/sprint23c/move-date', (req, res) => {
    res.redirect('/sprint23c/reason-removed2')
  })
  ;

  router.post('/sprint23c/reason-removed2', (req, res) => {
    res.redirect('/sprint23c/check-underpayment')
  })
  ;

  router.post('/sprint23c/check-underpayment', (req, res) => {
    res.redirect('/sprint23c/evidence-request')
  })
  ;

  router.post('/sprint23c/evidence-request', (req, res) => {
    res.redirect('/sprint23c/overview-awaiting-verification')
  })
  ;

  router.post('/sprint23c/evidence-verification', (req, res) => {
    res.redirect('/sprint23c/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/sprint23c/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;

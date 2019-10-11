const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query

  router.post('/sprint26/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint26/find');
  }
  });



  router.post('/sprint26/frequency', (req, res) => {
    res.redirect('/sprint26/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/bankdetails', (req, res) => {
    res.redirect('/sprint26/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/workphone', (req, res) => {
    res.redirect('/sprint26/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/mobilephone', (req, res) => {
    res.redirect('/sprint26/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/email', (req, res) => {
    res.redirect('/sprint26/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/homephone', (req, res) => {
    res.redirect('/sprint26/contact')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/find', (req, res) => {
    res.redirect('/sprint26/find-1')
  })
  ;

  router.post('/sprint26/find-1', (req, res) => {
    res.redirect('/sprint26/security')
  })
  ;


  router.post('/sprint26/security', (req, res) => {
    res.redirect('/sprint26/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint26/address', (req, res) => {
    res.redirect('/sprint26/address-1')
  })
  ;

  router.post('/sprint26/address-1', (req, res) => {
    res.redirect('/sprint26/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/sprint26/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/sprint26/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/sprint26/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/sprint26/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/sprint26/workphone', (req, res) => {
    res.redirect('/sprint26/contact')
  })
  ;

  // Email removal
  router.post('/sprint26/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/sprint26/marital-status', (req, res) => {
    res.redirect('/sprint26/marriage-details')
  })
  ;

  router.post('/sprint26/marriage-details', (req, res) => {
    res.redirect('/sprint26/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/sprint26/contact-preferences', (req, res) => {
    res.redirect('/sprint26/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/sprint26/occupants', (req, res) => {
    res.redirect('/sprint26/reason-removed1')
  })
  ;

  router.post('/sprint26/reason-removed1', (req, res) => {
    res.redirect('/sprint26/move-date')
  })
  ;

  router.post('/sprint26/move-date', (req, res) => {
    res.redirect('/sprint26/reason-removed2')
  })
  ;

  router.post('/sprint26/reason-removed2', (req, res) => {
    res.redirect('/sprint26/check-underpayment')
  })
  ;

  router.post('/sprint26/check-underpayment', (req, res) => {
    res.redirect('/sprint26/evidence-request')
  })
  ;

  router.post('/sprint26/evidence-request', (req, res) => {
    res.redirect('/sprint26/overview-awaiting-verification')
  })
  ;

  router.post('/sprint26/evidence-verification', (req, res) => {
    res.redirect('/sprint26/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/sprint26/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query

  router.post('/sprint27c/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint27c/find');
  }
  });



  router.post('/sprint27c/frequency', (req, res) => {
    res.redirect('/sprint27c/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint27c/bankdetails', (req, res) => {
    res.redirect('/sprint27c/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint27c/workphone', (req, res) => {
    res.redirect('/sprint27c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint27c/mobilephone', (req, res) => {
    res.redirect('/sprint27c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint27c/email', (req, res) => {
    res.redirect('/sprint27c/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint27c/homephone', (req, res) => {
    res.redirect('/sprint27c/contact')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint27c/find', (req, res) => {
    res.redirect('/sprint27c/find-1')
  })
  ;

  router.post('/sprint27c/find-1', (req, res) => {
    res.redirect('/sprint27c/security')
  })
  ;


  router.post('/sprint27c/security', (req, res) => {
    res.redirect('/sprint27c/overview-security')
  })
  ;



  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint27c/address', (req, res) => {
    res.redirect('/sprint27c/address-1')
  })
  ;

  router.post('/sprint27c/address-1', (req, res) => {
    res.redirect('/sprint27c/living-with')
  })
  ;


  // Living with
  router.post('/sprint27c/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Yes' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('homephone-address');
    }
  });

  // Living with age
  router.post('/sprint27c/living-with-age', (req, res) => {
    res.redirect('/sprint27c/contact')
  })
  ;

  // Change of address and home phone number
  router.post('/sprint27c/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/sprint27c/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/sprint27c/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/sprint27c/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/sprint27c/workphone', (req, res) => {
    res.redirect('/sprint27c/contact')
  })
  ;

  // Email removal
  router.post('/sprint27c/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/sprint27c/marital-status', (req, res) => {
    res.redirect('/sprint27c/marriage-details')
  })
  ;

  router.post('/sprint27c/marriage-details', (req, res) => {
    res.redirect('/sprint27c/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/sprint27c/contact-preferences', (req, res) => {
    res.redirect('/sprint27c/contact')
  })
  ;

  // Removing occupants, underpayment
  router.post('/sprint27c/occupants', (req, res) => {
    res.redirect('/sprint27c/reason-removed1')
  })
  ;

  router.post('/sprint27c/reason-removed1', (req, res) => {
    res.redirect('/sprint27c/move-date')
  })
  ;

  router.post('/sprint27c/move-date', (req, res) => {
    res.redirect('/sprint27c/reason-removed2')
  })
  ;

  router.post('/sprint27c/reason-removed2', (req, res) => {
    res.redirect('/sprint27c/check-underpayment')
  })
  ;

  router.post('/sprint27c/check-underpayment', (req, res) => {
    res.redirect('/sprint27c/evidence-request')
  })
  ;

  router.post('/sprint27c/evidence-request', (req, res) => {
    res.redirect('/sprint27c/overview-awaiting-verification')
  })
  ;

  router.post('/sprint27c/evidence-verification', (req, res) => {
    res.redirect('/sprint27c/overview-evidence-received')
  })
  ;


  // Stopping payments
  router.post('/sprint27c/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;

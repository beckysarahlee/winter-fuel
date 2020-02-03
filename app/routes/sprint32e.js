const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/sprint32e/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint32e/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/sprint32e/find', (req, res) => {
    res.redirect('/sprint32e/find-1')
  })
  ;

  // Find result to security
  router.post('/sprint32e/find-1', (req, res) => {
    res.redirect('/sprint32e/security')
  })
  ;

  // Security to extra security (failed question)
  router.post('/sprint32e/security', (req, res) => {
    res.redirect('/sprint32e/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/sprint32e/homephone', (req, res) => {
    res.redirect('/sprint32e/contact')
  })
  ;

  // Home phone number removal
  router.post('/sprint32e/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/sprint32e/workphone', (req, res) => {
    res.redirect('/sprint32e/contact')
  })
  ;

  // Work phone number removal
  router.post('/sprint32e/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/sprint32e/mobilephone', (req, res) => {
    res.redirect('/sprint32e/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/sprint32e/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/sprint32e/email', (req, res) => {
    res.redirect('/sprint32e/contact')
  })
  ;

  // Email removal
  router.post('/sprint32e/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/sprint32e/contact-preferences', (req, res) => {
    res.redirect('/sprint32e/contact')
  })
  ;

  // Address -----------------------------

  router.post('/sprint32e/address', (req, res) => {
    res.redirect('/sprint32e/address-1')
  })
  ;

  router.post('/sprint32e/address-1', (req, res) => {
    res.redirect('/sprint32e/move-date')
  })
  ;

  router.post('/sprint32e/move-date', (req, res) => {
    res.redirect('/sprint32e/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/sprint32e/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/sprint32e/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('poa');
    }
  });

  router.post('/sprint32e/poa', (req, res) => {
    res.redirect('/sprint32e/declaration')
  })
  ;

  router.post('/sprint32e/declaration', (req, res) => {
    res.redirect('/sprint32e/make-payment')
  })
  ;

  // Check to payments
  router.post('/sprint32e/check', (req, res) => {
    res.redirect('/sprint32e/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/sprint32e/make-payment', (req, res) => {
    res.redirect('/sprint32e/overview-topup-1')
  })
  ;



  // Living with age back to contact
  router.post('/sprint32e/living-with-age', (req, res) => {
    res.redirect('/sprint32e/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details change to bank confirm
  router.post('/sprint32e/bankdetails', (req, res) => {
    res.redirect('/sprint32e/confirm-bank')
  })
  ;

  // Bank confirm to payment
  router.post('/sprint32e/confirm-bank', function(req, res) {
    if ( req.body['bank-name'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('bankdetails');
    }
  });

  // Reissue payment to payment with confirmation and updated
  router.post('/sprint32e/reissue-payment', (req, res) => {
    res.redirect('/sprint32e/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/sprint32e/stop-payments', function(req, res) {
    if ( req.body['stop-payments'] === 'Yes' ) {
      res.redirect('payment-stopped');
    } else {
      res.redirect('payment');
    }
  });

  // Starting payments
  router.post('/sprint32e/start-payments', function(req, res) {
    if ( req.body['start-payments'] === 'Yes' ) {
      res.redirect('payment');
    } else {
      res.redirect('payment-stopped');
    }
  });

  module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Query
  router.post('/sprint29b/query', function(req, res) {
  if ( req.body['query'] === 'eligibility' ) {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint29b/find');
  }
  });


  // FIND SOMEONE AND SECURITY -------------------------------------------------

  // Find someone to find result
  router.post('/sprint29b/find', (req, res) => {
    res.redirect('/sprint29b/find-1')
  })
  ;

  // Find result to security
  router.post('/sprint29b/find-1', (req, res) => {
    res.redirect('/sprint29b/security')
  })
  ;

  // Security into record with security confirmation box
  router.post('/sprint29b/security', (req, res) => {
    res.redirect('/sprint29b/overview-security')
  })
  ;

  // CONTACT CHANGES -----------------------------------------------------------

  // Home phone number change back to contact
  router.post('/sprint29b/homephone', (req, res) => {
    res.redirect('/sprint29b/contact')
  })
  ;

  // Home phone number removal
  router.post('/sprint29b/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('homephone');
    }
  });

  // Work phone number change back to contact
  router.post('/sprint29b/workphone', (req, res) => {
    res.redirect('/sprint29b/contact')
  })
  ;

  // Work phone number removal
  router.post('/sprint29b/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('workphone');
    }
  });

  // Mobile phone number change back to contact
  router.post('/sprint29b/mobilephone', (req, res) => {
    res.redirect('/sprint29b/contact')
  })
  ;

  // Mobile phone number removal
  router.post('/sprint29b/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Email address change back to contact
  router.post('/sprint29b/email', (req, res) => {
    res.redirect('/sprint29b/contact')
  })
  ;

  // Email removal
  router.post('/sprint29b/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('contact');
    } else {
      res.redirect('email');
    }
  });

  // Contact preference change back to contact
  router.post('/sprint29b/contact-preferences', (req, res) => {
    res.redirect('/sprint29b/contact')
  })
  ;

  // Address -----------------------------

  router.post('/sprint29b/address', (req, res) => {
    res.redirect('/sprint29b/address-1')
  })
  ;

  router.post('/sprint29b/address-1', (req, res) => {
    res.redirect('/sprint29b/move-date')
  })
  ;

  router.post('/sprint29b/move-date', (req, res) => {
    res.redirect('/sprint29b/living-with')
  })
  ;



  // Change of address and home phone number
  router.post('/sprint29b/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Living with anyone at address change
  router.post('/sprint29b/living-with', function(req, res) {
    if ( req.body['living-with'] === 'Living with someone else of State Pension age' ) {
      res.redirect('contact');
    } else {
      res.redirect('make-payment');
    }
  });

  // Check to payments
  router.post('/sprint29b/check', (req, res) => {
    res.redirect('/sprint29b/make-payment')
  })
  ;

  // Make payment to contact
  router.post('/sprint29b/make-payment', (req, res) => {
    res.redirect('/sprint29b/contact-1')
  })
  ;



  // Living with age back to contact
  router.post('/sprint29b/living-with-age', (req, res) => {
    res.redirect('/sprint29b/contact')
  })
  ;


  // PAYMENT CHANGES -----------------------------------------------------------

  // Bank details to reissue payment
  router.post('/sprint29b/bankdetails', (req, res) => {
    res.redirect('/sprint29b/reissue-payment')
  })
  ;

  // Reissue payment to payment with confirmation and updated
  router.post('/sprint29b/reissue-payment', (req, res) => {
    res.redirect('/sprint29b/payment-confirmation')
  })
  ;


  // Stopping payments
  router.post('/sprint29b/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;

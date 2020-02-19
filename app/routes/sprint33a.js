const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

// Find someone to confirm full name
  router.post('/sprint33a/find', (req, res) => {
    res.redirect('/sprint33a/find-1')
  })
  ;

// Confirm full name to security questions
  router.post('/sprint33a/find-1', (req, res) => {
    res.redirect('/sprint33a/security')
  })
  ;

// Security questions to house number and postcode
  router.post('/sprint33a/security', (req, res) => {
    res.redirect('/sprint33a/address')
  })
  ;

// Address look up to confirm the first line of the address
  router.post('/sprint33a/address', (req, res) => {
    res.redirect('/sprint33a/address-1')
  })
  ;

// Confirm first line of address to move date
  router.post('/sprint33a/address-1', (req, res) => {
    res.redirect('/sprint33a/move-date')
  })
  ;

// Confirm first line of address to move date
  router.post('/sprint33a/move-date', (req, res) => {
    res.redirect('/sprint33a/living-with')
  })
  ;

  //
  router.post('/sprint33a/living-with', function(req, res) {
    if ( req.body['living-with'] === 'yes' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('contact');
    }
  });

  // Confirm first line of address to move date
    router.post('/sprint33a/living-with-age', (req, res) => {
      res.redirect('/sprint33a/contact')
    })
    ;

// Contact to bank details
  router.post('/sprint33a/contact', (req, res) => {
    res.redirect('/sprint33a/bank-details')
  })
  ;

  // Bank details to declaration
    router.post('/sprint33a/bank-details', (req, res) => {
      res.redirect('/sprint33a/declaration')
    })
    ;

  // Declaration to completion
  router.post('/sprint33a/declaration', (req, res) => {
    res.redirect('/sprint33a/complete-pre')
  })
  ;


  module.exports = router;

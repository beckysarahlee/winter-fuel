const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint32c/comparison-filter', function(req, res) {
  if ( req.body['filter-by'] === 'file-type' ) {
    res.redirect('comparison-filter-file');
  } else {
    res.redirect('comparison-filter-eligibility');
  }
  });
  ;

  router.post('/sprint32c/comparison-filter-eligibility', function(req, res) {
  if ( req.body['eligibility'] === 'eligible' ) {
    res.redirect('comparison-filter-eligible');
  } else {
    res.redirect('comparison-filter-ineligible');
  }
  });
  ;

  router.post('/sprint32c/comparison-filter-eligible', (req, res) => {
    res.redirect('/sprint32c/results-eligible')
  })
  ;


//
  router.post('/sprint32c/comparison-filter-ineligible', (req, res) => {
    res.redirect('/sprint32c/results-ineligible')
  })
  ;

// Get next verify address to account
  router.post('/sprint32c/verify-address', (req, res) => {
    res.redirect('/sprint32c/overview-verify-address')
  })
  ;

// Postcode look up to address results
  router.post('/sprint32c/overview-verify-address', (req, res) => {
    res.redirect('/sprint32c/address-1')
  })
  ;

// Return to queue back to verify address
  router.post('/sprint32c/return-queue', (req, res) => {
    res.redirect('/sprint32c/verify-address')
  })
  ;

// New address to overview
  router.post('/sprint32c/address-1', (req, res) => {
    res.redirect('/sprint32c/verify-address-fixed')
  })
  ;

  // See cases, eligible or ineligible

  router.post('/sprint32c/comparison-filter-eligibility', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/sprint32c/comparison-filter-eligible')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/sprint32c/comparison-filter-ineligible');
    } else {
      res.redirect('/sprint23/deferral')
    }
  })

  // GySP filter

  router.post('/sprint32c/gysp-filter', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/sprint32c/gysp-eligible-filter')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/sprint32c/gysp-ineligible-filter');
    } else {
      res.redirect('/sprint23/deferral')
    }
  })


  // GySP filter to results
  router.post('/sprint32c/gysp-eligible-filter', (req, res) => {
    res.redirect('/sprint32c/gysp-results')
  })
  ;

  // Find case to find result
  router.post('/sprint32c/find-case', (req, res) => {
    res.redirect('/sprint32c/overview')
  })
  ;




  module.exports = router;

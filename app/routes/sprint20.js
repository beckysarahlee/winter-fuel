const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Date of birth

  router.post('/sprint20/date-of-birth', (req, res) => {
    res.redirect('/sprint20/residency')
  })
  ;

  // Living

  router.post('/sprint20/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('benefits');
    } else {
      res.redirect('overseas');
    }
  });


  // Benefits

router.post('/sprint20/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});


  // Residency type

  router.post('/sprint20/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('who');
    }
  });


  // Hospital

  router.post('/sprint20/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/sprint20/care-home', function(req, res) {
      if ( req.body['hospital-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('hospital-over-year');
      }
    });

  //    } else if (something === something) {


  module.exports = router;

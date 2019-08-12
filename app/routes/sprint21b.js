const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


// Pension credit/State Pension
router.post('/sprint21b/receiving-sp', (req, res) => {
  if (req.body.pension.includes('pc')) {
    res.redirect('/sprint21b/full-payment')
  }
  else if (req.body.pension.includes('sp')) {
    res.redirect('/sprint21b/residency-type');
  } else {
    res.redirect('/sprint21b/claimed')
  }
})

  // Date of birth

  router.post('/sprint21b/date-of-birth', (req, res) => {
    res.redirect('/sprint21b/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/sprint21b/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('benefits');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/sprint21b/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });


  // Benefits

router.post('/sprint21b/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});



  // Residency type

  router.post('/sprint21b/residency-type', function(req, res) {
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

  router.post('/sprint21b/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/sprint21b/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('care-home-over-13');
      }
    });

    // Who (Living with)

      router.post('/sprint21b/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('live-with-carehome');
        } else {
          res.redirect('full-payment');
        }
      });

      // Shared payment to ref

      router.post('/sprint21b/shared-payment', (req, res) => {
        res.redirect('/sprint21b/find')
      })
      ;

      // Full payment

      router.post('/sprint21b/full-payment', (req, res) => {
        res.redirect('/sprint21b/find')
      })
      ;

      // Find a person

      router.post('/sprint21b/find', (req, res) => {
        res.redirect('/sprint21b/find-result')
      })
      ;

      // Found person to security

      router.post('/sprint21b/find-result', (req, res) => {
        res.redirect('/sprint21b/security')
      })
      ;

      // Found person to security

      router.post('/sprint21b/security', (req, res) => {
        res.redirect('/sprint21b/address-check')
      })
      ;


// Who (Care home during Q week)

router.post('/sprint21b/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/sprint21b/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Current address

router.post('/sprint21b/address-check', function(req, res) {
  if ( req.body['address-match'] === 'yes' ) {
    res.redirect('check');
  } else {
    res.redirect('postcode');
  }
});


// Postcode

router.post('/sprint21b/postcode', (req, res) => {
  res.redirect('/sprint21b/select-address')
})
;

// Check

router.post('/sprint21b/postcode', (req, res) => {
  res.redirect('/sprint21b/select-address')
})
;

// Select address to check

router.post('/sprint21b/select-address', (req, res) => {
  res.redirect('/sprint21b/move-date')
})
;

// Select address to check

router.post('/sprint21b/move-date', (req, res) => {
  res.redirect('/sprint21b/occupants')
})
;


// Occupants

router.post('/sprint21b/occupants', (req, res) => {
  res.redirect('/sprint21b/check')
})
;

// Check to declaration

router.post('/sprint21b/check', (req, res) => {
  res.redirect('/sprint21b/confirmation')
})
;

// Check to declaration

router.post('/sprint21b/declaration', (req, res) => {
  res.redirect('/sprint21b/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;

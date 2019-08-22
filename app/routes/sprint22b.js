const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


// Pension credit/State Pension
router.post('/sprint22b/receiving-sp', (req, res) => {
  if (req.body.pension.includes('pc')) {
    res.redirect('/sprint22b/full-payment')
  }
  else if (req.body.pension.includes('sp')) {
    res.redirect('/sprint22b/residency-type');
  } else {
    res.redirect('/sprint22b/claimed')
  }
})

  // Date of birth

  router.post('/sprint22b/date-of-birth', (req, res) => {
    res.redirect('/sprint22b/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/sprint22b/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('benefits');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/sprint22b/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });


  // Benefits

router.post('/sprint22b/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});



  // Residency type

  router.post('/sprint22b/residency-type', function(req, res) {
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

  router.post('/sprint22b/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/sprint22b/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('who');
      } else {
        res.redirect('care-home-over-13');
      }
    });

    // Who (Living with)

      router.post('/sprint22b/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Living with (age)

        router.post('/sprint22b/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('live-with-carehome');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to ref

      router.post('/sprint22b/shared-payment', (req, res) => {
        res.redirect('/sprint22b/find')
      })
      ;

      // Full payment

      router.post('/sprint22b/full-payment', (req, res) => {
        res.redirect('/sprint22b/security')
      })
      ;

      // Find a person

      router.post('/sprint22b/find', (req, res) => {
        res.redirect('/sprint22b/find-result')
      })
      ;

      // Found person to security

      router.post('/sprint22b/find-result', (req, res) => {
        res.redirect('/sprint22b/security')
      })
      ;

      // Found person to security

      router.post('/sprint22b/security', (req, res) => {
        res.redirect('/sprint22b/address-check')
      })
      ;


// Who (Care home during Q week)

router.post('/sprint22b/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/sprint22b/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Current address

router.post('/sprint22b/address-check', function(req, res) {
  if ( req.body['address-match'] === 'yes' ) {
    res.redirect('poa');
  } else {
    res.redirect('postcode');
  }
});


// Power of attorney

router.post('/sprint22b/poa', (req, res) => {
  res.redirect('/sprint22b/check')
})
;

// Postcode

router.post('/sprint22b/postcode', (req, res) => {
  res.redirect('/sprint22b/select-address')
})
;

// Check

router.post('/sprint22b/postcode', (req, res) => {
  res.redirect('/sprint22b/select-address')
})
;

// Select address to check

router.post('/sprint22b/select-address', (req, res) => {
  res.redirect('/sprint22b/move-date')
})
;

// Select address to check

router.post('/sprint22b/move-date', (req, res) => {
  res.redirect('/sprint22b/poa')
})
;


// Occupants

router.post('/sprint22b/occupants', (req, res) => {
  res.redirect('/sprint22b/check')
})
;

// Check to declaration

router.post('/sprint22b/check', (req, res) => {
  res.redirect('/sprint22b/declaration')
})
;

// Check to declaration

router.post('/sprint22b/declaration', (req, res) => {
  res.redirect('/sprint22b/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;

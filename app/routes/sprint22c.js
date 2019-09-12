const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


  router.use((req, res, next) => {
  res.locals.back = req.headers.referer
  next()
})


// Pension credit/State Pension
router.post('/sprint22c/receiving-sp', (req, res) => {
  const pension = req.body.pension || []
  if (pension.includes('pc')) {
    res.redirect('/sprint22c/residency-type-pc')
  }
  else if (pension.includes('sp')) {
    res.redirect('/sprint22c/residency-type');
  } else {
    res.redirect('/sprint22c/deferral')
  }
})


  // Date of birth

  router.post('/sprint22c/date-of-birth', (req, res) => {
    res.redirect('/sprint22c/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/sprint22c/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('benefits');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/sprint22c/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('receiving-sp');
    } else {
      res.redirect('overseas');
    }
  });


  // Benefits

router.post('/sprint22c/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});

// Query

router.post('/sprint22c/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/sprint22a/find');
}
});



  // Residency type SP

  router.post('/sprint22c/residency-type', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('who');
    }
  });

  // Residency type PC

  router.post('/sprint22c/residency-type-pc', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital-pc');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('pension-credit');
    }
  });


  // Hospital

  router.post('/sprint22c/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/sprint22c/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });


  // Care or nursing home

    router.post('/sprint22c/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('pension-credit');
      } else {
        res.redirect('care-home-over-13');
      }
    });

    // Who (Living with)

      router.post('/sprint22c/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Living with (age)

        router.post('/sprint22c/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('live-with-carehome');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to overpayment find

      router.post('/sprint22c/shared-payment', (req, res) => {
        res.redirect('/sprint22c/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/sprint22c/find-1', (req, res) => {
        res.redirect('/sprint22c/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/sprint22c/find-result-1', (req, res) => {
        res.redirect('/sprint22c/security-1')
      })
      ;

      router.post('/sprint22c/security-1', (req, res) => {
        res.redirect('/sprint22c/address-check-1')
      })
      ;

      router.post('/sprint22c/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/sprint22c/poa-1', (req, res) => {
        res.redirect('/sprint22c/check-1')
      })
      ;

      router.post('/sprint22c/check-1', (req, res) => {
        res.redirect('/sprint22c/declaration')
      })
      ;

      // Full payment

      router.post('/sprint22c/full-payment', (req, res) => {
        res.redirect('/sprint22c/find')
      })
      ;

      // Find a person

      router.post('/sprint22c/find', (req, res) => {
        res.redirect('/sprint22c/find-result')
      })
      ;

      // Found person to security

      router.post('/sprint22c/find-result', (req, res) => {
        res.redirect('/sprint22c/security')
      })
      ;

      // Found person to security

      router.post('/sprint22c/security', (req, res) => {
        res.redirect('/sprint22c/address-check')
      })
      ;


// Who (Care home during Q week)

router.post('/sprint22c/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

router.post('/sprint22c/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Current address

router.post('/sprint22c/address-check', function(req, res) {
  if ( req.body['address-match'] === 'yes' ) {
    res.redirect('poa');
  } else {
    res.redirect('postcode');
  }
});


// Power of attorney

router.post('/sprint22c/poa', (req, res) => {
  res.redirect('/sprint22c/check')
})
;

// Postcode

router.post('/sprint22c/postcode', (req, res) => {
  res.redirect('/sprint22c/select-address')
})
;

// Check

router.post('/sprint22c/postcode', (req, res) => {
  res.redirect('/sprint22c/select-address')
})
;

// Select address to move date

router.post('/sprint22c/select-address', (req, res) => {
  res.redirect('/sprint22c/move-date')
})
;

// Move date to power of attorney

router.post('/sprint22c/move-date', (req, res) => {
  res.redirect('/sprint22c/poa')
})
;


// Occupants

router.post('/sprint22c/occupants', (req, res) => {
  res.redirect('/sprint22c/check')
})
;

// Check to declaration

router.post('/sprint22c/check', (req, res) => {
  res.redirect('/sprint22c/declaration')
})
;

// Check to declaration

router.post('/sprint22c/declaration', (req, res) => {
  res.redirect('/sprint22c/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;

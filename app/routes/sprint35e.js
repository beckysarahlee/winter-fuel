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

  // Date of birth

  router.post('/sprint35e/date-of-birth', (req, res) => {
    res.redirect('/sprint35e/residency')
  })
  ;

  // Claimed Winter Fuel Payment

  router.post('/sprint35e/claimed', function(req, res) {
    if ( req.body['claimed'] === 'yes' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('deferral');
    }
  });

  // Living

  router.post('/sprint35e/residency', function(req, res) {
    if ( req.body['living'] === 'united-kingdom' ) {
      res.redirect('residency-type');
    } else {
      res.redirect('overseas');
    }
  });

  // Benefits SP or PC?

  router.post('/sprint35e/receiving-sp', function(req, res) {
    if ( req.body['benefit'] === 'sp' ) {
      res.redirect('residency-type');
    } else if ( req.body['benefit'] === 'pc' ) {
      res.redirect('residency-type-pc');
    } else if ( req.body['benefit'] === 'both' ) {
      res.redirect('residency-type-pc');
    } else if ( req.body['benefit'] === 'none' ) {
      res.redirect('deferral');
    }
  });



  // Benefits

router.post('/sprint35e/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('receiving-benefits');
  } else {
    res.redirect('residency-type');
  }
});

// Query

router.post('/sprint35e/query', function(req, res) {
if ( req.body['query'] === 'eligibility' ) {
  res.redirect('date-of-birth');
} else {
  res.redirect('/sprint29b/find');
}
});



  // Residency type SP

  router.post('/sprint35e/residency-type', function(req, res) {
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

  // Residency type PC

  router.post('/sprint35e/residency-type-pc', function(req, res) {
    if ( req.body['where-were-you-living'] === 'hospital' ) {
      res.redirect('hospital-pc');
    } else if ( req.body['where-were-you-living'] === 'carehome' ) {
      res.redirect('care-home-pc');
    } else if ( req.body['where-were-you-living'] === 'no-abode' ) {
      res.redirect('no-abode');
    } else if ( req.body['where-were-you-living'] === 'prison' ) {
      res.redirect('prison');
    } else {
      res.redirect('pension-credit');
    }
  });


  // Hospital

  router.post('/sprint35e/hospital', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('who');
    } else {
      res.redirect('hospital-over-year');
    }
  });

  // Hospital PC

  router.post('/sprint35e/hospital-pc', function(req, res) {
    if ( req.body['hospital-admission'] === 'yes' ) {
      res.redirect('pension-credit');
    } else {
      res.redirect('hospital-over-year');
    }
  });

    // Care or nursing home 13 weeks

    router.post('/sprint35e/care-home', function(req, res) {
      if ( req.body['care-home-admission'] === 'yes' ) {
        res.redirect('care-home-full');
      } else {
        res.redirect('care-home-shared');
      }
    });


    // Care or nursing home PC 13 weeks

      router.post('/sprint35e/care-home-pc', function(req, res) {
        if ( req.body['care-home-admission'] === 'yes' ) {
          res.redirect('who-pc');
        } else {
          res.redirect('care-home-over-pc');
        }
      });

    // Who (Living with)

      router.post('/sprint35e/who', function(req, res) {
        if ( req.body['who-do-you-live-with'] === 'yes' ) {
          res.redirect('living-with');
        } else {
          res.redirect('full-payment');
        }
      });

      // Who (Living with)

        router.post('/sprint35e/who-pc', function(req, res) {
          if ( req.body['who-do-you-live-with'] === 'yes' ) {
            res.redirect('shared-payment-pc');
          } else {
            res.redirect('receiving-benefits');
          }
        });


      // Living with (age)

        router.post('/sprint35e/living-with', function(req, res) {
          if ( req.body['live-with-age'] === 'yes' ) {
            res.redirect('shared-payment');
          } else {
            res.redirect('full-payment');
          }
        });

      // Shared payment to overpayment find

      router.post('/sprint35e/shared-payment', (req, res) => {
        res.redirect('/sprint35e/find-1')
      })
      ;

      // Shared payment to overpayment find

      router.post('/sprint35e/find-1', (req, res) => {
        res.redirect('/sprint35e/find-result-1')
      })
      ;

      // Overpayment branch

      router.post('/sprint35e/find-result-1', (req, res) => {
        res.redirect('/sprint35e/security-1')
      })
      ;

      router.post('/sprint35e/security-1', (req, res) => {
        res.redirect('/sprint35e/postcode')
      })
      ;

      router.post('/sprint35e/address-check-1', function(req, res) {
        if ( req.body['address-match'] === 'yes' ) {
          res.redirect('poa-1');
        } else {
          res.redirect('postcode-1');
        }
      });

      router.post('/sprint35e/poa-1', (req, res) => {
        res.redirect('/sprint35e/check-1')
      })
      ;

      router.post('/sprint35e/check-1', (req, res) => {
        res.redirect('/sprint35e/declaration')
      })
      ;

      // Full payment

      router.post('/sprint35e/full-payment', (req, res) => {
        res.redirect('/sprint35e/find')
      })
      ;

      // Find a person

      router.post('/sprint35e/find', (req, res) => {
        res.redirect('/sprint35e/find-result')
      })
      ;

      // Found person to security

      router.post('/sprint35e/find-result', (req, res) => {
        res.redirect('/sprint35e/security')
      })
      ;

      // Found person to security

      router.post('/sprint35e/security', (req, res) => {
        res.redirect('/sprint35e/postcode')
      })
      ;


// Who (Care home during Q week)

router.post('/sprint35e/live-with-carehome', function(req, res) {
  if ( req.body['live-with-carehome'] === 'yes' ) {
    res.redirect('live-with-carehome-13weeks');
  } else {
    res.redirect('shared-payment');
  }
});

// Care home during Q week over 13 weeks?

router.post('/sprint35e/live-with-carehome-13weeks', function(req, res) {
  if ( req.body['carehome-13weeks'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('live-with-anyone-else');
  }
});



router.post('/sprint35e/live-with-anyone-else', function(req, res) {
  if ( req.body['carehome-other'] === 'yes' ) {
    res.redirect('shared-payment');
  } else {
    res.redirect('full-payment');
  }
});

// Power of attorney

router.post('/sprint35e/poa', (req, res) => {
  res.redirect('/sprint35e/check')
})
;

// Postcode underpayment

router.post('/sprint35e/postcode', (req, res) => {
  res.redirect('/sprint35e/select-address')
})
;

// Postcode overpayment

router.post('/sprint35e/postcode-1', (req, res) => {
  res.redirect('/sprint35e/select-address-1')
})
;

// Check

router.post('/sprint35e/postcode', (req, res) => {
  res.redirect('/sprint35e/select-address')
})
;

// Select address to move date

router.post('/sprint35e/select-address', (req, res) => {
  res.redirect('/sprint35e/move-date')
})
;

// Select address to move date

router.post('/sprint35e/select-address-1', (req, res) => {
  res.redirect('/sprint35e/move-date-1')
})
;

// Move date to power of attorney

router.post('/sprint35e/move-date', (req, res) => {
  res.redirect('/sprint35e/poa')
})
;

// Move date to power of attorney 2

router.post('/sprint35e/move-date-1', (req, res) => {
  res.redirect('/sprint35e/poa-1')
})
;


// Occupants

router.post('/sprint35e/occupants', (req, res) => {
  res.redirect('/sprint35e/check')
})
;

// Check to declaration

router.post('/sprint35e/check', function(req, res) {
  if ( req.body['change'] === 'yes' ) {
    res.redirect('declaration');
  } else {
    res.redirect('no-change');
  }
});


// Declaration to confirmation

router.post('/sprint35e/declaration', (req, res) => {
  res.redirect('/sprint35e/confirmation')
})
;




  //    } else if (something === something) {


  module.exports = router;

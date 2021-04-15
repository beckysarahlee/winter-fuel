const express = require('express');
const router = express.Router()

router.use((req, res, next) => {

    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/sprint62b/comparison-filter', function(req, res) {
  if ( req.body['filter-by'] === 'file-type' ) {
    res.redirect('comparison-filter-file');
  } else {
    res.redirect('comparison-filter-eligibility');
  }
  });
  ;

  router.post('/sprint62b/comparison-filter-eligibility', function(req, res) {
  if ( req.body['eligibility'] === 'eligible' ) {
    res.redirect('comparison-filter-eligible');
  } else {
    res.redirect('comparison-filter-ineligible');
  }
  });
  ;

  router.post('/sprint62b/comparison-filter-eligible', (req, res) => {
    res.redirect('/sprint62b/results-eligible')
  })
  ;


//
  router.post('/sprint62b/comparison-filter-ineligible', (req, res) => {
    res.redirect('/sprint62b/results-ineligible')
  })
  ;


// Scenario 1

  router.post('/sprint62b/verify-address', (req, res) => {
    res.redirect('/sprint62b/address-1')
  })
  ;

  router.post('/sprint62b/address-1', function(req, res) {
  if ( req.body['address-fix-1'] === 'Address not found' ) {
    res.redirect('/sprint62b/verify-address-manual-1');
  } else {
    res.redirect('/sprint62b/verify-address-fixed');
  }
  });
  ;

  router.post('/sprint62b/verify-address-manual-1', (req, res) => {
    res.redirect('/sprint62b/address-1b')
  })
  ;

  router.post('/sprint62b/address-1b', function(req, res) {
  if ( req.body['address-fix-1'] === 'Address not found' ) {
    res.redirect('/sprint62b/verify-address-not-fixed');
  } else {
    res.redirect('/sprint62b/verify-address-fixed');
  }
  });
  ;


  router.post('/sprint62b/return-queue', (req, res) => {
    res.redirect('/sprint62b/verify-address')
  })
  ;


// Scenario 2

    router.post('/sprint62b/verify-address-fixed', (req, res) => {
      res.redirect('/sprint62b/address-2')
    })
    ;

    router.post('/sprint62b/verify-address-not-fixed', (req, res) => {
      res.redirect('/sprint62b/address-2')
    })
    ;


    router.post('/sprint62b/address-2', function(req, res) {
    if ( req.body['address-fix-2'] === 'Address not found' ) {
      res.redirect('/sprint62b/verify-address-manual-2');
    } else {
      res.redirect('/sprint62b/verify-address-fixed-2');
    }
    });
    ;

    router.post('/sprint62b/verify-address-manual-2', (req, res) => {
      res.redirect('/sprint62b/address-2b')
    })
    ;

    router.post('/sprint62b/address-2b', function(req, res) {
    if ( req.body['address-fix-2'] === 'Address not found' ) {
      res.redirect('/sprint62b/verify-address-not-fixed-2');
    } else {
      res.redirect('/sprint62b/verify-address-fixed-2');
    }
    });
    ;


// Scenario 3

router.post('/sprint62b/verify-address-fixed-2', (req, res) => {
  res.redirect('/sprint62b/address-3')
})
;

router.post('/sprint62b/verify-address-not-fixed-2', (req, res) => {
  res.redirect('/sprint62b/address-3')
})
;


router.post('/sprint62b/address-3', function(req, res) {
if ( req.body['address-fix-3'] === 'Address not found' ) {
  res.redirect('/sprint62b/verify-address-manual-3');
} else {
  res.redirect('/sprint62b/verify-address-fixed-3');
}
});
;

router.post('/sprint62b/verify-address-manual-3', (req, res) => {
  res.redirect('/sprint62b/address-3b')
})
;

router.post('/sprint62b/address-3b', function(req, res) {
if ( req.body['address-fix-3'] === 'Address not found' ) {
  res.redirect('/sprint62b/verify-address-not-fixed-3');
} else {
  res.redirect('/sprint62b/verify-address-fixed-3');
}
});
;

// Scenario 4
    router.post('/sprint62b/verify-address-fixed-3', (req, res) => {
      res.redirect('/sprint62b/address-4')
    })
    ;

    router.post('/sprint62b/verify-address-not-fixed-3', (req, res) => {
      res.redirect('/sprint62b/address-4')
    })
    ;

    router.post('/sprint62b/address-4', function(req, res) {
    if ( req.body['address-fix-4'] === 'Address not found' ) {
      res.redirect('/sprint62b/verify-address-manual-4');
    } else {
      res.redirect('/sprint62b/verify-address-fixed-4');
    }
    });
    ;

    router.post('/sprint62b/verify-address-manual-4', (req, res) => {
      res.redirect('/sprint62b/address-4b')
    })
    ;

    router.post('/sprint62b/address-4b', function(req, res) {
    if ( req.body['address-fix-4'] === 'Address not found' ) {
      res.redirect('/sprint62b/verify-address-not-fixed-4');
    } else {
      res.redirect('/sprint62b/verify-address-fixed-4');
    }
    });
    ;

  // See cases, eligible or ineligible

  router.post('/sprint62b/comparison-filter-eligibility', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/sprint62b/comparison-filter-eligible')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/sprint62b/comparison-filter-ineligible');
    } else {
      res.redirect('/sprint23/deferral')
    }
  })

  // GySP filter

  router.post('/sprint62b/gysp-filter', (req, res) => {
    const eligibility = req.body.eligibility|| []
    if (eligibility.includes('eligible')) {
      res.redirect('/sprint62b/gysp-eligible-filter')
    }
    else if (pension.includes('ineligible')) {
      res.redirect('/sprint62b/gysp-ineligible-filter');
    } else {
      res.redirect('/sprint23/deferral')
    }
  })


  // GySP filter to results
  router.post('/sprint62b/gysp-eligible-filter', (req, res) => {
    res.redirect('/sprint62b/gysp-results')
  })
  ;

  // Find case to find result
  router.post('/sprint62b/find-case', (req, res) => {
    res.redirect('/sprint62b/overview')
  })
  ;



    // Payments to stop payments
    router.post('/sprint62b/payments', (req, res) => {
      res.redirect('/sprint62b/stop-payments')
    })
    ;

// Letters to stop letters
router.post('/sprint62b/letters', (req, res) => {
  res.redirect('/sprint62b/stop-letters')
})
;


  module.exports = router;


const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
<<<<<<< HEAD
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})




router.post('/sprint62b/update-details-options', function(req, res) {
  if (req.session.data["update-details-options"] === "update-details") {
    res.redirect('update-details');
  } else if (req.session.data["update-details-options"] === "dead") {
    res.redirect('date-of-death');
  }
    else if (req.session.data["update-details-options"] === "opt-out") {
  res.redirect('opt-out');
  }
    else if (req.session.data["update-details-options"] === "immigration") {
  res.redirect('immigration');
}
});

// Address -------------------------------------------------------------------
router.post('/sprint62b/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else if (req.body['postcode'] === "DH3 4AE") {
    res.redirect('/sprint52c/address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/sprint62b/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/sprint62b/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/sprint62b/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/sprint62b/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/sprint62b/move-date', (req, res) => {
  res.redirect('update-details')
});

// Living with anyone at address change
router.post('/sprint62b/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

// Living with age back to contact
router.post('/sprint62b/living-with-age', (req, res) => {
  res.redirect('/sprint62b/living-with-date')
});

router.post('/sprint62b/living-with-date', (req, res) => {
  res.redirect('/sprint62b/update-details')
});


// Living with anyone at address change
router.post('/sprint62b/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else who gets Winter Fuel Payment') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/sprint62b/homephone', (req, res) => {
  res.redirect('/sprint62b/update-details')
});

// Home phone number removal
router.post('/sprint62b/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('update-details');
  } else {
    res.redirect('homephone');
  }
});

// Power of attourney
router.post('/sprint62b/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('update-details');
  }
});

router.post('/sprint62b/poa-people', (req, res) => {
  res.redirect('update-details')
});

router.post('/sprint62b/update-details', (req, res) => {
  res.redirect('declaration')
});

router.post('/sprint62b/declaration', (req, res) => {
  res.redirect('update-details-changed')
});

module.exports = router;
=======
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
>>>>>>> 0a59daadba5ce84b26a90743e2dda7260c774d92

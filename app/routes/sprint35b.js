const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  // Teleclaim or postal claim
  router.post('/sprint35b/type-of-application', (req, res) => {
    res.redirect('/sprint35b/find')
  })
  ;

  // DOB to phone/postal journey

  router.post('/sprint35b/date-of-birth', function(req, res) {
      if ( req.session.data['phone-post'] === 'phone' ) {
        res.redirect('benefits');
      } else if (req.body["dob-year"] === "1960") {
        res.redirect('post-too-young');
      } else {
        res.redirect('find');
      }
  });

// Benefits to find someone
router.post('/sprint35b/benefits', function(req, res) {
  if ( req.body['benefits'] === 'yes' ) {
    res.redirect('no-claim');
  } else {
    res.redirect('find');
  }
});

// Find someone to confirm full name
  router.post('/sprint35b/find', (req, res) => {
    res.redirect('/sprint35b/find-1')
  })
  ;

// Confirm full name to security questions
  router.post('/sprint35b/find-1', function(req, res) {
      if ( req.session.data['phone-post'] === 'post' ) {
        res.redirect('address');
      } else {
        res.redirect('security');
      }
  });


// Security questions to house number and postcode
  router.post('/sprint35b/security', function(req, res) {
      if ( req.session.data['nino'] === 'PX 12 43 56' ) {
        res.redirect('overview');
      } else {
        res.redirect('address');
      }
  });

// Address look up to confirm the first line of the address
  router.post('/sprint35b/address-for-letters-1', (req, res) => {
    res.redirect('/sprint35b/contact')
  })
  ;

  // No permanent address to address for letters
  router.post('/sprint35b/no-permanent-address', function(req, res) {
    if ( req.body['address-for-letters'] === 'yes' ) {
      res.redirect('/sprint35b/address-for-letters');
    } else {
      res.redirect('no-address-for-letters');
    }
  });

  // Address for letters to address for letters results
    router.post('/sprint35b/address-for-letters', (req, res) => {
      res.redirect('/sprint35b/address-for-letters-1')
    })
    ;

// Confirm first line of address to move date
  router.post('/sprint35b/address-1', (req, res) => {
    res.redirect('/sprint35b/move-date')
  })
  ;

// Move date to living with
  router.post('/sprint35b/move-date', (req, res) => {
    res.redirect('/sprint35b/living-with')
  })
  ;


  //
  router.post('/sprint35b/living-with', function(req, res) {
    if ( req.body['living-with'] === 'yes' ) {
      res.redirect('living-with-age');
    } else {
      res.redirect('contact');
    }
  });

  // Confirm first line of address to move date
    router.post('/sprint35b/living-with-age', (req, res) => {
      res.redirect('/sprint35b/contact')
    })
    ;


    // Care home date to contact details
      router.post('/sprint35b/carehome', (req, res) => {
        res.redirect('/sprint35b/contact')
      })
      ;


    // Prison date to contact details
      router.post('/sprint35b/prison', (req, res) => {
        res.redirect('/sprint35b/contact')
      })
      ;


      // Hospital date to contact details
        router.post('/sprint35b/hospital', (req, res) => {
          res.redirect('/sprint35b/contact')
        })
        ;

// Phone number & email to contact requirements
  router.post('/sprint35b/contact', (req, res) => {
    res.redirect('/sprint35b/contact-requirements')
  })
  ;

  // Contact requirements to bank account details
    router.post('/sprint35b/contact-requirements', (req, res) => {
      res.redirect('/sprint35b/bank-details')
    })
    ;

  // Bank details to declaration
    router.post('/sprint35b/bank-details', (req, res) => {
      res.redirect('/sprint35b/declaration')
    })
    ;

  // Declaration to completion
  router.post('/sprint35b/declaration', (req, res) => {
    res.redirect('/sprint35b/complete-pre')
  })
  ;


  module.exports = router;

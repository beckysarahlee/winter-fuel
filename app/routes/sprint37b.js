const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/sprint37b/query', function(req, res) {
  if (req.body['query'] === 'eligibility') {
    res.redirect('date-of-birth');
  } else {
    res.redirect('/sprint37b/find');
  }
});


// FIND SOMEONE AND SECURITY -------------------------------------------------


// Find someone to find result
router.post('/sprint37b/find', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/sprint37b/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/sprint37b/find-2');
  } else {
    res.redirect('/sprint37b/find-1');
  }
});


// Find result to security
router.post('/sprint37b/find-1', (req, res) => {
  res.redirect('/sprint37b/security')
});
// Find result to security
router.post('/sprint37b/find-2', (req, res) => {
  res.redirect('/sprint37b/security-2')
});


router.post('/sprint37b/security', (req, res) => {
  res.redirect('/sprint37b/overview')
});

router.post('/sprint37b/security-2', (req, res) => {
  res.redirect('/sprint37b/overview-2')
});

// THIS IS WHAT YOU NEED TO CHANGE BACK!!!!!! ---------------------------
//-------------------------------------------------------------------------


//
router.post('/sprint37b/contact-preferences', (req, res) => {
  res.redirect('/sprint37b/overview')
});

// CONTACT CHANGES -----------------------------------------------------------

// Correspondence address to address found
router.post('/sprint37b/correspondence-address', (req, res) => {
  res.redirect('/sprint37b/correspondence-address-1')
});

// Correspondence address to address found
router.post('/sprint37b/correspondence-address-1', function(req, res) {
  if (req.body['correspondence-address-change'] === 'no address found') {
    res.redirect('correspondence-address-search');
  } else {
    res.redirect('contact');
  }
});

router.post('/sprint37b/correspondence-address-search', (req, res) => {
  res.redirect('/sprint37b/correspondence-address-search-result')
});

router.post('/sprint37b/correspondence-address-search-result', (req, res) => {
  res.redirect('/sprint37b/contact')
});

// Home phone number change back to contact
router.post('/sprint37b/homephone', (req, res) => {
  res.redirect('/sprint37b/contact')
});

// Home phone number removal
router.post('/sprint37b/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('homephone');
  }
});

// Work phone number change back to contact
router.post('/sprint37b/workphone', (req, res) => {
  res.redirect('/sprint37b/contact')
});

// Work phone number removal
router.post('/sprint37b/workphone-remove', function(req, res) {
  if (req.body['workphone-remove'] === 'Yes') {
    res.redirect('contact');
  } else {
    res.redirect('workphone');
  }
});

// Mobile phone number change back to contact
router.post('/sprint37b/mobilephone', (req, res) => {
  res.redirect('/sprint37b/contact')
});

// Mobile phone number removal
router.post('/sprint37b/mobilephone-remove', function(req, res) {
  if (req.body['mobilephone-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('mobilephone');
  }
});

// Email address change back to contact
router.post('/sprint37b/email', (req, res) => {
  res.redirect('/sprint37b/contact')
});

// Email removal
router.post('/sprint37b/email-remove', function(req, res) {
  if (req.body['email-remove'] === 'yes') {
    res.redirect('contact');
  } else {
    res.redirect('email');
  }
});

// Contact preference change back to contact
router.post('/sprint37b/contact-preferences', (req, res) => {
  res.redirect('/sprint37b/contact')
});

// Address -------------------------------------------------------------------
router.post('/sprint37b/address', function(req, res) {
  if (req.body['postcode'] === 'NE2 1YL') {
    res.redirect('address-no-result');
  } else if (req.body['postcode'] === "NE65 0AP") {
    res.redirect('address-carehome');
  } else {
    res.redirect('address-1');
  }
});

// Address select, yes or search address
router.post('/sprint37b/address-1', function(req, res) {
  if (req.body['address-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('address-search');
  }
});


// Care home address select, yes or search address
router.post('/sprint37b/address-carehome', function(req, res) {
  if (req.body['address-change'] === 'Dolphin View Care Home, Harbour Road, Amble, NE65 0AP') {
    res.redirect('carehome-move-date');
  } else {
    res.redirect('address-search');
  }
});

// Address search
router.post('/sprint37b/address-search', function(req, res) {
  if (req.body['address-search-postcode'] === 'NE2 1YL') {
    res.redirect('address-search-no-result');
  } else {
    res.redirect('address-search-result');
  }
});

// Address search select, yes or search address
router.post('/sprint37b/address-search-result', function(req, res) {
  if (req.body['address-search-change'] === '27 Kent Street, Amble, NE65 0LZ') {
    res.redirect('move-date');
  } else {
    res.redirect('TBC');
  }
});


// Move date
router.post('/sprint37b/move-date', (req, res) => {
  res.redirect('/sprint37b/living-with')
});

// Care home move date
router.post('/sprint37b/carehome-move-date', (req, res) => {
  res.redirect('/sprint37b/declaration')
});


router.post('/sprint37b/homephone-address', function(req, res) {
    if (req.body["homephone-address"] === "Yes") {
      res.redirect('homephone-address-change');
    }
    else {
      res.redirect('poa');
    }
});


router.post('/sprint37b/homephone-address-change', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('living-with-q-week');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('poa');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('poa');
    } else {
      res.redirect('poa');
    }
});



// Living with anyone at address change
router.post('/sprint37b/living-with', function(req, res) {
  if (req.body['living-with'] === 'Lives with someone else of State Pension age') {
    res.redirect('living-with-age');
  } else {
    res.redirect('living-with-date');
  }
});

router.post('/sprint37b/living-with-date', (req, res) => {
  res.redirect('/sprint37b/homephone-address')
});


// Living with anyone at address change
router.post('/sprint37b/living-with-q-week', function(req, res) {
  if (req.body['living-with-q-week'] === 'Lives with someone else of State Pension age') {
    res.redirect('living-with-age-q-week');
  } else {
    res.redirect('living-with-date');
  }
});

// Power of attourney
router.post('/sprint37b/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});

router.post('/sprint37b/poa-people', (req, res) => {
  res.redirect('/sprint37b/declaration')
});

// Declaration

router.post('/sprint37b/declaration', function(req, res) {
    if (req.session.data["movemonth"] === "08") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "8") {
      res.redirect('make-payment');
    } else if (req.session.data["movemonth"] === "07") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "7") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "10") {
      res.redirect('over-payment');
    } else if (req.session.data["movemonth"] === "05") {
      res.redirect('over-payment-2');
    } else if (req.session.data["movemonth"] === "5") {
      res.redirect('over-payment-2');
    } else {
      res.redirect('overview-changed');
    }
});


// Overpayment recoverable?
router.post('/sprint37b/over-payment', (req, res) => {
  res.redirect('/sprint37b/overview-changed')
})
;

// Overpayment recoverable?
router.post('/sprint37b/over-payment-2', (req, res) => {
  res.redirect('/sprint37b/overview-changed')
})
;

// Check to payments
router.post('/sprint37b/recoverable-payment', (req, res) => {
  res.redirect('/sprint37b/overview-recoverable')
});

// Check to payments
router.post('/sprint37b/check', (req, res) => {
  res.redirect('/sprint37b/make-payment')
});

// Make payment to contact
router.post('/sprint37b/make-payment', (req, res) => {
  res.redirect('/sprint37b/overview-topup-1')
});



// Living with age back to contact
router.post('/sprint37b/living-with-age', (req, res) => {
  res.redirect('/sprint37b/living-with-date')
});

// Living with age back to contact
router.post('/sprint37b/living-with-age-q-week', (req, res) => {
  res.redirect('/sprint37b/poa')
});




// PAYMENT CHANGES -----------------------------------------------------------

// Bank details change to bank confirm
router.post('/sprint37b/bankdetails', (req, res) => {
  res.redirect('/sprint37b/confirm-bank')
});

// Bank confirm to payment
router.post('/sprint37b/confirm-bank', function(req, res) {
  if (req.body['bank-name'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('bankdetails');
  }
});

// Reissue payment to payment with confirmation and updated
router.post('/sprint37b/reissue-payment', (req, res) => {
  res.redirect('/sprint37b/payment-confirmation')
});

// Starting payments
router.post('/sprint37b/start-payments', function(req, res) {
  if (req.body['start-payments'] === 'Yes') {
    res.redirect('payment');
  } else {
    res.redirect('payment-stopped');
  }
});

module.exports = router;

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

// Address to move date

router.post('/sprint45b/address', (req, res) => {
  res.redirect('/sprint45b/move-date')
})
;

// Move date to living with

router.post('/sprint45b/move-date', (req, res) => {
  res.redirect('/sprint45b/living-with')
})
;


// Living with to occupancy date change, or to home phone

router.post('/sprint45b/living-with', function(req, res) {
  if (req.body["living-with"] === "no" && req.session.data["move-month"] === "12") {
    res.redirect('living-with-date');
  }
  else {
    res.redirect('homephone-address');
  }
});

// Occupancy change date to home phone

router.post('/sprint45b/living-with-date', (req, res) => {
  res.redirect('homephone-address')
})
;

// Change home phone

router.post('/sprint45b/homephone-address', function(req, res) {
  if (req.body["homephone-address"] === "Yes") {
    res.redirect('homephone-address-change');
  }
  else {
    res.redirect('declaration');
  }
});

// New home phone to declaration

router.post('/sprint45b/homephone-address-change', (req, res) => {
  res.redirect('/sprint45b/declaration')
})
;

// Home phone number removal
router.post('/sprint45b/homephone-remove', function(req, res) {
  if (req.body['homephone-remove'] === 'Yes') {
    res.redirect('declaration');
  } else {
    res.redirect('homephone-address');
  }
});

// Declaration to confirmation

router.post('/sprint45b/declaration', (req, res) => {
  res.redirect('/sprint45b/overview-changed')
})
;

// Bank type to bank details
router.post('/sprint45b/bank-type', function(req, res) {
  if (req.body['bank-account-type'] === 'uk') {
    res.redirect('bank-details-uk');
  } else {
    res.redirect('bank-details-ig');
  }
});

// Bank details to payment
router.post('/sprint45b/bank-details-uk', (req, res) => {
  res.redirect('/sprint45b/payment-changed')
})
;

// Bank details to payment
router.post('/sprint45b/bank-details-ig', (req, res) => {
  res.redirect('/sprint45b/payment-changed')
})
;



module.exports = router;

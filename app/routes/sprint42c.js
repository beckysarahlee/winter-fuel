const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Teleclaim or postal claim to find
router.post('/sprint42c/application-type', (req, res) => {
  res.redirect('/sprint42c/find')
});

// Find to name
router.post('/sprint42c/find', function(req, res) {
  if (req.session.data["nino"] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('confirm-name');
  }
});


// Confirm name to DOB/international record/address
router.post('/sprint42c/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else if (req.session.data['nino'] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('address');
  }
});

// Date of birth to address/too young
router.post('/sprint42c/date-of-birth', function(req, res) {
  if (req.session.data["dob-year"] === "1965") {
    res.redirect('too-young-post');
  } else if (req.session.data['dob-year'] === "1964") {
    res.redirect('too-young-phone');
  } else {
    res.redirect('address');
  }
});

// Address to move date
router.post('/sprint42c/address', (req, res) => {
  res.redirect('/sprint42c/move-date')
});

// Address - If living with someone go to living with details. If Move date is after Q week, ask about prev add.
router.post('/sprint42c/move-date', (req, res) => {
  res.redirect('/sprint42c/living-with')
});


// Living with details to contact or q week address
router.post('/sprint42c/living-with', function(req, res) {
  if (req.session.data["living-with"] === "yes") {
    res.redirect('living-with-age');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});

// Living with details to contact or q week address
router.post('/sprint42c/living-with-age', function(req, res) {
  if (req.session.data["living-with-spa"] === "yes") {
    res.redirect('living-with-about');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});


router.post('/sprint42c/living-with-about', function(req, res) {
  if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});


// Address Q week to contact details
router.post('/sprint42c/address-q-week', (req, res) => {
  res.redirect('/sprint42c/contact')
});


// Contact details to bank details
router.post('/sprint42c/contact', (req, res) => {
  res.redirect('/sprint42c/bank-details')
});

// Bank details to info about living in UK
router.post('/sprint42c/bank-details', (req, res) => {
  res.redirect('/sprint42c/about-uk')
});


// About UK to living in the UK
router.post('/sprint42c/about-uk', (req, res) => {
  res.redirect('/sprint42c/living-in-uk')
});


// Info about UK to info about living outside the UK
router.post('/sprint42c/living-in-uk', function(req, res) {
  if (req.session.data["lived-in-uk-another"] === "yes") {
    res.redirect('living-in-uk');
  } else {
    res.redirect('living-outside-uk');
  }
});

// Info about living outside the UK to UK family details
router.post('/sprint42c/living-outside-uk', function(req, res) {
  if (req.session.data["outside-uk"] === "yes") {
    res.redirect('living-outside-about');
  } else {
    res.redirect('uk-family');
  }
});

// living outside the uk, add more countries or moce to uk family
router.post('/sprint42c/living-outside-about', function(req, res) {
  if (req.session.data["living-outside-about"] === "yes") {
    res.redirect('living-outside-about');
  } else {
    res.redirect('uk-family');
  }
});



// UK family to other nationalities
router.post('/sprint42c/uk-family', function(req, res) {
  if (req.session.data["uk-family"] === "yes") {
    res.redirect('uk-family-about');
  } else {
    res.redirect('other-nationalities');
  }
});

router.post('/sprint42c/uk-family-about', (req, res) => {
  res.redirect('/sprint42c/other-nationalities')
});


// Other nationalities to more info work dates
router.post('/sprint42c/other-nationalities', function(req, res) {
  if (req.session.data['other-nationalities'] === "yes") {
    res.redirect('other-nationalities-about');
  } else if (req.session.data["no-nationality"] === "parter-eea") {
  res.redirect('eea-partner');
  } else {
    res.redirect('work-outside-uk');
  }
});

// Other nationalities about to add another or to work info
router.post('/sprint42c/other-nationalities-about', function(req, res) {
  if (req.session.data["more-nationalities"] === "yes") {
    res.redirect('other-nationalities-about');
  } else {
    res.redirect('work-outside-uk');
  }
});


// EEA partner details to w
router.post('/sprint42c/eea-partner', (req, res) => {
  res.redirect('/sprint42c/work-outside-uk')
});



// Work periods to information about links to UK or info about working in UK
router.post('/sprint42c/work-outside-uk', function(req, res) {
  if (req.session.data["international-work"] === "yes") {
    res.redirect('work-outside-uk-about');
  } else {
    res.redirect('work-in-uk');
  }
});

// Working outside the UK details to working in the UK
router.post('/sprint42c/work-outside-uk-about', (req, res) => {
  res.redirect('/sprint42c/work-in-uk')
});

// Working in the UK to info about working in UK to UK info
router.post('/sprint42c/work-in-uk', function(req, res) {
  if (req.session.data["working-in-uk"] === "yes") {
    res.redirect('work-in-uk-about');
  } else {
    res.redirect('uk-business');
  }
});

// Working in the UK info to UK info
router.post('/sprint42c/work-in-uk-about', (req, res) => {
  res.redirect('/sprint42c/uk-business')
});


// UK business? if yes business info, if no UK property
router.post('/sprint42c/uk-business', function(req, res) {
  if (req.session.data["business"] === "yes") {
    res.redirect('uk-business-about');
  } else {
    res.redirect('uk-property');
  }
});

// UK property info input to work
router.post('/sprint42c/uk-business-about', (req, res) => {
  res.redirect('/sprint42c/uk-property')
});

// UK property? if yes property info, if no q week
router.post('/sprint42c/uk-property', function(req, res) {
  if (req.session.data["property"] === "yes") {
    res.redirect('uk-property-about');
  } else {
    res.redirect('q-week');
  }
});

// UK property info input to work
router.post('/sprint42c/uk-property-about', (req, res) => {
  res.redirect('/sprint42c/q-week')
});



// Q week questions to reasons for returning to the UK
router.post('/sprint42c/q-week', (req, res) => {
  res.redirect('/sprint42c/returning-to-uk')
});

// Returning to the UK to more info or benefits questions
router.post('/sprint42c/returning-to-uk', function(req, res) {
  if (req.session.data["return"] === "yes") {
    res.redirect('returning-to-uk-about');
  } else {
    res.redirect('benefits');
  }
});

// info about visits to the uk to benefits
router.post('/sprint42c/returning-to-uk-About', function(req, res) {
  if (req.session.data["returned-again"] === "yes") {
    res.redirect('returning-to-uk-about');
  } else {
    res.redirect('benefits');
  }
});

// Benefit and pension information to any other links
router.post('/sprint42c/benefits', function(req, res) {
  if (req.session.data["benefits-pensions"] === "yes") {
    res.redirect('benefits-outside');
  } else {
    res.redirect('any-other-links');
  }
});


// benefits outside the UK, more show screen again or no continue to any other links
router.post('/sprint42c/benefits-outside', function(req, res) {
  if (req.session.data["benefits-outside-add"] === "yes") {
    res.redirect('benefits-outside');
  } else {
    res.redirect('any-other-links');
  }
});

// Any other links to declaration
router.post('/sprint42c/any-other-links', (req, res) => {
  res.redirect('/sprint42c/declaration')
});

// Declaration to THE END!
router.post('/sprint42c/declaration', (req, res) => {
  res.redirect('/sprint42c/complete')
});




module.exports = router;

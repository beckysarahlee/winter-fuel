const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Teleclaim or postal claim to find
router.post('/sprint37-international/application-type', (req, res) => {
  res.redirect('/sprint37-international/find')
});

// Find to name
router.post('/sprint37-international/find', (req, res) => {
  res.redirect('/sprint37-international/confirm-name')
});

// Confirm name to address
router.post('/sprint37-international/find', (req, res) => {
  res.redirect('/sprint37-international/confirm-name')
});

// Confirm name to DOB/international record/address
router.post('/sprint37-international/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else if (req.session.data['nino'] === "HU 12 34 57") {
    res.redirect('date-of-birth');
  } else {
    res.redirect('address');
  }
});

// Date of birth to address/too young
router.post('/sprint37-international/date-of-birth', function(req, res) {
  if (req.session.data["birth-year"] === "1965") {
    res.redirect('too-young-post');
  } else if (req.session.data['birth-year'] === "1964") {
    res.redirect('too-young-phone');
  } else {
    res.redirect('address');
  }
});

// Address - If living with someone go to living with details. If Move date is after Q week, ask about prev add.
router.post('/sprint37-international/address', function(req, res) {
  if (req.session.data["living-with-anyone"] === "yes") {
    res.redirect('living-with');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});

// Living with details to contact or q week address
router.post('/sprint37-international/address', function(req, res) {
  if (req.session.data["living-with-anyone"] === "yes") {
    res.redirect('living-with');
  } else if (req.session.data['move-month'] === "10") {
    res.redirect('address-q-week');
  } else {
    res.redirect('contact');
  }
});







// DOB to phone/postal journey
router.post('/sprint37-international/date-of-birth', function(req, res) {
  if (req.body["dob-year"] === "1960") {
    res.redirect('post-too-young');
  } else if (req.body["dob-year"] === "1959") {
    res.redirect('phone-too-young');
  } else {
    res.redirect('address');
  }
});



// Confi
router.post('/sprint37-international/confirm-name', function(req, res) {
  if (req.session.data["nino"] === "AB 12 34 57") {
    res.redirect('international-record');
  } else {
    res.redirect('date-of-birth');
  }
});






module.exports = router;

const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
const sprint15 = require('./routes/sprint15');
const sprint15b = require('./routes/sprint15b');
const sprint17 = require('./routes/sprint17');
const sprint18 = require('./routes/sprint18');
const sprint18b = require('./routes/sprint18b');
const sprint18c = require('./routes/sprint18c');
const sprint19 = require('./routes/sprint19');
const sprint19b = require('./routes/sprint19b');
const sprint20 = require('./routes/sprint20');
const sprint20b = require('./routes/sprint20b');
const sprint20c = require('./routes/sprint20c');
const sprint21 = require('./routes/sprint21');
const sprint21b = require('./routes/sprint21b');
const sprint21c = require('./routes/sprint21c');
const sprint21d = require('./routes/sprint21d');
const sprint22a = require('./routes/sprint22a');
const sprint22 = require('./routes/sprint22');
const sprint22b = require('./routes/sprint22b');
const sprint22c = require('./routes/sprint22c');
const sprint22d = require('./routes/sprint22d');
const sprint23 = require('./routes/sprint23');
const sprint23b = require('./routes/sprint23b');
const sprint24 = require('./routes/sprint24');
const sprint24b = require('./routes/sprint24b');
const returnedpayment = require('./routes/returnedpayment');
const sprint26 = require('./routes/sprint26');
const sprint27 = require('./routes/sprint27');
const sprint27b = require('./routes/sprint27b');
const sprint27c = require('./routes/sprint27c');
const sprint28 = require('./routes/sprint28');
const sprint28b = require('./routes/sprint28b');
const sprint28c = require('./routes/sprint28c');
const sprint29b = require('./routes/sprint29b');
const sprint30a = require('./routes/sprint30a');
const sprint30b = require('./routes/sprint30b');
const sprint30c = require('./routes/sprint30c');
const sprint31a = require('./routes/sprint31a');
const sprint31b = require('./routes/sprint31b');
const sprint31c = require('./routes/sprint31c');
const sprint31d = require('./routes/sprint31d');
const sprint32a = require('./routes/sprint32a');
const sprint32b = require('./routes/sprint32b');
const sprint32c = require('./routes/sprint32c');
const sprint32d = require('./routes/sprint32d');
const sprint32e = require('./routes/sprint32e');
const sprint32f = require('./routes/sprint32f');
const sprint33a = require('./routes/sprint33a');
const sprint33b = require('./routes/sprint33b');
const sprint33c = require('./routes/sprint33c');
const sprint33d = require('./routes/sprint33d');
const sprint35 = require('./routes/sprint35');
const sprint35b = require('./routes/sprint35b');
const sprint35c = require('./routes/sprint35c');
const sprint35d = require('./routes/sprint35d');
const sprint35e = require('./routes/sprint35e');
const emergencypayments = require('./routes/emergencypayments');
const sprint37 = require('./routes/sprint37');
const sprint37b = require('./routes/sprint37b');
const sprint38 = require('./routes/sprint38');
const sprint39c = require('./routes/sprint39c');
const sprint40a = require('./routes/sprint40a');
const sprint40b = require('./routes/sprint40b');
const sprint41 = require('./routes/sprint41');
const sprint41b = require('./routes/sprint41b');
const sprint42b = require('./routes/sprint42b');
const sprint42c = require('./routes/sprint42c');
const sprint43 = require('./routes/sprint43');
const sprint43b = require('./routes/sprint43b');
const sprint45 = require('./routes/sprint45');
const sprint45b = require('./routes/sprint45b');
const sprint46 = require('./routes/sprint46');
const sprint46b = require('./routes/sprint46b');
const sprint47b = require('./routes/sprint47b');
const sprint49 = require('./routes/sprint49');
const sprint49b = require('./routes/sprint49b');
const sprint49c = require('./routes/sprint49c');
const sprint50 = require('./routes/sprint50');

//copy the router use and update the sprint version
router.use(sprint15);
router.use(sprint15b);
router.use(sprint17);
router.use(sprint18);
router.use(sprint18b);
router.use(sprint18c);
router.use(sprint19);
router.use(sprint19b);
router.use(sprint20);
router.use(sprint20b);
router.use(sprint20c);
router.use(sprint21);
router.use(sprint21b);
router.use(sprint21c);
router.use(sprint21d);
router.use(sprint22);
router.use(sprint22a);
router.use(sprint22b);
router.use(sprint22c);
router.use(sprint22d);
router.use(sprint23);
router.use(sprint23b);
router.use(sprint24);
router.use(sprint24b);
router.use(returnedpayment);
router.use(sprint26);
router.use(sprint27);
router.use(sprint27b);
router.use(sprint27c);
router.use(sprint28);
router.use(sprint28b);
router.use(sprint28c);
router.use(sprint29b);
router.use(sprint30a);
router.use(sprint30b);
router.use(sprint30c);
router.use(sprint31a);
router.use(sprint31b);
router.use(sprint31c);
router.use(sprint31d);
router.use(sprint32a);
router.use(sprint32b);
router.use(sprint32c);
router.use(sprint32d);
router.use(sprint32e);
router.use(sprint32f);
router.use(sprint33a);
router.use(sprint33b);
router.use(sprint33c);
router.use(sprint33d);
router.use(sprint35);
router.use(sprint35b);
router.use(sprint35c);
router.use(sprint35d);
router.use(sprint35e);
router.use(emergencypayments);
router.use(sprint37);
router.use(sprint37b);
router.use(sprint38);
router.use(sprint39c);
router.use(sprint40a);
router.use(sprint40b);
router.use(sprint41);
router.use(sprint41b);
router.use(sprint42b);
router.use(sprint42c);
router.use(sprint43);
router.use(sprint43b);
router.use(sprint45);
router.use(sprint45b);
router.use(sprint46);
router.use(sprint46b);
router.use(sprint47b);
router.use(sprint49);
router.use(sprint49b);
router.use(sprint49c);
router.use(sprint50);

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
// Branching

router.get('/sprint3/qq123456c_main2', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var dob = req.query.dob

  if (dob === 'false') {
    // Redirect to the relevant page
    res.redirect('/sprint3/qq123456c_dob')
  }

  else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('sprint3/qq123456c_main2')
  }
})

router.get('/sprint3/qq123456c_dob2', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var dob2 = req.query.dob2

  if (dob2 === 'false') {
    // Redirect to the relevant page
    res.redirect('/sprint3/qq123456c_evidence')
  } else {

    res.render('sprint3/qq123456c_dob2')
  }
})

router.post(`/development/payment-letter-router`, (req, res) => { // router name
  const privacyPolicy = req.session.data['payment-letter-yn']  // name of data / id name

  if (privacyPolicy === 'Yes') { // name of data / + answer
    res.redirect(`/development/has-letter`)
  } else {
    res.redirect(`/development/post-code-lookup`)
  }
})


///// Sprint 17 routes ////

router.get('/sprint17/', function(req, res) {
  res.render('./sprint17/whattodo')
})

router.post('/sprint15/international/declaration', function(req, res) {
  res.redirect('/sprint15/international/applicationcomplete')
}) 

module.exports = router

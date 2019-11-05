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

const express = require('express')
const router = express.Router()

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

// '/start' is telling the router which URL to work on eg: localhost:3000/start
// router.post is telling the router look for: <form method="post"> on /start
// anything inside the <form method="post"></form> tags with a name="" will be inside req.body
router.post('/sprint15/uk/PAB', (req, res) => {
  // you can see whats inside the request body in the terminal with console.log()
  console.log(req.body)

  if (req.body.PAB === 'yes') {  // checks in the reqest body for name="branch" and checks for value="international"
    res.redirect('/sprint15/uk/PAB-fullname')     // if value is international it redirects to /international/page-1 
  } else {                                    // if the value is neither uk or international it does something else
    res.redirect('/sprint15/uk/dateofbirth')             // redirects to /other/page-1
  }
})

router.post('/sprint15/uk/qweek', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.qweek === 'yes') { // name of data / + answer
    res.redirect('/sprint15/uk/write-address')
  } else {
    res.redirect('/sprint15/uk/qweek-address')
  }
})

router.post('/sprint15/international/qweek-address1', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.qweekaddress === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/write-address1')
  } else {
    res.redirect('/sprint15/international/qweek-address2')
  }
})



/////////

router.post('/sprint15/international/country-leavinguk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.countryleavinguk === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/country-leavinguk2')
  } else {
    res.redirect('/sprint15/international/worked-outside')
  }
})

////////






router.post('/sprint15/international/write-address1', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.writeaddress === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/anyone-else-sp')
  } else {
    res.redirect('/sprint15/international/write-address2')
  }
})

router.post('/sprint15/international/qweek-country', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.writeaddress === 'yes') { // name of data / + answer
    res.redirect('./sprint15/international/country-leavinguk2')
  } else {
    res.redirect('/sprint15/international/qweek-country')
  }
})

router.post('/sprint15/international/anyone-else-sp', (req, res) => { // router name
  console.log(req.anyoneElseSp) // name of data / id name

  if (req.body.anyoneElseSp === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/anyone-else-sp-details')
  } else {
    res.redirect('/sprint15/international/anyone-else-wf')
  }
})

router.post('/sprint15/international/relationship-status', (req, res) => { // router name
  console.log(req.relationship) // name of data / id name

  if (req.body.relationship === 'single') { // name of data / + answer
    res.redirect('/sprint15/international/sp-uk')
  } else {
    res.redirect('/sprint15/international/european-national')
  }
})


router.post('/sprint15/international/anyone-else-wf', (req, res) => { // router name
  console.log(req.anyoneElseWf) // name of data / id name

  if (req.body.anyoneElseWf === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/wf-last-payment')
  } else {
    res.redirect('/sprint15/international/homepage')
  }
})

router.post('/sprint15/international/hospital', (req, res) => { // router name
  console.log(req.hospital) // name of data / id name

  if (req.body.hospital === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/hospital-details')
  } else {
    res.redirect('/sprint15/international/bank-1')
  }
})

router.post('/sprint15/international/custody', (req, res) => { // router name
  console.log(req.custody) // name of data / id name

  if (req.body.custody === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/authorityname')
  } else {
    res.redirect('/sprint15/international/carehome')
  }
})

router.post('/sprint15/international/carehome', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.carehome === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/carehome_address')
  } else {
    res.redirect('/sprint15/international/hospital')
  }
})

router.post('/sprint15/international/uknational', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.uknational === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/other-uk')
  } else {
    res.redirect('/sprint15/international/refugee')
  }
})

router.post('/sprint15/international/other-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.otheruk === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/nationalities-start')
  } else {
    res.redirect('/sprint15/international/lived-in-uk')
  }
})

router.post('/sprint15/international/lived-in-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.livedinuk === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/longest-lived-uk')
  } else {
    res.redirect('/sprint15/international/worked-in-uk')
  }
})


router.post('/sprint15/international/property', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.property === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/propertyaddress')
  } else {
    res.redirect('/sprint15/international/business')
  }
})

router.post('/sprint15/international/worked-outside', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.workedoutside === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/longest-worked2')
  } else {
    res.redirect('/sprint15/international/homepage3')
  }
})

router.post('/sprint15/international/business', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.business === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/business-date')
  } else {
    res.redirect('/sprint15/international/returned-uk')
  }
})

router.post('/sprint15/international/healthcare', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.healthcare === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/healthcaredate')
  } else {
    res.redirect('/sprint15/international/sp-outside')
  }
})

router.post('/sprint15/international/sp-outside', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.outsidebenefit === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/sp-outside-details')
  } else {
    res.redirect('/sprint15/international/country-leavinguk')
  }
})

router.post('/sprint15/international/returned-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.returneduk === 'yes') { // name of data / + answer
    res.redirect('/sprint15/international/returned-ukdetails')
  } else {
    res.redirect('/sprint15/international/familyuk')
  }
  })

  router.post('/sprint15/international/familyuk', (req, res) => { // router name
    console.log(req.body) // name of data / id name
  
    if (req.body.familyuk === 'yes') { // name of data / + answer
      res.redirect('/sprint15/international/familyuk-details')
    } else {
      res.redirect('/sprint15/international/anylinks')
    }
    })

    router.post('/sprint15/international/bank-1', (req, res) => { // router name
      console.log(req.body) // name of data / id name
    
      if (req.body.bankaccount === 'uk') { // name of data / + answer
        res.redirect('/sprint15/international/bankuk')
      } else {
        res.redirect('/sprint15/international/bankoverseas')
      }
    })

    router.post('/sprint15/international/letteroremail', (req, res) => { // router name
      console.log(req.body) // name of data / id name
    
      if (req.body.letteroremail === 'yes') { // name of data / + answer
        res.redirect('/sprint15/international/letteroremail-decision')
      } else {
        res.redirect('/sprint15/international/declaration')
      }
    })

    router.post('/sprint15/international/worked-in-uk', (req, res) => { // router name
      console.log(req.body) // name of data / id name
    
      if (req.body.workedinuk === 'yes') { // name of data / + answer
        res.redirect('/sprint15/international/dates-worked')
      } else {
        res.redirect('/sprint15/international/property')
      }
    })

//sprint 15 buttons

router.post('/sprint15/international/findsomeone', function(req, res) {
  res.redirect('/sprint15/international/findsomeoneresults')
})

router.post('/sprint15/international/findsomeoneresults', function(req, res) {
  res.redirect('/sprint15/international/fullname')
})

router.post('/sprint15/international/country', function(req, res) {
  res.redirect('/sprint15/international/findsomeone')
})

router.post('/sprint15/international/DOB', function(req, res) {
  res.redirect('/sprint15/international/country')
})

router.post('/sprint15/international/fullname', function(req, res) {
  res.redirect('/sprint15/international/relationship-status')
})

router.post('/sprint15/international/homeaddress', function(req, res) {
  res.redirect('/sprint15/international/check-homeaddress')
})

router.post('/sprint15/international/check-homeaddress', function(req, res) {
  res.redirect('/sprint15/international/date-living')
})

router.post('/sprint15/international/date-living', function(req, res) {
  res.redirect('/sprint15/international/qweek-address1')
})

router.post('/sprint15/international/telephone', function(req, res) {
  res.redirect('/sprint15/international/check-telephone')
})

router.post('/sprint15/international/check-telephone', function(req, res) {
  res.redirect('/sprint15/international/emailaddress')
})

router.post('/sprint15/international/emailaddress', function(req, res) {
  res.redirect('/sprint15/international/contact-preference')
})

router.post('/sprint15/international/contact-preference', function(req, res) {
  res.redirect('/sprint15/international/letteroremail')
})

router.post('/sprint15/international/european-national', function(req, res) {
  res.redirect('/sprint15/international/homeaddress')
})

router.post('/sprint15/international/anyone-else-sp-details', function(req, res) {
  res.redirect('/sprint15/international/anyone-else-wf')
})

router.post('/sprint15/international/wf-last-payment', function(req, res) {
  res.redirect('/sprint15/international/homepage')
})

router.post('/sprint15/international/hospital-details', function(req, res) {
  res.redirect('/sprint15/international/bank-1')
})

router.post('/sprint15/international/authorityname', function(req, res) {
  res.redirect('/sprint15/international/authorityaddress')
})

router.post('/sprint15/international/authorityaddress', function(req, res) {
  res.redirect('/sprint15/international/carehome')
})

router.post('/sprint15/international/carehome_address', function(req, res) {
  res.redirect('/sprint15/international/carehome_date')
})

router.post('/sprint15/international/carehome_date', function(req, res) {
  res.redirect('/sprint15/international/hospital')
})

router.post('/sprint15/international/othernationalities', function(req, res) {
  res.redirect('/sprint15/international/lived-in-uk')
})

router.post('/sprint15/international/refugee', function(req, res) {
  res.redirect('/sprint15/international/other-uk')
})

router.post('/sprint15/international/nationalities-start', function(req, res) {
  res.redirect('/sprint15/international/lived-in-uk')
})

router.post('/sprint15/international/longest-lived-uk', function(req, res) {
  res.redirect('/sprint15/international/worked-in-uk')
})


router.post('/sprint15/international/dates-worked', function(req, res) {
  res.redirect('/sprint15/international/property')
})


router.post('/sprint15/international/propertyaddress', function(req, res) {
  res.redirect('/sprint15/international/propertyaddress2')
})

router.post('/sprint15/international/propertyaddress2', function(req, res) {
  res.redirect('/sprint15/international/business')
})

router.post('/sprint15/international/longest-worked2', function(req, res) {
  res.redirect('/sprint15/international/homepage3')
})


router.post('/sprint15/international/business-date', function(req, res) {
  res.redirect('/sprint15/international/returned-uk')
})


router.post('/sprint15/international/healthcaredate', function(req, res) {
  res.redirect('/sprint15/international/sp-outside')
})

router.post('/sprint15/international/sp-uk', function(req, res) {
  res.redirect('/sprint15/international/homeaddress')
})

router.post('/sprint15/international/sp-outside-details', function(req, res) {
  res.redirect('/sprint15/international/country-leavinguk')
})

router.post('/sprint15/international/sp-outside-details-add1', function(req, res) {
  res.redirect('/sprint15/international/country-leavinguk')
})

router.post('/sprint15/international/returned-ukdetails', function(req, res) {
  res.redirect('/sprint15/international/familyuk')
})
 
router.post('/sprint15/international/returned-ukdetails-add1', function(req, res) {
  res.redirect('/sprint15/international/familyuk')
})

router.post('/sprint15/international/returned-ukdetails-add2', function(req, res) {
  res.redirect('/sprint15/international/familyuk')
})


  router.post('/sprint15/international/familyuk-details', function(req, res) {
  res.redirect('/sprint15/international/anylinks')
})

router.post('/sprint15/international/anylinks', function(req, res) {
  res.redirect('/sprint15/international/healthcare')
})

router.post('/sprint15/international/bankuk', function(req, res) {
  res.redirect('/sprint15/international/declaration')
})

router.post('/sprint15/international/bankoverseas', function(req, res) {
  res.redirect('/sprint15/international/bankoverseas-cont')
})

router.post('/sprint15/international/bankoverseas-cont', function(req, res) {
  res.redirect('/sprint15/international/check-bankdetails')
})

router.post('/sprint15/international/check-bankdetails', function(req, res) {
  res.redirect('/sprint15/international/telephone')
})


router.post('/sprint15/international/letteroremail-decision', function(req, res) {
  res.redirect('/sprint15/international/declaration')
})

router.post('/sprint15/international/qweek-address2', function(req, res) {
  res.redirect('/sprint15/international/write-address1')
})

router.post('/sprint15/international/write-address2', function(req, res) {
  res.redirect('/sprint15/international/anyone-else-sp')
})

router.post('/sprint15/international/anyone-else-sp-details-filledin', function(req, res) {
  res.redirect('/sprint15/international/anyone-else-wf')
})

router.post('/sprint15/international/wf-last-payment-adddate', function(req, res) {
  res.redirect('/sprint15/international/homepage2')
})

router.post('/sprint15/international/nationalities-start-add', function(req, res) {
  res.redirect('/sprint15/international/lived-in-uk')
})

router.post('/sprint15/international/declaration', function(req, res) {
  res.redirect('/sprint15/international/applicationcomplete')
})


///// Sprint 17 routes ////

router.get('/sprint17/', function(req, res) {
  res.render('./sprint17/whattodo')
})

router.post('/sprint15/international/declaration', function(req, res) {
  res.redirect('/sprint15/international/applicationcomplete')
})









module.exports = router

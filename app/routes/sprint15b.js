
const express = require('express');
const router = express.Router()

const version = 'sprint15b';

module.exports = router;

// '/start' is telling the router which URL to work on eg: localhost:3000/start
// router.post is telling the router look for: <form method="post"> on /start
// anything inside the <form method="post"></form> tags with a name="" will be inside req.body
router.post('/' + version + '/uk/PAB', (req, res) => {
  // you can see whats inside the request body in the terminal with console.log()
  console.log(req.body)

  if (req.body.PAB === 'yes') {  // checks in the reqest body for name="branch" and checks for value="international"
    res.redirect('/' + version + '/uk/PAB-fullname')     // if value is international it redirects to /international/page-1 
  } else {                                    // if the value is neither uk or international it does something else
    res.redirect('/' + version + '/uk/dateofbirth')             // redirects to /other/page-1
  }
})

router.post('/' + version + '/uk/qweek', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.qweek === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/uk/write-address')
  } else {
    res.redirect('/' + version + '/uk/qweek-address')
  }
})

router.post('/' + version + '/international/qweek-address1', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.qweekaddress === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/write-address1')
  } else {
    res.redirect('/' + version + '/international/qweek-address2')
  }
})




router.post('/' + version + '/international/write-address1', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.writeaddress === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/country-leavinguk')
  } else {
    res.redirect('/' + version + '/international/write-address2')
  }
})

/////////

router.post('/' + version + '/international/country-leavinguk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.countryleavinguk === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/country-leavinguk2')
  } else {
    res.redirect('/' + version + '/international/telephone')
  }
})

////////






router.post('/' + version + '/international/write-address1', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.writeaddress === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/write-address2')
  } else {
    res.redirect('/' + version + '/international/country-leavinguk')
  }
})

router.post('/' + version + '/international/qweek-country', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.writeaddress === 'yes') { // name of data / + answer
    res.redirect('./' + version + '/international/country-leavinguk2')
  } else {
    res.redirect('/' + version + '/international/qweek-country')
  }
})

router.post('/' + version + '/international/anyone-else-sp', (req, res) => { // router name
  console.log(req.anyoneElseSp) // name of data / id name

  if (req.body.anyoneElseSp === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/anyone-else-sp-details')
  } else {
    res.redirect('/' + version + '/international/anyone-else-wf')
  }
})

router.post('/' + version + '/international/relationship-status', (req, res) => { // router name
  console.log(req.relationship) // name of data / id name

  if (req.body.relationship === 'single') { // name of data / + answer
    res.redirect('/' + version + '/international/check-answers1')
  } else {
    res.redirect('/' + version + '/international/european-national')
  }
})


router.post('/' + version + '/international/anyone-else-wf', (req, res) => { // router name
  console.log(req.anyoneElseWf) // name of data / id name

  if (req.body.anyoneElseWf === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/wf-last-payment')
  } else {
    res.redirect('/' + version + '/international/hospital')
  }
})

router.post('/' + version + '/international/hospital', (req, res) => { // router name
  console.log(req.hospital) // name of data / id name

  if (req.body.hospital === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/hospital-details')
  } else {
    res.redirect('/' + version + '/international/custody')
  }
})

router.post('/' + version + '/international/custody', (req, res) => { // router name
  console.log(req.custody) // name of data / id name

  if (req.body.custody === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/authorityname')
  } else {
    res.redirect('/' + version + '/international/carehome')
  }
})

router.post('/' + version + '/international/carehome', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.carehome === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/carehome_address')
  } else {
    res.redirect('/' + version + '/international/uknational')
  }
})

router.post('/' + version + '/international/uknational', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.uknational === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/other-uk')
  } else {
    res.redirect('/' + version + '/international/refugee')
  }
})

router.post('/' + version + '/international/other-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.otheruk === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/nationalities-start')
  } else {
    res.redirect('/' + version + '/international/lived-in-uk')
  }
})

router.post('/' + version + '/international/lived-in-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.livedinuk === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/longest-lived-uk')
  } else {
    res.redirect('/' + version + '/international/property')
  }
})


router.post('/' + version + '/international/property', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.property === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/propertyaddress')
  } else {
    res.redirect('/' + version + '/international/worked-outside')
  }
})

router.post('/' + version + '/international/worked-outside', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.workedoutside === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/longest-worked2')
  } else {
    res.redirect('/' + version + '/international/business')
  }
})

router.post('/' + version + '/international/business', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.business === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/business-date')
  } else {
    res.redirect('/' + version + '/international/healthcare')
  }
})

router.post('/' + version + '/international/healthcare', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.healthcare === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/healthcaredate')
  } else {
    res.redirect('/' + version + '/international/sp-uk')
  }
})

router.post('/' + version + '/international/sp-outside', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.outsidebenefit === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/sp-outside-details')
  } else {
    res.redirect('/' + version + '/international/returned-uk')
  }
})

router.post('/' + version + '/international/returned-uk', (req, res) => { // router name
  console.log(req.body) // name of data / id name

  if (req.body.returneduk === 'yes') { // name of data / + answer
    res.redirect('/' + version + '/international/returned-ukdetails')
  } else {
    res.redirect('/' + version + '/international/familyuk')
  }
  })

  router.post('/' + version + '/international/familyuk', (req, res) => { // router name
    console.log(req.body) // name of data / id name

    if (req.body.familyuk === 'yes') { // name of data / + answer
      res.redirect('/' + version + '/international/familyuk-details')
    } else {
      res.redirect('/' + version + '/international/anylinks')
    }
    })

    router.post('/' + version + '/international/bank-1', (req, res) => { // router name
      console.log(req.body) // name of data / id name

      if (req.body.bankaccount === 'uk') { // name of data / + answer
        res.redirect('/' + version + '/international/bankuk')
      } else {
        res.redirect('/' + version + '/international/bankoverseas')
      }
    })

    router.post('/' + version + '/international/letteroremail', (req, res) => { // router name
      console.log(req.body) // name of data / id name

      if (req.body.letteroremail === 'yes') { // name of data / + answer
        res.redirect('/' + version + '/international/letteroremail-decision')
      } else {
        res.redirect('/' + version + '/international/applicationcomplete')
      }
    })

//sprint 15 buttons

router.post('/' + version + '/international/findsomeone', function(req, res) {
  res.redirect('/' + version + '/international/findsomeoneresults')
})

router.post('/' + version + '/international/country', function(req, res) {
  res.redirect('/' + version + '/international/DOB')
})

router.post('/' + version + '/international/DOB', function(req, res) {
  res.redirect('/' + version + '/international/fullname')
})

router.post('/' + version + '/international/fullname', function(req, res) {
  res.redirect('/' + version + '/international/homeaddress')
})

router.post('/' + version + '/international/homeaddress', function(req, res) {
  res.redirect('/' + version + '/international/date-living')
})

router.post('/' + version + '/international/date-living', function(req, res) {
  res.redirect('/' + version + '/international/qweek-address1')
})

router.post('/' + version + '/international/telephone', function(req, res) {
  res.redirect('/' + version + '/international/emailaddress')
})

router.post('/' + version + '/international/emailaddress', function(req, res) {
  res.redirect('/' + version + '/international/contact-preference')
})

router.post('/' + version + '/international/contact-preference', function(req, res) {
  res.redirect('/' + version + '/international/relationship-status')
})

router.post('/' + version + '/international/european-national', function(req, res) {
  res.redirect('/' + version + '/international/check-answers1')
})

router.post('/' + version + '/international/anyone-else-sp-details', function(req, res) {
  res.redirect('/' + version + '/international/anyone-else-wf')
})

router.post('/' + version + '/international/wf-last-payment', function(req, res) {
  res.redirect('/' + version + '/international/hospital')
})

router.post('/' + version + '/international/hospital-details', function(req, res) {
  res.redirect('/' + version + '/international/custody')
})

router.post('/' + version + '/international/authorityname', function(req, res) {
  res.redirect('/' + version + '/international/authorityaddress')
})

router.post('/' + version + '/international/authorityaddress', function(req, res) {
  res.redirect('/' + version + '/international/carehome')
})

router.post('/' + version + '/international/carehome_address', function(req, res) {
  res.redirect('/' + version + '/international/carehome_date')
})

router.post('/' + version + '/international/carehome_date', function(req, res) {
  res.redirect('/' + version + '/international/uknational')
})

router.post('/' + version + '/international/othernationalities', function(req, res) {
  res.redirect('/' + version + '/international/lived-in-uk')
})

router.post('/' + version + '/international/refugee', function(req, res) {
  res.redirect('/' + version + '/international/other-uk')
})

router.post('/' + version + '/international/nationalities-start', function(req, res) {
  res.redirect('/' + version + '/international/lived-in-uk')
})

router.post('/' + version + '/international/longest-lived-uk', function(req, res) {
  res.redirect('/' + version + '/international/property')
})

router.post('/' + version + '/international/propertyaddress', function(req, res) {
  res.redirect('/' + version + '/international/worked-outside')
})

router.post('/' + version + '/international/longest-worked2', function(req, res) {
  res.redirect('/' + version + '/international/business')
})

router.post('/' + version + '/international/business-date', function(req, res) {
  res.redirect('/' + version + '/international/business-type')
})

router.post('/' + version + '/international/business-type', function(req, res) {
  res.redirect('/' + version + '/international/healthcare')
})

router.post('/' + version + '/international/healthcaredate', function(req, res) {
  res.redirect('/' + version + '/international/sp-uk')
})

router.post('/' + version + '/international/sp-uk', function(req, res) {
  res.redirect('/' + version + '/international/sp-outside')
})

router.post('/' + version + '/international/sp-outside-details', function(req, res) {
  res.redirect('/' + version + '/international/returned-uk')
})

router.post('/' + version + '/international/sp-outside-details-add1', function(req, res) {
  res.redirect('/' + version + '/international/returned-uk')
})

router.post('/' + version + '/international/returned-ukdetails', function(req, res) {
  res.redirect('/' + version + '/international/familyuk')
})

router.post('/' + version + '/international/returned-ukdetails-add1', function(req, res) {
  res.redirect('/' + version + '/international/familyuk')
})

router.post('/' + version + '/international/returned-ukdetails-add2', function(req, res) {
  res.redirect('/' + version + '/international/familyuk')
})


  router.post('/' + version + '/international/familyuk-details', function(req, res) {
  res.redirect('/' + version + '/international/anylinks')
})

router.post('/' + version + '/international/anylinks', function(req, res) {
  res.redirect('/' + version + '/international/bank-1')
})

router.post('/' + version + '/international/bankuk', function(req, res) {
  res.redirect('/' + version + '/international/declaration')
})

router.post('/' + version + '/international/bankoverseas', function(req, res) {
  res.redirect('/' + version + '/international/bankoverseas-cont')
})

router.post('/' + version + '/international/bankoverseas-cont', function(req, res) {
  res.redirect('/' + version + '/international/declaration')
})

router.post('/' + version + '/international/declaration', function(req, res) {
  res.redirect('/' + version + '/international/letteroremail')
})

router.post('/' + version + '/international/letteroremail-decision', function(req, res) {
  res.redirect('/' + version + '/international/applicationcomplete')
})

router.post('/' + version + '/international/qweek-address2', function(req, res) {
  res.redirect('/' + version + '/international/write-address1')
})

router.post('/' + version + '/international/write-address2', function(req, res) {
  res.redirect('/' + version + '/international/country-leavinguk')
})

router.post('/' + version + '/international/anyone-else-sp-details-filledin', function(req, res) {
  res.redirect('/' + version + '/international/anyone-else-wf')
})

router.post('/' + version + '/international/wf-last-payment-adddate', function(req, res) {
  res.redirect('/' + version + '/international/hospital')
})

router.post('/' + version + '/international/nationalities-start-add', function(req, res) {
  res.redirect('/' + version + '/international/lived-in-uk')
})

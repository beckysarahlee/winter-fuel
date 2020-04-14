const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })


  // Teleclaim or postal claim
  router.post('/sprint37-international/application-type', (req, res) => {
    res.redirect('/sprint37-international/date-of-birth')
  })
  ;

  // DOB to phone/postal journey
  router.post('/sprint37-international/date-of-birth', function(req, res) {
      if (req.body["dob-year"] === "1960") {
        res.redirect('post-too-young');
      }
      else if (req.body["dob-year"] === "1959") {
        res.redirect('phone-too-young');
      } else {
        res.redirect('find');
      }
  });



  module.exports = router;
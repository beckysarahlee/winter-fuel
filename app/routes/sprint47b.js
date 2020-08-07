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





  // Referral to get next
  router.post('/sprint47b/overpayment-referral', (req, res) => {
    res.redirect('/sprint47b/next-task')
  })
  ;



  module.exports = router;

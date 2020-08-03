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





  // Referral, to be recovered or not to be recovered?
  router.post('/sprint47b/overpayment-referral', function(req, res) {
    if ( req.body['recoverable'] === 'yes' ) {
      res.redirect('recoverable-overpayment');
    } else {
      res.redirect('next-task');
    }
  });

  // Recoverable to get next

  router.post('/sprint47b/date-of-birth', (req, res) => {
    res.redirect('/sprint47b/residency')
  })
  ;



  module.exports = router;

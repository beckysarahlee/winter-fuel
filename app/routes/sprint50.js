const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Task one - are any details available?
router.post('/sprint50/death-arrears-task-1', function(req, res) {
  if (req.body['nino'] === 'XX987654X') {
    res.redirect('/sprint49c/find-2');
  } else if (req.body['nino'] === 'xx987654x') {
    res.redirect('/sprint49c/find-2');
  } else {
    res.redirect('/sprint49c/find-1');
  }
});





// EXAMPLES


// Power of attourney
router.post('/sprint49c/poa', function(req, res) {
  if (req.body['poa'] === 'Yes') {
    res.redirect('poa-people');
  } else {
    res.redirect('declaration');
  }
});



// Overpayment recoverable?
router.post('/sprint49c/over-payment', (req, res) => {
  res.redirect('/sprint49c/overview-changed')
})
;



module.exports = router;

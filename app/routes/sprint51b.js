const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Query
router.post('/sprint51b/bank-task', function(req, res) {
  if (req.body['bank-details'] === 'yes') {
    res.redirect('bank-details');
  } else {
    res.redirect('send-form');
  }
});


// Find result to security
router.post('/sprint51b/bank-details', (req, res) => {
  res.redirect('/sprint51b/get-next-task')
});



module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/sprint45/verify-dob', (req, res) => {
  res.redirect('/sprint45/verify-dob-confirm')
});



module.exports = router;

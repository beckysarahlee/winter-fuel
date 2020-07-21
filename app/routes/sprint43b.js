const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/sprint43b/tasks', (req, res) => {
  res.redirect('/sprint43b/verify-address')
});



router.post('/sprint43b/tasks-3', (req, res) => {
  res.redirect('/sprint43b/gsl-task')
});




module.exports = router;

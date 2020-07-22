const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


router.post('/sprint43b/tasks', (req, res) => {
  res.redirect('/sprint32c/address-1')
});



router.post('/sprint43b/tasks-3', (req, res) => {
  res.redirect('/sprint43b/gsl-task')
});


router.post('/sprint43b/gsl-task', function(req, res) {
  if (req.session.data["gsl-decision"] === "approved") {
    res.redirect('tasks-3-approved');
  } else {
    res.redirect('tasks-3-not-approved');
  }
});

module.exports = router;

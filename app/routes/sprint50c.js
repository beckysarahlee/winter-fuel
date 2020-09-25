const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Get next task to the task

router.post('/sprint50c/debt-management-task', (req, res) => {
  res.redirect('/sprint50c/debt-management-task-1')
})
;


module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Task to - DAP details, next of kin details or return to queue

router.post('/sprint50/death-arrears-task-1', function(req, res) {
  if ( req.body['dap'] === 'bank-details' ) {
    res.redirect('death-arrears-task-1-dap-name');
  } else if ( req.body['dap'] === 'contact-details' ) {
    res.redirect('death-arrears-task-1-nok-name');
  } else {
    res.redirect('tasks-5-2');
  }
});


// Death arrears payee details input

router.post('/sprint50/death-arrears-task-1-dap-name', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1-dap-address')
})
;

router.post('/sprint50/death-arrears-task-1-dap-address', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1-dap-address-1')
})
;

router.post('/sprint50/death-arrears-task-1-dap-address-1', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1-dap-bank-details')
})
;

router.post('/sprint50/death-arrears-task-1-dap-bank-details', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1-dap-make-payment')
})
;

router.post('/sprint50/death-arrears-task-1-dap-make-payment', (req, res) => {
  res.redirect('/sprint50/tasks-5-2')
})
;

// Send WF BR330 to next of kin

router.post('/sprint50/death-arrears-task-1-nok-name', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1-nok-address')
})
;

router.post('/sprint50/death-arrears-task-1-nok-address', (req, res) => {
  res.redirect('/sprint50/death-arrears-task-1-nok-address-1')
})
;

// EXAMPLES




module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/sprint57/move-date', (req, res) => {
  res.redirect('declaration')
})
;

router.post('/sprint57/declaration', (req, res) => {
  res.redirect('/sprint50b/over-payment')
})
;

router.post('/sprint50b/over-payment', (req, res) => {
  res.redirect('overpayment-referral')
})
;



router.post('/sprint57/move-date-multi', (req, res) => {
  res.redirect('multi-year-details')
})
;

router.post('/sprint57/multi-year-details', (req, res) => {
  res.redirect('declaration-multi')
})
;

router.post('/sprint57/declaration-multi', (req, res) => {
  res.redirect('overpayment-referral-multi')
})
;




router.post('/sprint57/overpayment-referral-multi', function(req, res) {
  if (req.body['recoverable-year-2018'] === '2018'){
    res.redirect('overpayment-select-recoverable');} 
  else if (req.body['recoverable-year-2019'] === '2019'){
    res.redirect('overpayment-select-recoverable');} 
  else if (req.body['recoverable-year-2020'] === '2020'){
    res.redirect('overpayment-select-recoverable');} 
    else {
    res.redirect('next-task');
  }
});

router.post('/sprint57/overpayment-referral-more-detail', function(req, res) {
  if (req.body['recoverable'] === 'yes'){
    res.redirect('/sprint47b/next-task');} 
    else {
    res.redirect('/sprint47b/next-task-2');
  }
});

// Referral to get next
router.post('/sprint57/overpayment-select-recoverable', (req, res) => {
  res.redirect('next-task')
})
;



module.exports = router;

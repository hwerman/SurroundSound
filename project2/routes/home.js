const router = require('express').Router();
const dbService = require('../services/api_1');

router.get('/', dbService.searchSoundtrack, (req, res) =>{
  res.json(res.result);
  // res.send('this works');
});

module.exports = router;

const router = require('express').Router();
const dbService = require('../services/apiFile');

router.get('/', dbService.searchSoundtrack, (req, res) => {
  console.log(res.results)
  res.render(
  'index', {
    banana: res.results
  });
  // res.send('this works');
});

module.exports = router;

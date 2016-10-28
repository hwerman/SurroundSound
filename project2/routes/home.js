const router = require('express').Router();
const dbService = require('../services/services');

router.get('/', dbService.searchSoundtrack, (req, res) => {
  res.render(
  'index', {
  });
});

router.get('/search', dbService.searchSoundtrack, (req, res) => {
  res.render(
  'search', {
    songs: res.results,
  });
});

module.exports = router;

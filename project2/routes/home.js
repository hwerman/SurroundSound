const router = require('express').Router();
const dbService = require('../services/services');

router.get('/', (req, res) => {
  res.render(
  'index', {
  });
});

router.get('/search', dbService.searchSoundtrack, dbService.searchSong, (req, res) => {
  res.render(
  'path', {
    tracks: res.results,
  });
});

module.exports = router;

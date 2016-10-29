const express = require('express');
const router = express.Router();
const dbService = require('../services/services');

// This is the route that serves your '/' homepage
router.get('/', (req, res) => {
  res.render('index');
});

// This route serves your `/signup` form
router.get('/signup', (req, res) => {
  res.render('signup');
});
// This route serves your `/login` form
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/home', (req, res) => {
  res.render(
    'home')
});

router.get('/path', dbService.searchSoundtrack, dbService.searchSong, (req, res) => {
  res.render(
  'path', {
    tracks: res.results,
  });
});

module.exports = router;

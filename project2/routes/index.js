const express = require('express');
const indexRouter = express.Router();
const dbService = require('../services/services');

// This is the route that serves your '/' homepage
indexRouter.get('/', (req, res) => {
  res.render('index');
});

// This route serves your `/login` form
indexRouter.get('/login', (req, res) => {
  res.render('login');
});

// This route serves your `/signup` form
indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});

// router.get('/home', (req, res) => {
//   res.render(
//     'home')
// });

// router.get('/path', dbService.searchSoundtrack, dbService.searchSong, (req, res) => {
//   res.render(
//   'path', {
//     tracks: res.results,
//   });
// });

module.exports = indexRouter;
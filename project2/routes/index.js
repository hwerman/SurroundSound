//this file is derived from the user-auth exercise provided by Rafa Pacas (@rapala61) and Bobby King (@gittheking) at General Assembly.

const express = require('express');
const indexRouter = express.Router();
const dbService = require('../services/services');

// This is the route that serves your '/' homepage
indexRouter.get('/', (req, res) => {
  res.render('home');
});

// This route serves your `/login` form
indexRouter.get('/login', (req, res) => {
  res.render('login');
});

// This route serves your `/signup` form
indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = indexRouter;

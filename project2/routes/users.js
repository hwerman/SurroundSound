//this file is derived from the user-auth exercise provided by Rafa Pacas (@rapala61) and Bobby King (@gittheking) at General Assembly.

/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express           = require('express');
const { createUser }    = require('../models/user');
const { authenticate,
        logIn }         = require('../lib/auth');

const usersRouter  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, logIn,  (req, res) => {
  res.redirect('/users/profile');
});

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/profile', { user: res.user });

});

module.exports = usersRouter;

//this file is derived from the user-auth exercise provided by Rafa Pacas (@rapala61) and Bobby King (@gittheking) at General Assembly.

/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const bcrypt    = require('bcryptjs');
const userModel = require('../models/user');


//logIn function compares the password that the user provides to the password from the user stored in mongodb.
//if it matches, user ID is stored in the session.
/*
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */
function logIn(req, res, next) {
  const userPayload = req.body.user;
  // console.log(userPayload.password);
  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = bcrypt.compareSync(userPayload.password, dbUser.password);

    console.log(dbUser.password, matches);
    if (matches) {
      req.session.userId = dbUser._id;
      res.user = dbUser;
      next();
    } else {
      res.redirect('/');
    }
  });
}

//authenticate protects routes by preventing the user from reaching routes other than log in and sign up
/*
 *
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next invoked to continue the response flow
 *
 */
function authenticate(req, res, next) {
  if (req.session.userId) {
    userModel.getUserById(req.session.userId).then((dbUser) => {
      res.user = dbUser;
      next();
    }).catch(() => {
      res.redirect('/login');
    });
  } else {
    res.redirect('/');
  }
}

module.exports = {
  logIn,
  authenticate,
};

var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', isLoggedIn, function (req, res) {
  console.log(req.user);
  res.render('users/index', {
      user:req.user
  });
});

router.get('/auth/google', passport.authenticate( 
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/posts',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/');
};

module.exports = router;
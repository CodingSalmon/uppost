var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function (req, res) {
  res.render('user/index', {
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

module.exports = router;
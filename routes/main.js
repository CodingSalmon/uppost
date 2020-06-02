var express = require('express');
var router = express.Router();
var passport = require('passport');
var postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.main);

router.get('/:title', postsCtrl.category);

router.post('/:title', postsCtrl.create);

router.get('/auth/google', passport.authenticate( 
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
var express = require('express');
var router = express.Router();
var passport = require('passport');
var postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);

router.get('/new', isLoggedIn, postsCtrl.new);

router.get('/:id/edit', isLoggedIn, postsCtrl.edit);

router.get('/:id/like', isLoggedIn, postsCtrl.like);

router.post('/', isLoggedIn, postsCtrl.create);

router.delete('/:id', isLoggedIn, postsCtrl.delete);

router.put('/:id', isLoggedIn, postsCtrl.update);

router.get('/:id', postsCtrl.show);

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
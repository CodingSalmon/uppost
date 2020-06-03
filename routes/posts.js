var express = require('express');
var router = express.Router();
var passport = require('passport');
var postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);

router.get('/new', postsCtrl.new);

router.get('/:id/edit', postsCtrl.edit);

router.post('/', postsCtrl.create);

router.delete('/:id', postsCtrl.delete);

router.put('/:id', postsCtrl.update);

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

module.exports = router;
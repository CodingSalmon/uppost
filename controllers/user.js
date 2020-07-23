const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
    index
};

function index(req, res) {
    Post.find({postedBy:req.user.name}, function(err, posts) {
        res.render('users/index', {
        user: req.user,
        posts
    })})   
}
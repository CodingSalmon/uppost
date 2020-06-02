const Post = require('../models/post');

module.exports = {
    main,
    new: newPost,
    show,
    create,
    delete: deletePost,
    update
};

function main(req, res) {
    Post.find({}, function(err, posts){
        res.render('posts/main', {
            user: req.user,
            title: req.params.title,
            posts
        });
        console.log(posts)
    });
};

function newPost(req, res) {
    res.render('posts/new', {
        user: req.user
    });
};

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', {
            user:req.user,
            post
        });
    });
};

function create(req, res) {
    console.log(req.body);
    req.body.likers = [];
    req.body.postedBy = req.user.name;

    Post.create(req.body, function() {
        res.redirect('/main');
    });
};

function deletePost(req, res) {
    Post.findByIdAndRemove(req.params.id, function() {
        res.redirect('/main');
    });
};

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, function() {
        res.redirect('/main');
    });
};
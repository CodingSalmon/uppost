const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    show,
    create,
    delete: deletePost,
    edit,
    update
};

function index(req, res) {
    Post.find({}, function(err, posts){
        res.render('posts/index', {
            user: req.user,
            title: req.params.title,
            posts
        });
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
    req.body.likers = [];
    req.body.postedBy = req.user.name;

    Post.create(req.body, function() {
        res.redirect('/posts');
    });
};

function deletePost(req, res) {
    Post.findByIdAndRemove(req.params.id, function() {
        res.redirect('/posts');
    });
};

function edit(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/edit', {
            user:req.user,
            post
        });
    });
};

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        res.redirect(`/posts/${post.id}`);
    });
};
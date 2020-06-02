const Post = require('../models/post');

module.exports = {
    main,
    category,
    show,
    create,
    delete: deletePost
};

function main(req, res) {
    res.render('posts/main', {
        user: req.user
    });
};

function category(req, res) {
    res.render('posts/category', {
        user: req.user,
        title: req.params.title
    });
};

function show(req, res) {

};

function create(req, res) {
    console.log(req.params);
    req.body.category = req.params;
    req.body.postTime = 

    Post.create(req.body, function() {
        res.redirect(`/categories/${req.category}`)
    })
};

function deletePost(req, res) {
    
};
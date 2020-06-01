const User = require('../models/user');

module.exports = {
    categories,
    category,
    create
};

function categories(req, res) {
    res.render('posts/categories', {
        user:req.user,
        name:req.query.name
    });
};

function category(req, res) {
    res.render('/posts/categories/:id', {

    });
};

function create(req, res) {

};
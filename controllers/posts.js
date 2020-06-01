const User = require('../models/user');

module.exports = {
    index,
    categories
};

function index(req, res) {
    res.render('index', {
        user:req.user,
        name:req.query.name
    });
};

function categories(req, res) {
    res.render('posts/categories', {
        user:req.user,
        name:req.query.name
    })
}
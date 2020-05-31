const User = require('../models/user');

module.exports = {
    index,
    main
};

function index(req, res) {
    res.render('index', {
        user:req.user,
        name:req.query.name
    });
};

function main(req, res) {
    res.render('posts/main', {
        user:req.user,
        name:req.query.name
    })
}
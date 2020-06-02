const mongoose = require('mongoose');
const User = require('./user');

var categorySchema = new mongoose.Schema({
    title: String,
    posts: String
});

var commentSchema = new mongoose.Schema({
    message: String,
    likers: [],
    postTime: Date,
    postedBy: String
});

var postSchema = new mongoose.Schema({
    message: String,
    likers: [],
    postTime: Date,
    postedBy: String,
    comments:[commentSchema],
    category: String
});

module.exports = mongoose.model('Post', postSchema);
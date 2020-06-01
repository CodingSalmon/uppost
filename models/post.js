const mongoose = require('mongoose');
const User = require('./user');

var categorySchema = new mongoose.Schema({
    title: String,
    posts: [postSchema]
});

var commentSchema = new mongoose.Schema({
    message: String,
    likers: [],
    postTime: Date,
    postedBy: User.id
});

var postSchema = new mongoose.Schema({
    message: String,
    likers: [],
    postTime: Date,
    postedBy: User.id,
    comments:[commentSchema],
    category: categorySchema.title
});

var categorySchema = new mongoose.Schema({
    title: String,
    posts: [postSchema]
});

module.exports = mongoose.model('Category', categorySchema);
const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    text: String
});

var userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    avatar: String,
    email: String,
    posts: [postSchema]
});

module.exports = mongoose.model('User', userSchema);
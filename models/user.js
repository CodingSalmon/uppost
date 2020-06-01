const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    avatar: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);
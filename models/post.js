const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    message: String,
    postTime: Date,
    postedBy: String
});

var postSchema = new mongoose.Schema({
    message: String,
    comments:[commentSchema],
    postedBy: String,
    postTime: {
        type: Date,
        default: function(){
            return new Date();
        }
    },
    category: String
});

module.exports = mongoose.model('Post', postSchema);
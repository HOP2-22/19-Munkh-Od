const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    message: { type: 'string' },
    owner: { type: 'object' },
    post: { type: 'string' },
    publishDate: { type: 'string' },
});

const Comment = mongoose.model("comments", CommentSchema);
module.exports = Comment;
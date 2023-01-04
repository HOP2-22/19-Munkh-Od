const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    text: { type: 'string' },
    image: { type: 'string' },
    likes: { type: 'number' },
    link: { type: 'string'},
    tags: { type: 'array' },
    publishDate: { type: 'string' },
    owner: { type: 'object' },
});

const Post = mongoose.model("posts", PostSchema);
module.exports = Post;

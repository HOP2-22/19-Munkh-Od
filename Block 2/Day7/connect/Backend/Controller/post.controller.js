const User = require("../Models/Post");

exports.getPosts = async (req, res) => {
  const posts = await User.find();
  res.send(posts);
};

exports.getPostById = async (req, res) => {
  const _id = req.params.id;
  const posts = await Post.find({ _id: _id });
  res.send(posts);
};
const User = require("../Models/Comment");

exports.getComments = async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
};

exports.getCommentById = async (req, res) => {
  const _id = req.params.id;
  const comment = await Comment.find({ _id: _id });
  res.send(comment);
};

const User = require("../Models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

exports.getUserById = async (req, res) => {
  const _id = req.params.id;
  const users = await User.find({ _id: _id });
  res.send(users);
};

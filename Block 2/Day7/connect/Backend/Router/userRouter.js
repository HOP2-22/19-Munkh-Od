const express = require("express");
const router = express.Router();
const { getUsers, getUserById } = require("../Controller/user.controller");

router.get("/users", getUsers).get("/users/:userId", getUserById);

module.exports = router;

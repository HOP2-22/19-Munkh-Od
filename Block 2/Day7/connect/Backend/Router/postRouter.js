const express = require("express");
const router = express.Router();
const { getPosts, getPostById } = require("../Controller/post.controller");

router.get("/posts", getPosts).get("/posts/:postId", getPostById);

module.exports = router;
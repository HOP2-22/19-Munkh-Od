const express = require("express");
const router = express.Router();
const { getComments, getCommentById } = require("../Controller/comment.controller");

router.get("/comments", getComments).get("/comments/:commentId", getCommentById);

module.exports = router;
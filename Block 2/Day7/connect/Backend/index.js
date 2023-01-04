const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connections = mongoose.connection;

mongoose.connect(
  "mongodb+srv://Munkh-Od:99175943@cluster0.ypgsyea.mongodb.net/?retryWrites=true&w=majority"
);
const Port = 8000;

const app = express();
app.use(cors());
const UserRouter = require("./Router/userRouter");
const PostRouter = require("./Router/postRouter");
const CommentRouter = require("./Router/commentRouter");

mongoose.connection.once("once", () => {
  console.log("mongoDB is success");
});

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(port, () => {
  console.log(Port, "Litening on port");
});

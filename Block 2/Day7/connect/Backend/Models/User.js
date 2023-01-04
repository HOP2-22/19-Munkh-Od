const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  
  firstName: {
    type: String,
    required: [true, "Firstname is required"],
    minlenght: [6, "Firstname lenght must be at least 6 characters"],
    maxlenght: [50, "Firstname lenght must be 6 to 50 characters"],
  },

  lastName: {
    type: String,
    required: [true, "Lastname is required"],
    maxlenght: [50, "Lastname lenght must be 6 to 50 characters"],
  },

  gender: {
    type: String,
    enum: { values: ["Male", "Female"], message: "{VALUE} s not supported" },
  },

  Email: {
    type: String,
    required: [true, "Email is required"]
  },
  Phone: String,
  Picture: String,
  dateOfBirth: String,
  registerDate: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;

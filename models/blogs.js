const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        unique: true,
        trim: true,
        required: true,
      }
  });

module.exports = mongoose.model("User", UserSchema);

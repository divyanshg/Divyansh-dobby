const { Schema, model } = require("mongoose");

const uploadSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  userID: {
    //from the user model
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = model("Upload", uploadSchema);
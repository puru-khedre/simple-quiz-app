const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: String,
  email: String,
  password: String,
  quizIds: { type: [Schema.Types.ObjectId], ref: "quiz" },
});

module.exports = model("user", userSchema);

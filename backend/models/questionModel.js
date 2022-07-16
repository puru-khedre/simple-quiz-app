const { Schema, model } = require("mongoose");

const questionSchema = Schema({
  question: String,
  type: String,
  answer: [String],
  marks: Number,
});

module.exports = model("question", questionSchema);

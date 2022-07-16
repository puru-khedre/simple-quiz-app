const { Schema, model } = require("mongoose");

const quizSchema = Schema({
  name: String,
  life: {
    open: Date,
    closed: Date,
  },
  questionIds: [{ type: [Schema.Types.ObjectId], ref: "question" }],
  duration: Number,
  response: [
    {
      participant: String,
      markedAnswers: [
        {
          queId: { type: Schema.Types.ObjectId, ref: "question" },
          answer: [String],
        },
      ],
    },
  ],
});

module.exports = model("quiz", quizSchema);

const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  options: { type: Array, required: true },
  branch: { type: String, required: true },
  subject: { type: String, required: true },
  correctAnswerNumber: { type: String, required: true },
});

module.exports = mongoose.model("Question", QuestionSchema);

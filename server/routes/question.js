const router = require("express").Router();
const Question = require("../models/Question");

// add a new question
router.post("/add", async (req, res) => {
  try {
    const myQuestion = await Question.create({
      title: req.body.title,
      desc: req.body.desc,
      options: req.body.options,
      branch: req.body.branch,
      subject: req.body.subject,
      correctAnswerNumber: req.body.correctAnswerNumber,
    });
    res.send(myQuestion);
  } catch (error) {
    res.send(error);
  }
});

// view all questions
router.get("/view", async (req, res) => {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (error) {
    res.send(error);
  }
});

// get a single question
router.get("/question/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await Question.findById({ _id: questionId });
    res.send(question);
  } catch (error) {
    res.send(error);
  }
});

// edit a question
router.put("/question/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: questionId },
      { ...req.body }
    );
    res.send(updatedQuestion);
  } catch (error) {
    res.send(error);
  }
});

// delete a single question
router.delete("/question/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await Question.findByIdAndDelete({ _id: questionId });
    res.send(question);
  } catch (error) {
    res.send(error);
  }
});

// delete all questions
router.delete("/delete", async (req, res) => {
  try {
    const result = await Question.deleteMany();
    if (result.deletedCount === 0) {
      res.send("No Questions found");
    } else {
      res.send("All questions are deleted successfully");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

const Quiz = require("../models/quizModel");

const createQuiz = async (req, res) => {

  const { question, options, answer } = req.body;

  try {

    const quiz = await Quiz.create({

      userId: req.user.id,
      question,
      options,
      answer

    });

    res.json(quiz);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

const getQuiz = async (req, res) => {

  try {

    const quizzes = await Quiz.find({ userId: req.user.id });

    res.json(quizzes);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

module.exports = { createQuiz, getQuiz };
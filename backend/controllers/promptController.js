const Prompt = require("../models/promptModel");

const savePrompt = async (req, res) => {

  const { question, answer } = req.body;

  const prompt = await Prompt.create({

    userId: req.user.id,
    question,
    answer

  });

  res.json(prompt);
};

module.exports = { savePrompt };
const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  question: String,

  options: [String],

  answer: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Quiz", quizSchema);
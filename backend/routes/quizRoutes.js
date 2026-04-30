const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { createQuiz, getQuiz } = require("../controllers/quizController");

router.post("/create", protect, createQuiz);

router.get("/all", protect, getQuiz);

module.exports = router;
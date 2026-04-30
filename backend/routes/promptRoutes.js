const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const { savePrompt } = require("../controllers/promptController");

router.post("/save", protect, savePrompt);

module.exports = router;
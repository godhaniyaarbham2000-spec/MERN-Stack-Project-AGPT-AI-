const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const { getProtectedData } = require("../controllers/protectedController");

router.get("/data", protect, getProtectedData);

module.exports = router;
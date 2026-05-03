const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const promptRoutes = require("./routes/promptRoutes");
const quizRoutes = require("./routes/quizRoutes");
const aiRoutes = require("./routes/aiRoutes");





const app = express();

connectDB();

app.use(cors({
  origin: "*"
}));
app.use(express.json());


app.use("/api/users", userRoutes);

app.use("/api/protected", protectedRoutes);
app.use("/api/prompts", promptRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("AI Learning Assistant Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
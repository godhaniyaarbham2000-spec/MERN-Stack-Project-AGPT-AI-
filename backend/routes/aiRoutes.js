const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post("/ask", async (req, res) => {

try {

const { question } = req.body;

const chatCompletion = await groq.chat.completions.create({
messages: [
{
role: "user",
content: question
}
],
model: "llama-3.1-8b-instant"
});

const answer = chatCompletion.choices[0].message.content;

res.json({ answer });

} catch (error) {

console.log(error);
res.json({ answer: "AI Error" });

}

});

module.exports = router;
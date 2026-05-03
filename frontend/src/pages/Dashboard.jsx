import React, { useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {

    try {

      if (!question.trim()) {
        setAnswer("");
        return;
      }

      setAnswer("Thinking...");

      const res = await API.post("/ai/ask", { question });

      setAnswer(res.data.answer);

    } catch (err) {

      console.log(err);
      setAnswer("AI Error. Try again.");

    }

  };

  return (

    <div className="ai-container">

      <h1 className="ai-title">AGPT AI</h1>

      <div className="ai-input-box">

        <input
          type="text"
          placeholder="Ask anything..."
          value={question}
          onChange={(e) => {

            setQuestion(e.target.value);

            if (e.target.value === "") {
              setAnswer("");
            }

          }}
        />

        <button className="send-btn" onClick={askAI}>
          Ask AI
        </button>

      </div>

      <div className="answer-box">
        {answer}
      </div>

    </div>

  );

}

export default Dashboard;
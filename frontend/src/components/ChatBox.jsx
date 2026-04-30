import { useState } from "react";
import axios from "axios";

function ChatBox(){

const [question,setQuestion] = useState("");
const [answer,setAnswer] = useState("");

const askQuestion = async ()=>{

try{

const res = await axios.post(
"https://api.openai.com/v1/chat/completions",
{
model:"gpt-3.5-turbo",
messages:[
{role:"user",content:question}
]
},
{
headers:{
Authorization:`Bearer YOUR_API_KEY`
}
}
);

setAnswer(res.data.choices[0].message.content);

}catch(err){

setAnswer("Error getting AI response");
console.log(err);

}

};

return(

<div className="container">

<h2>AGPT Chat</h2>

<input
placeholder="Ask a question"
value={question}
onChange={(e)=>setQuestion(e.target.value)}
/>

<button onClick={askQuestion}>
Ask AI
</button>

<p>{answer}</p>

</div>

);

}

export default ChatBox;
import { useState } from "react";
import API from "../services/api";

function Quiz(){

const [question,setQuestion] = useState("");
const [option1,setOption1] = useState("");
const [option2,setOption2] = useState("");
const [option3,setOption3] = useState("");
const [option4,setOption4] = useState("");
const [answer,setAnswer] = useState("");

const createQuiz = async (e)=>{

e.preventDefault();

try{

const token = localStorage.getItem("token");

const res = await API.post("/quiz/create",{

question,
options:[option1,option2,option3,option4],
answer

},{
headers:{
Authorization:`Bearer ${token}`
}
});

console.log(res.data);

alert("Quiz Created Successfully");

setQuestion("");
setOption1("");
setOption2("");
setOption3("");
setOption4("");
setAnswer("");

}catch(err){

console.log(err);
alert("Quiz Create Failed");

}

};

return(

<div className="container">

<h2>Create Quiz</h2>

<form onSubmit={createQuiz}>

<input
placeholder="Question"
value={question}
onChange={(e)=>setQuestion(e.target.value)}
/>

<input
placeholder="Option 1"
value={option1}
onChange={(e)=>setOption1(e.target.value)}
/>

<input
placeholder="Option 2"
value={option2}
onChange={(e)=>setOption2(e.target.value)}
/>

<input
placeholder="Option 3"
value={option3}
onChange={(e)=>setOption3(e.target.value)}
/>

<input
placeholder="Option 4"
value={option4}
onChange={(e)=>setOption4(e.target.value)}
/>

<input
placeholder="Correct Answer"
value={answer}
onChange={(e)=>setAnswer(e.target.value)}
/>

<button type="submit">
Create Quiz
</button>

</form>

</div>

);

}

export default Quiz;
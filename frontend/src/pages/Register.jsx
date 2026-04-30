import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = async (e)=>{
e.preventDefault();

try{

const res = await API.post("/users/register",{
name,
email,
password
});

localStorage.setItem("token",res.data.token);

alert("Register Success");

navigate("/dashboard");

}catch(err){

alert("Register Failed");
console.log(err);

}

};

return(

<div className="container">

<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">
Register
</button>

</form>

</div>

);

}

export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e)=>{
e.preventDefault();

try{

const res = await API.post("/users/login",{
email,
password
});

localStorage.setItem("token",res.data.token);

alert("Login Success");

navigate("/dashboard");

}catch(err){

alert("User not found. Please register first");
console.log(err);

}

};

return(

<div className="container">

<h2>Login</h2>

<form onSubmit={handleLogin}>

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
Login
</button>

</form>

</div>

);

}

export default Login;
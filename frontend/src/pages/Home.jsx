import { useNavigate } from "react-router-dom";

function Home(){

const navigate = useNavigate();

return(

<div className="home">

<h1 className="logo">AGPT</h1>

<h2 className="subtitle">AI Learning Assistant</h2>

<div className="buttons">

<button onClick={()=>navigate("/register")}>
Register
</button>

<button onClick={()=>navigate("/login")}>
Login
</button>

</div>


</div>

);

}

export default Home;
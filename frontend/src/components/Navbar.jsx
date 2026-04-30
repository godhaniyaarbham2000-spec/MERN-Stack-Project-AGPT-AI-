import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="navbar">

<h2>AGPT</h2>

<div>

<Link to="/login">Login</Link>

<Link to="/register">Register</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/quiz">Quiz</Link>

</div>

</nav>

);

}

export default Navbar;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Quiz from "./pages/Quiz.jsx";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/register" element={<Register/>} />

<Route path="/login" element={<Login/>} />

<Route path="/dashboard" element={<Dashboard/>} />

<Route path="/quiz" element={<Quiz/>} />

</Routes>

</BrowserRouter>

);

}

export default App;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  // ✅ FRONTEND VALIDATION
  const validate = (name, email, password) => {

    if (!name || !email || !password) {
      return "All fields are required";
    }

    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }

    if (!email.includes("@")) {
      return "Email must contain @";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const msg = validate(name, email, password);

    if (msg) {
      setError(msg);
      return;
    }

    setError("");

    try {

      const res = await API.post("/users/register", {
        name,
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      alert("Register Success");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);
      alert("Register Failed");

    }
  };

  return (

    <div className="container">

      <h2>Register</h2>

      <form onSubmit={handleRegister}>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✅ ERROR SHOW */}
        {error && (
          <p style={{ color: "red", marginTop: "10px", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        <button type="submit">
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;
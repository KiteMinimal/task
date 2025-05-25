import React, { useState } from "react";
import "../styles/Login.css";
import RegisterModal from "../components/RegisterModal";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", {
        username,
        password,
      });

      const token = response.data.access_token;
      localStorage.setItem("token", token);

      navigate("/landing"); // ← CURRENT
    } catch (err) {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Not registered?{" "}
          <span className="register-link" onClick={() => setShowModal(true)}>
            Register here
          </span>
        </p>
      </form>

      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Login;

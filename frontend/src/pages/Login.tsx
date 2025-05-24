import React, { useState } from 'react';
import './Login.css';
import RegisterModal from '../components/RegisterModal';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send login request using Axios
    console.log({ username, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
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

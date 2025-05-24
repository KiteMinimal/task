import React, { useState } from 'react';
import './RegisterModal.css';

interface Props {
  onClose: () => void;
}

const RegisterModal: React.FC<Props> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call backend to register user
    console.log({ username, password });
    onClose(); // Close modal after registration
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Register</h2>

        <form onSubmit={handleRegister}>
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

          <button type="submit">Register</button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;

import React, { useState } from 'react';
import './RegisterModal.css';
import api from '../services/api'

interface Props {
  onClose: () => void;
}

const RegisterModal: React.FC<Props> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    await api.post('/register', {
      username,
      password,
    });

    alert('Registered successfully! Now login.');
    onClose(); // Close modal
  } catch (err) {
    alert('Registration failed. Try a different username.');
  }
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

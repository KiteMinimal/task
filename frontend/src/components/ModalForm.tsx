import React, { useState } from 'react';
import '../styles/Modal.css';
import LoadingModal from './LoadingModal';

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onClose(); // hide both modals after 3 seconds
    }, 5000);
  };


  return (
    <div className="modal-overlay">

        {isLoading && <LoadingModal />}

      <div className="modal-box">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>Lorem ipsum dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" placeholder="Name of the organisation" />
            <input type="text" placeholder="Contact number" />
          </div>
          <input type="email" placeholder="Enter your email ID" />
          <select>
            <option>Which category do you choose?</option>
          </select>
          <button type="submit">Submit</button>
        </form>

        <p className="terms">
          Submitting the form will accept the <a>Terms & Conditions</a> and <a>Privacy Policy</a>
        </p>
        <p className="login-note">
          Already have credentials? <span>Curator’s Login</span>
        </p>
      </div>
    </div>
  );
};

export default ModalForm;

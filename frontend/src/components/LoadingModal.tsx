import React from 'react';
import '../styles/LoadingModal.css';

const LoadingModal: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-box">
        <div className="spinner"></div>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta laborum ipsa adipisci at.</h4>
        <h3>Processing your request...</h3>
        <p>Please wait <span className="highlight">a moment</span></p>
      </div>
    </div>
  );
};

export default LoadingModal;

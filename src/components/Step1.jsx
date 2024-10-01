import React, { useState } from 'react';

const Step1 = ({ nextStep, formData, setFormData }) => {
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (!formData.name) {
      setError('Name is required');
    } else if (!formData.email) {
      setError('Email is required');
    } else if (!validateEmail(formData.email)) {
      setError('Please enter a valid email');
    } else {
      setError('');
      nextStep();  
    }
  };

  return (
    <div className="step-container">
      <h2>Step 1</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;

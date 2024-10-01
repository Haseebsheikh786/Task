import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.address) {
      setError('Address is required');
    } else if (!formData.city) {
      setError('City is required');
    } else {
      setError(''); 
      nextStep();  
    }
  };

  return (
    <div className="step-container">
      <h2>Step 2</h2>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;

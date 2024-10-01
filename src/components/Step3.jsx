import React, { useState } from 'react';

const Step3 = ({ prevStep, formData, setFormData, submitForm }) => {
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    const { phone, zip } = formData;

    if (!phone) {
      setError('Phone number is required');
    } else if (!zip) {
      setError('ZIP Code is required');
    } else {
      setError(''); 
      submitForm();  
      setSuccessMessage('Form submitted successfully!');  
    }
  };

  return (
    <div className="step-container">
      <h2>Step 3</h2>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label>ZIP Code</label>
        <input
          type="text"
          value={formData.zip}
          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        />
      </div>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}  
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;

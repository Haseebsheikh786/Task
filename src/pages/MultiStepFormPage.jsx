import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

const MultiStepFormPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    zip: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => setIsSubmitted(true);

  if (isSubmitted) {
    return <h2>Form Submitted Successfully!</h2>;
  }

  return (
    <div className="form-container">
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 2 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <Step3
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default MultiStepFormPage;

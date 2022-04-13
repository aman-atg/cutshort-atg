import { useState } from "react";
import "./App.scss";
import Input from "./components/Input";
import Stepper from "./components/Stepper";

const steps = [
  {
    title: "Welcome! First things first...",
    subTitle: "You can always change them later.",
    ctaText: "Create Workspace",
  },

  {
    title: "Let's set up a home for all your work",
    subTitle: "You can always create another workspace later.",
    ctaText: "Create Workspace",
  },

  {
    title: "How are you planning to use Eden?",
    subTitle: "We'll steamline your setup experience accordingly.",
    ctaText: "Create Workspace",
  },

  {
    title: "Congratulations, Eren!",
    subTitle: "You have completed onboarding, you can start using the Eden!",
    ctaText: "Launch Eden",
  },
];
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <h1>Step 1</h1>;
      case 1:
        return <h1>Step 2</h1>;
      case 2:
        return <h1>Step 3</h1>;
      default:
        return <h1>Step 1</h1>;
    }
  };

  const handleSubmit = () => {
    console.log("submit");

    // validation : show msg if not valid

    if (isLastStep) {
      // launch()
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };
  return (
    <div className="App">
      <div className="App_home">
        <h1 className="App_home_heading">Eden</h1>

        <Stepper
          styles={{ maxWidth: 600 }}
          steps={[1, 2, 3, 4]}
          currentStep={currentStep}
        />

        <div className={`App_home_content ${isLastStep ? "final-screen" : ""}`}>
          <div className="header">
            <h1 className="title">{steps[currentStep].title}</h1>
            <h2 className="subTitle"> {steps[currentStep].subTitle}</h2>
          </div>

          <div className="body">
            <Input
              name={`fullName${currentStep}`}
              label="Full Name"
              placeholder="Steve Jobs"
            />
            <Input
              name={`displayName${currentStep}`}
              label="Display Name"
              placeholder="Steve"
            />
          </div>
        </div>

        <button className="App_home_submit" onClick={handleSubmit}>
          {steps[currentStep].ctaText}
        </button>
      </div>
    </div>
  );
}

export default App;

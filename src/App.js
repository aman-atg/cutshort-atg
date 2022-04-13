import { useState } from "react";
import "./App.scss";
import Stepper from "./components/Stepper";

const steps = [1, 2, 3, 4];
function App() {
  const [currentStep, setCurrentStep] = useState(0);

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

  const getBtnText = () =>
    currentStep === steps.length - 1 ? "Launch Eden" : "Create Workspace";

  return (
    <div className="App">
      <div className="App_home">
        <h1 className="heading">Eden</h1>

        <Stepper steps={[1, 2, 3, 4]} currentStep={currentStep} />

        {renderStep(currentStep)}

        {/*  action button*/}

        <button>{getBtnText(currentStep)}</button>
      </div>
    </div>
  );
}

export default App;

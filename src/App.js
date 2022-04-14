import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "./App.scss";
import Input from "./components/Input";
import Stepper from "./components/Stepper";

const steps = [
  {
    id: "someId_1",
    title: "Welcome! First things first...",
    subTitle: "You can always change them later.",
    ctaText: "Create Workspace",
  },

  {
    id: "someId_2",
    title: "Let's set up a home for all your work",
    subTitle: "You can always create another workspace later.",
    ctaText: "Create Workspace",
  },

  {
    id: "someId_3",
    title: "How are you planning to use Eden?",
    subTitle: "We'll steamline your setup experience accordingly.",
    ctaText: "Create Workspace",
  },

  {
    id: "someId_4",
    title: "Congratulations, Eren!",
    subTitle: "You have completed onboarding, you can start using the Eden!",
    ctaText: "Launch Eden",
  },
];
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      someId_1: {
        fullName: "",
        displayName: "",
      },
      someId_2: {
        workspaceName: "",
        workspaceUrl: "",
      },
    },
  });

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <Controller
              render={({ field, fieldState: { error } }) => (
                <Input
                  name={`someId_1.fullName`}
                  label="Full Name"
                  placeholder="Steve Jobs"
                  error={error?.message}
                  {...field}
                />
              )}
              control={control}
              name="someId_1.fullName"
              rules={{ required: "Please enter your full name" }}
            />
            <Controller
              render={({ field, fieldState: { error } }) => (
                <Input
                  name={`someId_1.displayName`}
                  label="Display Name"
                  placeholder="Steve"
                  error={error?.message}
                  {...field}
                />
              )}
              control={control}
              name="someId_1.displayName"
              rules={{ required: "Please enter your display name" }}
            />
          </div>
        );
      case 1:
        return (
          <>
            <Controller
              render={({ field, fieldState: { error } }) => (
                <Input
                  name={`someId_2.workspaceName`}
                  label="Workspace Name"
                  placeholder="Eden"
                  error={error?.message}
                  {...field}
                />
              )}
              control={control}
              name="someId_2.workspaceName"
              rules={{ required: "Please enter workspace name" }}
            />

            <Controller
              render={({ field, fieldState: { error } }) => (
                <Input
                  name={`someId_2.workspaceUrl`}
                  label="Workspace URL"
                  placeholder="Example"
                  error={error?.message}
                  isOptional
                  leftDefault="www.eden.com/"
                  {...field}
                />
              )}
              control={control}
              name="someId_2.workspaceUrl"
            />
          </>
        );
      case 2:
        return <></>;
      default:
        return <h1>Step 1</h1>;
    }
  };

  const onSubmit = (data) => {
    console.log("submit", data, isValid);

    // validation : show msg if not valid

    if (isLastStep) {
      // launch()
      return;
    }
    // setTimeout(() => {
    setCurrentStep((prev) => prev + 1);
    // }, 1000);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="App_home">
        <h1 className="App_home_heading">Eden</h1>

        <Stepper
          styles={{ maxWidth: 400 }}
          steps={[1, 2, 3, 4]}
          currentStep={currentStep}
        />

        <div className={`App_home_content ${isLastStep ? "final-screen" : ""}`}>
          <div className="header">
            <h1 className="title">{steps[currentStep].title}</h1>
            <h2 className="subTitle"> {steps[currentStep].subTitle}</h2>
          </div>

          <div className="body">{renderStep()}</div>
        </div>

        <button className="App_home_submit" type="submit">
          {steps[currentStep].ctaText}
        </button>
      </form>
    </div>
  );
}

export default App;

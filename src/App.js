import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "./App.scss";
import CardInput from "./components/CardInput";
import Input from "./components/Input";
import Stepper from "./components/Stepper";
import { ReactComponent as CheckIcon } from "./assets/icons/check.svg";
import { ReactComponent as UserIcon } from "./assets/icons/user.svg";
import { ReactComponent as GroupIcon } from "./assets/icons/group.svg";

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

  const { handleSubmit, control } = useForm({
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
      someId_3: {
        useCase: "",
      },
    },
  });

  const renderCustomCard = (icon, title, desc) => (
    <div className="CustomCard">
      <div className="CustomCard_icon-container">{icon}</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );

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
        return (
          <div
            style={{
              marginBottom: 24,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Controller
              render={({ field, fieldState: { error } }) => (
                <CardInput
                  name="someId_3.useCase"
                  value="myself"
                  onChange={field.onChange}
                  error={error?.message}
                  isActive={field.value === "myself"}
                >
                  {renderCustomCard(
                    <UserIcon />,
                    "For myself",
                    "Write better. Think more clearly. Stay organized."
                  )}
                </CardInput>
              )}
              control={control}
              name="someId_3.useCase"
              rules={{ required: "Please enter your use case" }}
            />
            <Controller
              render={({ field, fieldState: { error } }) => (
                <CardInput
                  name="someId_3.useCase"
                  value="team"
                  onChange={field.onChange}
                  error={error?.message}
                  isActive={field.value === "team"}
                >
                  {renderCustomCard(
                    <GroupIcon />,
                    "With my team",
                    "Wikis, docs, tasks & projects, all in one place."
                  )}
                </CardInput>
              )}
              control={control}
              name="someId_3.useCase"
              rules={{ required: "Please enter your use case" }}
            />
          </div>
        );
      default:
        return;
    }
  };

  const onSubmit = (data) => {
    // console.log("submit", data);
    if (isLastStep) {
      // launch()
      console.log("Final Step :", data);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="App_home">
        <h1 className="App_home_heading">Eden</h1>

        <Stepper
          styles={{ maxWidth: 400 }}
          // steps={[1, 2, 3, 4]}
          length={steps.length}
          currentStep={currentStep}
          onClick={(step) => {
            // validateStep(step)
            if (step < currentStep) {
              setCurrentStep(step);
            }
          }}
        />

        <div className={`App_home_content ${isLastStep ? "final-screen" : ""}`}>
          <div className="final-icon">
            <CheckIcon />
          </div>
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

import React from "react";
import PropTypes from "prop-types";

const Stepper = ({ steps, currentStep, onClick }) => {
  return (
    <div className="App-Stepper">
      {steps.map((_, index) => {
        return (
          <div
            key={index}
            className={`App-Stepper_step ${
              currentStep === index ? "active" : ""
            }
            ${currentStep > index ? "visited" : ""}
            `}
            onClick={() => onClick(index)}
          >
            <div className="circle">{index + 1}</div>

            {index !== 0 && <div className="stepper-line left" />}

            {index !== steps.length - 1 && (
              <div className="stepper-line right" />
            )}
          </div>
        );
      })}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Stepper.defaultProps = {
  onClick: () => {},
};

export default Stepper;

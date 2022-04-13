import React from "react";
import PropTypes from "prop-types";

const Stepper = ({ styles, steps, currentStep, onClick }) => {
  return (
    <div className="App-Stepper" style={styles}>
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
  styles: PropTypes.object,
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Stepper.defaultProps = {
  styles: {},
  onClick: () => {},
};

export default Stepper;

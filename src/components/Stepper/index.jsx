import React from "react";
import PropTypes from "prop-types";

// user can pass steps or length of steps
const Stepper = ({ styles, steps, length, currentStep, onClick }) => {
  const stepsCount = steps.length ? steps.length : length;
  console.log({ stepsCount });
  return (
    <div className="App-Stepper" style={styles}>
      {[...Array(stepsCount)].map((_, index) => {
        return (
          <div
            key={index}
            className={`App-Stepper_step noSelect ${
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
  steps: PropTypes.array,
  length: PropTypes.number,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Stepper.defaultProps = {
  styles: {},
  steps: [],
  length: 0,
  onClick: () => {},
};

export default Stepper;

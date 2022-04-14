const Input = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  isOptional,
  leftDefault,
  styles,
  ...rest
}) => {
  return (
    <div className="App-Input">
      <label htmlFor={name}>
        {label}
        {isOptional && <span className="optional"> (optional)</span>}
      </label>
      <div className="App-Input_input-container">
        {leftDefault && <span className="left-default">{leftDefault}</span>}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={leftDefault ? "left-present" : ""}
          {...rest}
        />
      </div>
      {error && <div className="App-Input_error">{error}</div>}
    </div>
  );
};

export default Input;

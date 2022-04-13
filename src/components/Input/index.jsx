const Input = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  styles,
  ...rest
}) => {
  return (
    <div className="App-Input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="App-Input_input"
        {...rest}
      />
      {error && <div className="App-Input_error">{error}</div>}
    </div>
  );
};

export default Input;

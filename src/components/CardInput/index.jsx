const CardInput = ({
  name,
  isActive,
  value,
  onChange,
  error,
  children,
  ...rest
}) => {
  return (
    <button
      className={`App-CardInput ${isActive ? "active" : ""}`}
      onClick={() => onChange(value)}
      id={name}
      type="button"
      {...rest}
    >
      {children}
      {error && <div className="App-CardInput_error">{error}</div>}
    </button>
  );
};

export default CardInput;

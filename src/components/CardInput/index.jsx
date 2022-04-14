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
      className={`App-CardInput ${isActive ? "active" : ""} ${
        error ? "error" : ""
      }`}
      onClick={() => onChange(value)}
      id={name}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default CardInput;

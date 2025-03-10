import "./Input.scss";

interface InputTypes {
  inputClass?: string;
  labelClass?: string;
  label?: string;
  placeholder?: string;
  onChange?: Function;
  onBlur?: Function;
  value?: any;
  id?: string;
  name?: string;
  invertStyle?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  className?: string;
  register?: Function;
  required?: boolean;
  type?: string;
  hideLabel?: boolean;
}

const Input = (props: InputTypes) => {
  const {
    inputClass,
    labelClass,
    placeholder,
    label,
    onChange,
    value,
    id,
    name,
    invertStyle,
    errorMsg,
    hasError,
    className,
    register,
    required = false,
    hideLabel,
    onBlur,
    type = "text",
  } = props;

  return (
    <>
      <div className={`text-input ${className}`}>
        {!hideLabel && <label className={`label ${labelClass}`}>{label}</label>}
        <input
          className={`input ${
            invertStyle ? "input-invert" : ""
          } ${inputClass} ${hasError ? "input-error-input" : ""}`}
          placeholder={placeholder}
          type={type}
          onChange={(e) => onChange?.(e)}
          value={value}
          id={id}
          name={name}
          onBlur={onBlur}
          {...register?.(name, { required })}
        />
        {hasError && (
          <span className="input-error">
            {errorMsg ? errorMsg : `${label || name} is required.`}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;

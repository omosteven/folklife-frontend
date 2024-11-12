import "./DatePicker.scss";
import Icon from "../Icon";

interface DatePickerProps {
  className?: string;
  placeHolder?: string;
  labelClass?: string;
  label?: string;
  onChange?: Function;
  onBlur?: Function;
  required?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  value?: string;
  id?: string;
  name?: string;
  invertStyle?: boolean;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    className,
    labelClass,
    label,
    onChange,
    value,
    id,
    name,
    invertStyle,
    hasError,
    errorMsg,
    onBlur,
  } = props;
  return (
    <>
      <div className={`date-picker-input  ${className}`}>
        <label className={`${labelClass} label`}>{label}</label>
        <div className={`${invertStyle ? "div-invert" : ""}`}>
          <input
            type="date"
            onChange={(e) => onChange?.(e)}
            // onBlur={onBlur}
            value={value}
            id={id}
            name={name}
          />

          <Icon icon="calendar" className="icon" />
        </div>
        {hasError && (
          <span className="input-error">
            {errorMsg ? errorMsg : `${label || name} is required.`}
          </span>
        )}
      </div>
    </>
  );
};

export default DatePicker;

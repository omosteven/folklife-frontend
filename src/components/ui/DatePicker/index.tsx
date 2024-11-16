import "./DatePicker.scss";
import Icon from "../Icon";
import { useState } from "react";

interface DatePickerProps {
  className?: string;
  placeHolder?: string;
  labelClass?: string;
  label?: string;
  onChange?: (value: string) => void;
  onBlur?: Function;
  required?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  value?: string;
  id?: string;
  name?: string;
  invertStyle?: boolean;
  min?: string; // ISO string
  max?: string; // ISO string
}


const formatDateToDDMMYYYY = (isoDate: string) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
};

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
    min,
    max,
  } = props;

  
  const [displayValue, setDisplayValue] = useState(() =>
    value ? formatDateToDDMMYYYY(value) : ""
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value; // ISO format (yyyy-mm-dd)
    setDisplayValue(formatDateToDDMMYYYY(newValue)); // Update visible format
    onChange?.(newValue); // Pass ISO format to Formik
  };


  return (
    <>
      <div className={`date-picker-input ${className}`}>
        <label className={`${labelClass} label`}>{label}</label>
        <div className={`${invertStyle ? "div-invert" : ""}`}>
          <input
            type="date"
            value={value} // Use ISO date for form binding
            id={id}
            name={name}
            min={min}
            max={max}
            onChange={handleInputChange}
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

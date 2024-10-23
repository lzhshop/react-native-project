/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FormField = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id="name"
        placeholder={placeholder}
        {...register(id)}
        className="form-input"
      />
      {errors && <p className="form-error">{errors.message}</p>}
    </div>
  );
};

export default FormField;

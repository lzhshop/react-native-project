/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ErrorMessage, Field } from "formik";

const FormikFormField = ({ label, id, name, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-input"
      />
      <ErrorMessage name={name} component={"p"} className="form-error" />
    </div>
  );
};

export default FormikFormField;

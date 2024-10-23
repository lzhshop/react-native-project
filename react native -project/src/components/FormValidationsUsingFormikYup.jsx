/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikFormField from "./FormikFormField";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be 10 digit long")
    .required("Mobile number is required"),
  postalCode: Yup.string()
    .matches(/^\d{6}$/, "Postal Code must be 6 digit long")
    .required("Postal Code is required"),
  password: Yup.string()
    .matches(
      /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])/,
      "Password must include atleast on uppercase letter, on lowercase letter, on number and one special characters"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password dont match")
    .required("Confirm your password"),
});

const FormValidationsUsingFormikYup = () => {
  const onSubmit = (data) => {
    console.log(data);

    // call the api to store the form data into the database
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto p-8 shadow-lg rounded-lg bg-gray-50 flex items-center justify-start flex-col">
        <h2 className="text-xl text-center mb-6 text-gray-800 font-semibold">
          Form validations using Formik & Yup
        </h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            postalCode: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6 w-full">
              <FormikFormField
                label={"Name"}
                id={"name"}
                name={"name"}
                placeholder={"Enter your name"}
              />

              <FormikFormField
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />

              <FormikFormField
                label="Mobile Number"
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Enter your mobile number"
              />

              <FormikFormField
                label="Postal Code"
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="Enter your postal code"
              />

              <FormikFormField
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />

              <FormikFormField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
              {/* submit button */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="p-3 text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormValidationsUsingFormikYup;

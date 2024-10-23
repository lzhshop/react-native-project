/* eslint-disable no-unused-vars */
import React from "react";
import {
  FormValidationsUsingFormikYup,
  FormValidationsUsingReactHookForm,
} from "./components";

const App = () => {
  return (
    <div className="container max-w-screen-2xl flex flex-col px-4 mx-auto">
      <div className="w-full mt-12 flex items-center justify-center flex-col gap-12">
        <h2 className="text-3xl font-semibold text-gray-700">
          Custom Form Validations
        </h2>

        {/* form validations usign react-hook-form */}
        <FormValidationsUsingReactHookForm />

        {/* form validaiton using formik & yup */}

        <FormValidationsUsingFormikYup />
      </div>
    </div>
  );
};

export default App;

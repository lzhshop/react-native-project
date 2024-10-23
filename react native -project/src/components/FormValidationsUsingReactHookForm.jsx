/* eslint-disable no-unused-vars */
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";

// validation schema for our form
const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digit long"),
    postalCode: z.string().regex(/^\d{6}$/, "postal Code must be 6 digit long"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])/,
        "Password must include atleast on uppercase letter, on lowercase letter, on number and one special characters"
      ),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dont match",
    path: ["confirmPassword"],
  });

const FormValidationsUsingReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    // call the api to store the form data into the database
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto p-8 shadow-lg rounded-lg bg-gray-50 flex items-center justify-start flex-col">
        <h2 className="text-xl text-center mb-6 text-gray-800 font-semibold">
          Form validations using React Hook Form & Zod
        </h2>

        {/* form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full"
        >
          {/* Name field */}

          <FormField
            label={"Name"}
            placeholder={"Enter your name"}
            id={"name"}
            register={register}
            errors={errors.name}
          />

          {/* Email Field */}
          <FormField
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            errors={errors.email}
          />

          {/* Mobile Field */}
          <FormField
            label="Mobile"
            id="mobile"
            placeholder="Enter your mobile number"
            register={register}
            errors={errors.mobile}
          />

          {/* Postal Code Field */}
          <FormField
            label="Postal Code"
            id="postalCode"
            placeholder="Enter your postal code"
            register={register}
            errors={errors.postalCode}
          />

          {/* Password Field */}
          <FormField
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            errors={errors.password}
          />

          {/* Confirm Password Field */}
          <FormField
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            register={register}
            errors={errors.confirmPassword}
          />

          {/* submit button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="p-3 text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValidationsUsingReactHookForm;

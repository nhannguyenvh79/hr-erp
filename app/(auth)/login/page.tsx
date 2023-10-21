"use client";

import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";

interface FormValues {
  eCode: string;
  password: string;
  isRemember: boolean;
}

const Page = () => {
  const initialValues: FormValues = {
    eCode: "",
    password: "",
    isRemember: false,
  };

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: Yup.object({
      eCode: Yup.string()
        .required("Employee ID is required")
        .min(6, "Please enter a valid employee ID"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Please enter a valid password"),
      isRemember: Yup.boolean(),
    }),

    onSubmit: async (values: FormValues) => {
      console.log(values);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-200">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
        {/* left side */}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center p-8 md:p-14 w-full"
        >
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
          <div className="py-4 relative">
            <span className="mb-2 text-md">Employee ID</span>
            <input
              type="text"
              className="auth-input"
              name="eCode"
              id="eCode"
              value={formik.values.eCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.eCode && formik.touched.eCode && (
              <span className="error-span">{formik.errors.eCode}</span>
            )}
          </div>
          <div className="py-4 relative">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              className="auth-input"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <span className="error-span">{formik.errors.password}</span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full py-4">
            <div className="mr-24">
              <input
                type="checkbox"
                name="isRemember"
                id="isRemember"
                className="mr-2"
                onChange={formik.handleChange}
              />
              <span className="text-sm">Remember me</span>
            </div>
            <span className="font-bold text-sm">Forgot password?</span>
          </div>
          <button type="submit" className="auth-submit-btn">
            Sign in
          </button>

          <div className="text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <Link href={"/register"} className=" text-sm font-bold text-black">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

"use client";

import authAPI from "@/lib/apis/authAPI";
import { getMe } from "@/lib/redux/authSlice";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

interface FormValues {
  eCode: string;
  password: string;
  isRemember: boolean;
}

const Page = () => {
  const dispatch = useDispatch();
  const [error, setError] = React.useState("");

  const router = useRouter();
  const initialValues: FormValues = {
    eCode: "",
    password: "",
    isRemember: false,
  };

  const handleLogin = async (values: FormValues) => {
    const data = {
      eCode: values.eCode,
      password: values.password,
    };
    try {
      const resLogin = await authAPI.login(data);
      localStorage.setItem("erptk", resLogin.data.accessToken);

      const resGetMe = await authAPI.getMe();
      dispatch(getMe(resGetMe.data.userInfo));

      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
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

    onSubmit: handleLogin,
  });

  useEffect(() => {
    const autoLogin = async () => {
      if (localStorage.getItem("erptk")) {
        try {
          const resGetMe = await authAPI.getMe();
          dispatch(getMe(resGetMe.data.userInfo));

          router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    };
    autoLogin();
  }, []);

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
            <span className="mb-2 text-sm">Username or your ID:</span>
            <input
              type="text"
              className="auth-input input max-w-none text-sm"
              name="eCode"
              id="eCode"
              placeholder="Enter your id or username"
              value={formik.values.eCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.eCode && formik.touched.eCode && (
              <span className="error-span">{formik.errors.eCode}</span>
            )}
          </div>
          <div className="py-4 relative">
            <span className="mb-2 text-sm">Password:</span>
            <input
              type="password"
              name="password"
              id="password"
              className="auth-input input max-w-none text-sm"
              placeholder="Enter your password"
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
          <p className="text-center text-sm text-red-500 p-2">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Page;

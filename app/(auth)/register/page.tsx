"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-[80vw] lg:w-[40vw] sm:w-[60vw] bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full py-16 px-12">
            <h2 className="mb-3 text-4xl font-bold">Register</h2>
            <p className="font-light text-gray-400 mb-8">
              Create your account to get started.
            </p>
            <form action="#">
              <div className="mt-5">
                <input
                  className="input max-w-none text-sm"
                  placeholder="username"
                />
              </div>

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Employee Id"
                  className="input max-w-none text-sm"
                />
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="input max-w-none text-sm"
                />
              </div>

              <div className="mt-5">
                <select className="select max-w-none text-sm">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input max-w-none text-sm"
                />
              </div>

              <div
                className="my-5"
                onClick={() => {
                  toast.success("Register Success");
                }}
              >
                <button className="auth-submit-btn">Register Now</button>
              </div>
              <Link href={"/login"} className="font-bold text-black">
                Click to login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

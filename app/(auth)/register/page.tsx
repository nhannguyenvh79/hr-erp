import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-fit bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full py-16 px-12">
            <h2 className="mb-3 text-4xl font-bold">Register</h2>
            <p className="font-light text-gray-400 mb-8">
              Create your account to get started.
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="auth-input"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="auth-input"
                />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="auth-input" />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="auth-input"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="auth-input"
                />
              </div>

              <div className="my-5">
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

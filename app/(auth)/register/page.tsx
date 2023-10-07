import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
    >
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
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>

              <div className="my-5">
                <button className="w-full bg-sky-800 border border-sky-800 text-white p-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-gray-300">
                  Register Now
                </button>
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

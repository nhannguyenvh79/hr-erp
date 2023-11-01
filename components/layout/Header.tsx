"use client";

import { RootState } from "@/lib/redux/store";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import Account from "../dropdown/Account";

const Header = () => {
  const { isLogin, userInfo } = useSelector((state: RootState) => state.auth);

  return (
    <header className="w-100 h-20 bg-sky-600 text-white flex flex-row-reverse justify-start items-center px-5 gap-4 sticky top-0 z-40">
      <div className="flex justify-center items-center">
        {isLogin && <Account img={userInfo?.employee?.image} />}
      </div>

      <div className="relative">
        <Image src="/assets/alert.svg" alt="logo" width={30} height={30} />
        <div className="bg-red-500 text-white text-xs rounded-full absolute -top-2 -right-2 w-5 min-w-max h-5 flex justify-center items-center">
          <p>2</p>
        </div>
      </div>

      <div className="relative flex gap-2 items-stretch">
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search..."
          className="px-2 py-1 placeholder-blueGray-300 text-gray-400 relative bg-white  rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
        />
        <label
          htmlFor="search"
          className="text-gray-400 absolute right-3 top-2/4 -translate-y-2/4"
        >
          <BsSearch />
        </label>
      </div>
    </header>
  );
};

export default Header;

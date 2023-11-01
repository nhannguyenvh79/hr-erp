import { logout } from "@/lib/redux/authSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";

const Account = ({ img }: { img: string }) => {
  const dispatch = useDispatch();
  return (
    <div className="dropdown">
      <label className="" tabIndex={0}>
        <Image
          src={img}
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </label>
      <div className="dropdown-menu text-gray-500">
        <Link href={"/profile"} className="dropdown-item text-sm text-gray-500">
          Profile
        </Link>
        <Link href={"/account"} className="dropdown-item text-sm text-gray-500">
          Account settings
        </Link>
        <Link
          href={"/login"}
          className="dropdown-item text-sm text-red-500 flex flex-row items-center gap-2"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <span className=" block w-fit">Logout</span>
          <LuLogOut />
        </Link>
      </div>
    </div>
  );
};

export default Account;

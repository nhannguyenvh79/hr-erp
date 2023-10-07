"use client";

import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  console.log(userInfo);
  return (
    <div className="bg-slate-100 min-h-screen p-3">
      <p>Chat</p>
    </div>
  );
}

"use client";

import { RootState } from "@/lib/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth.isLogin);
  return (
    <div className="bg-slate-100 min-h-screen p-3">
      <p>recruitment</p>
    </div>
  );
}

"use client";

import "../globals.css";
import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import LoginPage from "../(auth)/login/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  if (!isLogin) {
    return <LoginPage />;
  }

  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="flex-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/layout/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERP",
  description: "ERP for management HR in the company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <SideBar />
          <div className="flex-auto">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

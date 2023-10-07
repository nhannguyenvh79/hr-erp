import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import { ReduxProviders } from "@/redux/ReduxProviders";

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
        <ReduxProviders>
          <div className="flex flex-row">
            <SideBar />
            <div className="flex-auto">
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </ReduxProviders>
      </body>
    </html>
  );
}

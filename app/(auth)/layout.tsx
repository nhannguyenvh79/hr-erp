import { Metadata } from "next";
import "../globals.css";
import { ReduxProviders } from "@/lib/redux/ReduxProviders";
import { Inter } from "next/font/google";

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
        <ReduxProviders>{children}</ReduxProviders>
      </body>
    </html>
  );
}

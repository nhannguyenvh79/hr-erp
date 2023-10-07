import { Metadata } from "next";
import "../globals.css";

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
      <body>{children}</body>
    </html>
  );
}

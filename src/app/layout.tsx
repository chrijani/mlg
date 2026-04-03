import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariotti Law Group | Corporate · Real Estate · Wills & Estates",
  description:
    "Mariotti Law Group provides trusted legal services in Corporate Law, Real Estate, and Wills & Estates across Ontario, Canada.",
  keywords: [
    "law firm",
    "corporate law",
    "real estate lawyer",
    "wills and estates",
    "Ontario lawyer",
    "Mariotti Law Group",
  ],
  openGraph: {
    title: "Mariotti Law Group",
    description:
      "Trusted legal services in Corporate Law, Real Estate, and Wills & Estates.",
    url: "https://mariottilaw.ca",
    siteName: "Mariotti Law Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

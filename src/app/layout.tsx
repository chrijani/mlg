import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariotti Law Group | Estate Planning · Real Estate · Corporate Law",
  description:
    "Mariotti Law Group has advised Ontario families, lenders, and businesses since 1965. Estate planning, mortgage enforcement, commercial real estate, and corporate transactions.",
  keywords: [
    "law firm",
    "estate planning",
    "wills",
    "mortgage enforcement",
    "commercial real estate",
    "corporate law",
    "Ontario lawyer",
    "Mariotti Law Group",
  ],
  openGraph: {
    title: "Mariotti Law Group",
    description:
      "Protecting what you've built. Planning for what's next. Ontario's trusted law firm since 1965.",
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
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

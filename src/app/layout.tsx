import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariotti Law Group | Estate Planning, Mortgage Enforcement, Real Estate, Corporate Law | Ontario",
  description:
    "Mariotti Law Group has advised Ontario families, lenders, and businesses since 1965. Estate planning. Mortgage enforcement. Real estate. Private lending. Corporate transactions. Five lawyers. Seven practices.",
  keywords: [
    "law firm",
    "estate planning",
    "wills",
    "mortgage enforcement",
    "private lending",
    "commercial real estate",
    "corporate law",
    "Ontario lawyer",
    "Windsor lawyer",
    "Mariotti Law Group",
  ],
  authors: [{ name: "Mariotti Law Group" }],
  robots: "index, follow",
  openGraph: {
    title: "Mariotti Law Group | Estate Planning, Mortgage Enforcement, Real Estate, Corporate Law | Ontario",
    description:
      "Mariotti Law Group has advised Ontario families, lenders, and businesses since 1965. Estate planning. Mortgage enforcement. Real estate. Private lending. Corporate transactions.",
    url: "https://mariottilaw.ca",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariotti Law Group | Estate Planning, Mortgage Enforcement, Real Estate, Corporate Law | Ontario",
    description:
      "Mariotti Law Group has advised Ontario families, lenders, and businesses since 1965. Five lawyers. Seven practices.",
    images: ["https://mariottilaw.ca/og-image.jpg"],
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Windsor",
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}

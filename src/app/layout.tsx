import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariotti Law Group | Windsor Ontario Law Firm | Est. 1965",
  description:
    "Windsor Ontario law firm advising families, lenders, and businesses since 1965. Estate planning, mortgage enforcement, private lending, real estate, corporate.",
  keywords: [
    "Windsor Ontario law firm",
    "estate planning lawyer Ontario",
    "mortgage enforcement lawyer Ontario",
    "private lending lawyer Ontario",
    "real estate lawyer Windsor Ontario",
    "business lawyer Windsor Ontario",
    "probate lawyer Ontario",
    "Mariotti Law Group",
  ],
  authors: [{ name: "Mariotti Law Group" }],
  robots: "index, follow",
  alternates: { canonical: "https://mariottilaw.ca" },
  openGraph: {
    title: "Mariotti Law Group | Windsor Ontario Law Firm | Est. 1965",
    description:
      "Windsor Ontario law firm advising families, lenders, and businesses since 1965. Estate planning, mortgage enforcement, private lending, real estate, corporate.",
    url: "https://mariottilaw.ca",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/assets/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariotti Law Group | Windsor Ontario Law Firm | Est. 1965",
    description:
      "Windsor Ontario law firm advising families, lenders, and businesses since 1965. Estate planning, mortgage enforcement, private lending, real estate, corporate.",
    images: ["https://mariottilaw.ca/assets/images/og-image.jpg"],
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

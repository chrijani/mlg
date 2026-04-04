import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ScrollAnimations from "../../ScrollAnimations";

export const metadata: Metadata = {
  title: "Christian Mariotti | Lawyer | Mariotti Law Group Windsor",
  description:
    "Christian Mariotti, lawyer at Mariotti Law Group in Windsor, Ontario. Real estate, private lending, and mortgage enforcement.",
  alternates: { canonical: "https://mariottilaw.ca/team/christian-mariotti" },
  openGraph: {
    title: "Christian Mariotti | Lawyer | Mariotti Law Group Windsor",
    description:
      "Christian Mariotti, lawyer at Mariotti Law Group in Windsor, Ontario. Real estate, private lending, and mortgage enforcement.",
    url: "https://mariottilaw.ca/team/christian-mariotti",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/assets/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Mariotti | Lawyer | Mariotti Law Group Windsor",
    description:
      "Christian Mariotti, lawyer at Mariotti Law Group in Windsor, Ontario. Real estate, private lending, and mortgage enforcement.",
    images: ["https://mariottilaw.ca/assets/images/og-image.jpg"],
  },
};

const relatedPractices = [
  { number: "03", name: "Mortgage Enforcement", href: "/mortgage-enforcement" },
  { number: "04", name: "Private Lending", href: "/private-lending" },
  { number: "05", name: "Real Estate Transactions", href: "/real-estate-transactions" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christian Mariotti",
    jobTitle: "Lawyer",
    worksFor: {
      "@type": "LegalService",
      name: "Mariotti Law Group",
      url: "https://mariottilaw.ca",
    },
    url: "https://mariottilaw.ca/team/christian-mariotti",
    telephone: "+1-519-997-3775",
    email: "info@mariottilaw.ca",
    address: {
      "@type": "PostalAddress",
      streetAddress: "625 Erie Street East",
      addressLocality: "Windsor",
      addressRegion: "ON",
      postalCode: "N9A 3Y1",
      addressCountry: "CA",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mariottilaw.ca/" },
      { "@type": "ListItem", position: 2, name: "Team", item: "https://mariottilaw.ca/team" },
      { "@type": "ListItem", position: 3, name: "Christian Mariotti", item: "https://mariottilaw.ca/team/christian-mariotti" },
    ],
  },
];

export default function ChristianMariottiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero page-hero-short" id="main-content">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/team">Team</a>
            <span className="sep">/</span>
            Christian Mariotti
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="bio-section">
        <div className="container">
          <div className="bio-grid">
            {/* Sidebar */}
            <div className="bio-sidebar fade-in">
              <div className="bio-photo-placeholder">
                <span>CM</span>
              </div>
              <h1 className="bio-name">Christian Mariotti</h1>
              <p className="bio-focus">Real Estate, Private Lending, Mortgage Enforcement</p>
              <div className="bio-contact-divider"></div>
              <div className="bio-contact">
                <a href="mailto:info@mariottilaw.ca" className="bio-contact-link">info@mariottilaw.ca</a>
                <a href="tel:+15199973775" className="bio-contact-link">519-997-3775</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="bio-content fade-in s2">
              <p className="opener">
                Christian advises private lenders, mortgage investment corporations, and real estate investors on lending transactions, mortgage enforcement, and property acquisitions across Ontario. His clients are lenders who need documents built for enforcement and borrowers who have stopped paying.
              </p>
              <p>
                His practice spans the full lifecycle of a private mortgage. From structuring the loan documentation and closing the transaction through to power-of-sale proceedings, receivership applications, and personal judgment on guarantees when borrowers default. He handles residential and commercial real estate closings for investors and developers.
              </p>

              <h3>Education and Credentials</h3>
              <ul className="bio-credentials">
                <li>Called to the Ontario Bar, [YEAR]</li>
                <li>[LAW SCHOOL], J.D.</li>
                <li>[UNDERGRADUATE INSTITUTION], [DEGREE]</li>
              </ul>

              <p className="bio-personal">
                [Personal note to be added.]
              </p>

              <Link href="/team" className="bio-back-link">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "0.4rem" }}>
                  <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Back to Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practices */}
      <section className="bio-related">
        <div className="container">
          <span className="text-sm-label text-gray" style={{ display: "block", marginBottom: "1.5rem" }}>Related Practice Areas</span>
          <div className="bio-related-grid">
            {relatedPractices.map((p) => (
              <Link key={p.href} href={p.href} className="bio-related-card">
                <span className="bio-related-number">{p.number}</span>
                <span className="bio-related-name">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

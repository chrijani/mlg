import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ScrollAnimations from "../../ScrollAnimations";

export const metadata: Metadata = {
  title: "Christian Mariotti — Mariotti Law Group",
  description:
    "Christian Mariotti advises private lenders, mortgage investment corporations, and real estate investors on lending transactions, mortgage enforcement, and real estate closings across Ontario.",
  openGraph: {
    title: "Christian Mariotti — Mariotti Law Group",
    description:
      "Real Estate, Private Lending, Mortgage Enforcement.",
    url: "https://mariottilaw.ca/team/christian-mariotti",
    siteName: "Mariotti Law Group",
    type: "website",
  },
};

const relatedPractices = [
  { number: "03", name: "Mortgage Enforcement", href: "/mortgage-enforcement" },
  { number: "04", name: "Private Lending", href: "/private-lending" },
  { number: "05", name: "Real Estate Transactions", href: "/real-estate-transactions" },
];

export default function ChristianMariottiPage() {
  return (
    <>
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
              <h2 className="bio-name">Christian Mariotti</h2>
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

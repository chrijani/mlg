import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Our Lawyers | Mariotti Law Group | Ontario",
  description:
    "Five lawyers with defined areas of practice. Estate planning, mortgage enforcement, real estate, private lending, corporate law. Mariotti Law Group, Windsor, Ontario.",
  alternates: { canonical: "https://mariottilaw.ca/team" },
  openGraph: {
    title: "Our Lawyers | Mariotti Law Group | Ontario",
    description:
      "Five lawyers with defined areas of practice. Estate planning, mortgage enforcement, real estate, private lending, corporate law. Mariotti Law Group, Windsor, Ontario.",
    url: "https://mariottilaw.ca/team",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Lawyers | Mariotti Law Group | Ontario",
    description: "Five lawyers with defined areas of practice. Mariotti Law Group, Windsor, Ontario.",
    images: ["https://mariottilaw.ca/og-image.jpg"],
  },
};

const lawyers = [
  {
    name: "Christian Mariotti",
    initials: "CM",
    focus: "Real Estate, Private Lending, Mortgage Enforcement",
    slug: "christian-mariotti",
  },
  {
    name: "Christian Janisse",
    initials: "CJ",
    focus: "Practice focus to be confirmed",
    slug: "christian-janisse",
  },
  {
    name: "David Coscarella",
    initials: "DC",
    focus: "Practice focus to be confirmed",
    slug: "david-coscarella",
  },
  {
    name: "Joya Innocente",
    initials: "JI",
    focus: "Practice focus to be confirmed",
    slug: "joya-innocente",
  },
  {
    name: "Lauren Del Greco",
    initials: "LDG",
    focus: "Practice focus to be confirmed",
    slug: "lauren-del-greco",
  },
];

function ArrowSVG() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "0.4rem" }}>
      <path d="M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 5H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function TeamPage() {
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
            Team
          </div>
          <h1 className="fade-in s1">
            Five lawyers. Defined areas of practice. The person advising you has seen your situation before.
          </h1>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-grid-section">
        <div className="container">
          <div className="team-card-grid">
            {lawyers.map((lawyer, i) => (
              <Link
                key={lawyer.slug}
                href={`/team/${lawyer.slug}`}
                className={`team-card fade-in stagger-${(i % 3) + 1}`}
              >
                <div className="team-card-photo">
                  <span className="team-card-initials">{lawyer.initials}</span>
                </div>
                <div className="team-card-name">{lawyer.name}</div>
                <div className="team-card-focus">{lawyer.focus}</div>
                <div className="team-card-link">
                  View profile <ArrowSVG />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="text-sm-label text-gray fade-in" style={{ display: "block", marginBottom: "1rem" }}>
            Start Here
          </span>
          <h2 className="fade-in s1">
            The right lawyer for your matter depends on what you are facing.
          </h2>
          <p className="fade-in s2">
            Tell us your situation. We will connect you with the member of our team whose practice matches your needs.
          </p>
          <div className="cta-buttons fade-in s3">
            <a href="tel:+15199973775" className="btn">Call Us</a>
            <a href="mailto:info@mariottilaw.ca" className="btn btn-filled">Send an Email</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Mariotti Law Group | Windsor Ontario",
  description:
    "Contact Mariotti Law Group at 625 Erie Street East, Windsor Ontario. Call 519-997-3775 or email info@mariottilaw.ca to schedule a consultation.",
  alternates: { canonical: "https://mariottilaw.ca/contact" },
  openGraph: {
    title: "Contact | Mariotti Law Group | Windsor Ontario",
    description:
      "Contact Mariotti Law Group at 625 Erie Street East, Windsor Ontario. Call 519-997-3775 or email info@mariottilaw.ca to schedule a consultation.",
    url: "https://mariottilaw.ca/contact",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/assets/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mariotti Law Group | Windsor Ontario",
    description:
      "Contact Mariotti Law Group at 625 Erie Street East, Windsor Ontario. Call 519-997-3775 or email info@mariottilaw.ca.",
    images: ["https://mariottilaw.ca/assets/images/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mariottilaw.ca/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://mariottilaw.ca/contact" },
  ],
};

export default function ContactPage() {
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
            Contact
          </div>
          <h1 className="fade-in s1">
            A conversation is the place to start.
          </h1>
          <p className="lead fade-in s2">
            Whether you need to plan an estate, close a transaction, enforce a mortgage, or
            structure a business, we are available to discuss your situation and explain how
            we can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="content-section">
        <div className="container">
          <div className="contact-grid">

            {/* Left Column: Details */}
            <div className="contact-details fade-in">
              <div className="contact-block">
                <h3>Office</h3>
                <p>
                  Mariotti Law Group<br />
                  Ontario, Canada
                </p>
              </div>

              <div className="contact-block">
                <h3>Telephone</h3>
                <p>
                  <a href="tel:+15199973775" className="contact-link">519-997-3775</a>
                </p>
              </div>

              <div className="contact-block">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@mariottilaw.ca" className="contact-link">info@mariottilaw.ca</a>
                </p>
              </div>

              <div className="contact-block">
                <h3>Hours</h3>
                <p>
                  Monday to Friday<br />
                  9:00 a.m. to 5:00 p.m.
                </p>
                <p className="contact-note">
                  Consultations by appointment. Evening and weekend availability on request.
                </p>
              </div>

              <div className="contact-divider-line" />

              <div className="contact-block">
                <h3>What to expect</h3>
                <p>
                  Initial consultations are typically 30 minutes. We will ask about your situation,
                  identify the legal issues involved, and explain your options. If we are the right
                  firm for the matter, we will outline the next steps and the expected costs before
                  any work begins.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-form-wrap fade-in s2">
              <div className="contact-form-header">
                <span className="text-sm-label">Schedule a Consultation</span>
                <h2>Tell us about your matter.</h2>
                <p>
                  Provide a brief description of your situation and we will respond within one
                  business day.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Practice Areas Reference */}
      <section className="contact-practices">
        <div className="container">
          <div className="contact-practices-header fade-in">
            <span className="text-sm-label">How We Can Help</span>
            <h2>Select the area most relevant to your matter.</h2>
          </div>
          <div className="contact-practices-grid">
            <a href="/estate-planning" className="contact-practice-card fade-in s1">
              <span className="contact-practice-number">01</span>
              <span className="contact-practice-name">Wills &amp; Estate Planning</span>
            </a>
            <a href="/estate-administration" className="contact-practice-card fade-in s2">
              <span className="contact-practice-number">02</span>
              <span className="contact-practice-name">Estate Administration</span>
            </a>
            <a href="/mortgage-enforcement" className="contact-practice-card fade-in s3">
              <span className="contact-practice-number">03</span>
              <span className="contact-practice-name">Mortgage Enforcement</span>
            </a>
            <a href="/private-lending" className="contact-practice-card fade-in s4">
              <span className="contact-practice-number">04</span>
              <span className="contact-practice-name">Private Lending</span>
            </a>
            <a href="/real-estate-transactions" className="contact-practice-card fade-in s5">
              <span className="contact-practice-number">05</span>
              <span className="contact-practice-name">Real Estate Transactions</span>
            </a>
            <a href="/real-estate-development" className="contact-practice-card fade-in s6">
              <span className="contact-practice-number">06</span>
              <span className="contact-practice-name">Real Estate Development</span>
            </a>
            <a href="/corporate-commercial" className="contact-practice-card fade-in s1">
              <span className="contact-practice-number">07</span>
              <span className="contact-practice-name">Corporate &amp; Commercial</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

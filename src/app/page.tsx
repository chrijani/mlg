import ScrollAnimations from "./ScrollAnimations";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Mariotti Law Group",
  description: "Ontario law firm advising families, lenders, and businesses since 1965. Estate planning, mortgage enforcement, real estate, private lending, corporate transactions.",
  url: "https://mariottilaw.ca",
  telephone: "+1-519-997-3775",
  faxNumber: "+1-226-620-1943",
  email: "info@mariottilaw.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "625 Erie Street East",
    addressLocality: "Windsor",
    addressRegion: "ON",
    postalCode: "N9A 3Y1",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.3149, longitude: -83.0364 },
  foundingDate: "1965",
  founder: { "@type": "Person", name: "Anthony Mariotti" },
  areaServed: { "@type": "AdministrativeArea", name: "Ontario, Canada" },
  knowsAbout: [
    "Estate Planning", "Estate Administration", "Mortgage Enforcement",
    "Private Lending", "Real Estate Transactions", "Real Estate Development",
    "Corporate Law", "Commercial Law",
  ],
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollAnimations />
      <Navbar />

      {/* Hero */}
      <section className="hero" id="main-content">
        <div className="hero-image-wrap">
          <Image
            src="/homepage_hero_building.png"
            alt="Mariotti Law Group office"
            fill
            priority
            className="hero-image"
          />
          <div className="hero-image-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <p className="text-sm-label text-gray fade-in">Est. 1965</p>
            <h1 className="fade-in stagger-1">
              Protecting what you&apos;ve built.<br />Planning for what&apos;s next.
            </h1>
            <p className="fade-in stagger-2">
              Estate planning. Mortgage enforcement. Real estate. Private lending.
              Corporate transactions. Mariotti Law Group has advised Ontario families,
              lenders, and businesses for six decades. One firm. Seven practices. The
              counsel you need before you need it.
            </p>
            <a href="#contact" className="btn fade-in stagger-3">Schedule a Consultation</a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy" id="about">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-left fade-in">
              <span className="text-sm-label">Our Firm</span>
              <h2>A firm built on substance, not slogans.</h2>
              <blockquote>
                We would rather show you what we do than tell you what we are.
              </blockquote>
            </div>
            <div className="philosophy-right fade-in stagger-2">
              <p className="philosophy-opener">
                Mariotti Law Group was founded in 1965 by Anthony &lsquo;Tony&rsquo; Mariotti.
                For six decades, the firm has advised families, lenders, developers, and business
                owners across Ontario. The work has changed. The standards have not.
              </p>
              <p>
                Every engagement starts the same way. We listen. We ask the questions that surface
                issues you may not have considered. We do not propose solutions until we understand
                the full picture. The value of a good lawyer is not in the document they draft today.
                It is in the problem they prevent next year.
              </p>
              <p>
                We do not try to be all things to all people. We explain the law in terms you can
                act on, we anticipate problems before they arrive, and we execute with precision.
                Clients who need careful, forward-looking legal counsel for their family, their
                assets, or their business are the clients we serve well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="practices" id="practices">
        <div className="container">
          <div className="practices-header fade-in">
            <span className="text-sm-label">Our Practice Areas</span>
            <h2>What We Do</h2>
            <p>
              Every practice at our firm exists to solve a specific problem. We list them because they
              are what we do, every day, for clients who depend on getting it right.
            </p>
          </div>

          <div className="practices-grid practices-grid-7">
            <div className="practice-card fade-in stagger-1">
              <div className="number">01</div>
              <h3>Wills &amp; Estate Planning</h3>
              <p>
                Your will determines who controls your assets, who raises your children, and whether
                your family spends six months in court or six minutes with a lawyer. We build estate
                plans for blended families, business owners, and anyone who wants the decision to be
                theirs.
              </p>
              <a href="/estate-planning" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-2">
              <div className="number">02</div>
              <h3>Estate Administration</h3>
              <p>
                When someone dies, the paperwork starts. Court applications. Tax clearances. Creditor
                claims. Beneficiary disputes. The mistakes people make in the first 30 days can take
                years to undo. We guide estate trustees from the Certificate of Appointment to the
                final distribution.
              </p>
              <a href="/estate-administration" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-3">
              <div className="number">03</div>
              <h3>Mortgage Enforcement</h3>
              <p>
                A standard-form mortgage downloaded from the internet does not survive a contested
                enforcement. When borrowers default, we act. Power-of-sale proceedings. Receivership
                applications. Court-ordered sales. Personal judgment on guarantees. Documentation
                errors delay enforcement by months. We do not make them.
              </p>
              <a href="/mortgage-enforcement" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-1">
              <div className="number">04</div>
              <h3>Private Lending</h3>
              <p>
                Private lenders succeed when their documentation anticipates default from the day the
                loan is funded. We draft mortgages, promissory notes, guarantees, and general security
                agreements built for the specific transaction and the specific borrower. Not templates.
                Not precedents pulled from a shelf.
              </p>
              <a href="/private-lending" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-2">
              <div className="number">05</div>
              <h3>Real Estate Transactions</h3>
              <p>
                Purchases. Sales. Refinances. Commercial acquisitions. Investment properties. Leases.
                Title review and due diligence. Every transaction has a closing date, and every delay
                between here and there has a cost. We handle residential and commercial closings with
                the precision the deal demands.
              </p>
              <a href="/real-estate-transactions" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-3">
              <div className="number">06</div>
              <h3>Real Estate Development</h3>
              <p>
                Subdivision agreements. Site plan approvals. Development charges. Construction
                financing. Zoning. Severances. We work with developers from raw land through
                registered plan, handling the regulatory and transactional work that turns a site
                into a project.
              </p>
              <a href="/real-estate-development" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card practice-card-last fade-in stagger-1">
              <div className="number">07</div>
              <h3>Corporate &amp; Commercial</h3>
              <p>
                Business purchases and sales. Shareholder agreements. Partnership structures.
                Commercial contracts. When relationships are good, everyone agrees on a handshake.
                When they change, you need the agreement you signed three years ago to say exactly
                what it needs to say. We write those agreements.
              </p>
              <a href="/corporate-commercial" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="text-sm-label text-gray fade-in" style={{ display: "block", marginBottom: "1rem" }}>
            Start Here
          </span>
          <h2 className="fade-in stagger-1">
            The best time to talk to a lawyer is before the problem becomes urgent.
          </h2>
          <p className="fade-in stagger-2">
            Whether you need to update an estate plan, structure a transaction, or enforce a
            mortgage, a 30-minute conversation is the place to start. Tell us what you are facing,
            and we will tell you how we can help.
          </p>
          <div className="cta-buttons fade-in stagger-3">
            <a href="tel:+15199973775" className="btn">Call Us</a>
            <a href="mailto:info@mariottilaw.ca" className="btn btn-filled">Send an Email</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

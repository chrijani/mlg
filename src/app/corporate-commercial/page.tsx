import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Business Lawyer Windsor Ontario | Mariotti Law Group",
  description:
    "Windsor Ontario business lawyer. Incorporations, shareholder agreements, business purchases and sales, commercial contracts, corporate reorganizations. Advisory from startup through succession.",
  alternates: { canonical: "https://mariottilaw.ca/corporate-commercial" },
  openGraph: {
    title: "Business Lawyer Windsor Ontario | Mariotti Law Group",
    description:
      "Windsor Ontario business lawyer. Incorporations, shareholder agreements, business purchases and sales, commercial contracts, corporate reorganizations. Advisory from startup through succession.",
    url: "https://mariottilaw.ca/corporate-commercial",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/assets/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Lawyer Windsor Ontario | Mariotti Law Group",
    description:
      "Windsor Ontario business lawyer. Incorporations, shareholder agreements, business purchases and sales, commercial contracts, corporate reorganizations. Advisory from startup through succession.",
    images: ["https://mariottilaw.ca/assets/images/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Mariotti Law Group — Corporate & Commercial",
    description:
      "Windsor Ontario business lawyer. Incorporations, shareholder agreements, business purchases and sales, commercial contracts, corporate reorganizations. Advisory from startup through succession.",
    url: "https://mariottilaw.ca/corporate-commercial",
    provider: {
      "@type": "LegalService",
      name: "Mariotti Law Group",
      url: "https://mariottilaw.ca",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Ontario, Canada" },
      { "@type": "City", name: "Windsor, Ontario" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mariottilaw.ca/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://mariottilaw.ca/#practices" },
      { "@type": "ListItem", position: 3, name: "Corporate & Commercial", item: "https://mariottilaw.ca/corporate-commercial" },
    ],
  },
];

export default function CorporateCommercialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" data-number="07" id="main-content">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/#practices">Services</a>
            <span className="sep">/</span>
            Corporate &amp; Commercial
          </div>
          <h1 className="fade-in s1">
            Every business decision has a legal dimension. Most owners find out which one after
            the fact.
          </h1>
          <p className="lead fade-in s2">
            The lease you signed. The partner you brought in. The contract you shook hands on. The
            corporate records you never updated. Each of these is a legal decision, whether you
            treated it as one or not. We make sure the legal foundation under your business is as
            sound as the business itself.
          </p>
        </div>
      </section>

      {/* Section 01 */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">01</div>
              <h2>What we see when the foundation is missing.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                A business owner incorporates through an online service, never sets up a minute book,
                and discovers the gap three years later when a bank asks for corporate resolutions
                before approving a line of credit. A partnership operates on a handshake for a decade
                until one partner gets divorced and the other discovers there is no agreement
                addressing what happens to the business. A commercial lease gets signed without
                review, and the tenant learns after the fact that the force majeure clause does not
                cover the scenario they assumed it would.
              </p>
              <p>
                These are not unusual situations. They are the ordinary result of building a business
                without ongoing legal counsel. The cost of fixing them is always higher than the cost
                of getting them right the first time. A shareholder agreement that takes two weeks to
                draft prevents litigation that takes four to five years and costs $100,000 or more. A
                properly maintained minute book prevents a failed financing. A contract reviewed
                before signing prevents a dispute that the contract itself cannot resolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section className="content-section" style={{ background: "var(--timberwolf-light)" }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">02</div>
              <h2>What we do.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                We act as outside legal counsel for business owners who need a lawyer they can call
                when a question comes up, not just when a problem has already arrived.
              </p>
              <p>
                We incorporate businesses and set up the corporate structure properly from the start.
                Articles, bylaws, organizational resolutions, share issuances, banking resolutions,
                and a minute book that is complete and current. We advise on the choice between
                provincial incorporation under the Ontario Business Corporations Act and federal
                incorporation under the CBCA, and on the share structure that supports the tax plan
                your accountant is building.
              </p>
              <p>
                We draft and negotiate shareholder agreements, partnership agreements, and unanimous
                shareholder agreements. Buy-sell provisions, valuation mechanisms, non-competition
                restrictions, deadlock resolution, and the triggers that matter most in closely held
                businesses. Death. Disability. Divorce. Departure. Disagreement.
              </p>
              <p>
                We handle business purchases and sales. We advise on the difference between asset and
                share transactions, and why that distinction determines who carries the liability, how
                the tax falls, and whether $65,000 in HST applies to the deal. We manage the due
                diligence, negotiate the purchase agreement, structure the representations and
                warranties, and close the transaction.
              </p>
              <p>
                We draft and review commercial contracts. Supply agreements, service agreements,
                licensing arrangements, distribution agreements, and the day-to-day contracts that
                keep a business running. We negotiate commercial leases for landlords and tenants. We
                structure corporate reorganizations, estate freezes, holding company arrangements, and
                section 85 rollovers in coordination with your accountant.
              </p>
              <p>
                And we maintain your corporate records. Annual resolutions, director and officer
                changes, share transfers, the transparency register required since January 2023, and
                the filings that keep your corporation in good standing with the Ontario Business
                Registry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">03</div>
              <h2>How we work.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                Most corporate work in Ontario starts with a conversation between a business owner
                and their accountant. The accountant recommends a structure. The lawyer builds it.
                That relationship between your tax advisor and your legal counsel is where the real
                value sits, and we are used to working as part of that team.
              </p>
              <p>
                For transactions, we lay out the process and timeline at the outset. A mid-market
                business acquisition typically runs three to six months from letter of intent to
                closing. We tell you what to expect at each stage, where the risks tend to hide, and
                what the deal-breakers look like before you encounter them.
              </p>
              <p>
                For ongoing corporate work, we are available when you need us. A contract that needs
                review before Friday. A question about director liability. A shareholder who wants to
                sell their interest. A lease renewal with terms you do not understand. We respond
                quickly because business decisions do not wait for appointments two weeks from now.
              </p>
              <div className="highlight">
                <p>
                  We draft agreements for the moment when the relationship changes. Not for the
                  handshake. A contract that only works when everyone agrees is not a contract. It is
                  a wishlist. The documents we prepare are built for the day when someone wants out,
                  something goes wrong, or the original understanding is no longer shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Stats */}
      <div className="dark-section">
        <section>
          <div className="container">
            <div style={{ maxWidth: "500px" }} className="fade-in">
              <span
                className="text-sm-label"
                style={{ color: "var(--dim-gray)", display: "block", marginBottom: "1rem" }}
              >
                The Numbers
              </span>
              <h2>What business owners should know.</h2>
            </div>
            <div className="stat-row">
              <div className="stat-item fade-in s1">
                <div className="stat-number">76%</div>
                <div className="stat-text">
                  of Canadian business owners plan to exit within ten years. Only 9% have a written
                  succession plan.
                </div>
              </div>
              <div className="stat-item fade-in s2">
                <div className="stat-number">$200K</div>
                <div className="stat-text">
                  maximum penalty under the OBCA for failing to maintain the transparency register
                  required since January 2023.
                </div>
              </div>
              <div className="stat-item fade-in s3">
                <div className="stat-number">$65K</div>
                <div className="stat-text">
                  in HST on a $500,000 asset purchase if the parties do not file a section 167
                  going-concern election.
                </div>
              </div>
              <div className="stat-item fade-in s4">
                <div className="stat-number">4–5 yrs</div>
                <div className="stat-text">
                  from filing to trial for shareholder disputes in the Ontario Superior Court in
                  Toronto. 90% settle before trial. The legal fees accumulate regardless.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Situations */}
      <section className="situations">
        <div className="container">
          <div className="situations-header fade-in">
            <span className="text-sm-label">Situations We See</span>
            <h2>The clients who sit across from us.</h2>
          </div>
          <div className="situations-grid">
            <div className="situation-card fade-in s1">
              <h3>You are starting a business and need to get the structure right from the beginning.</h3>
              <p>
                Your accountant recommended incorporating for the small business deduction. Now you
                need articles, a share structure, organizational resolutions, a minute book, and a
                shareholder agreement if you have partners. We set up the legal foundation so you can
                focus on building the business.
              </p>
            </div>
            <div className="situation-card fade-in s2">
              <h3>You are buying or selling a business.</h3>
              <p>
                Asset purchase or share purchase. Due diligence. Representations and warranties.
                Non-competition provisions. The section 167 HST election. We handle the transaction
                from letter of intent through closing and make sure you understand what you are
                signing and what you are assuming.
              </p>
            </div>
            <div className="situation-card fade-in s3">
              <h3>You have a contract in front of you and want to understand what it says before you sign.</h3>
              <p>
                A commercial lease. A franchise agreement. A supply contract. A service agreement
                with a limitation of liability clause you are not sure about. We review the document,
                explain what it means in practice, flag the provisions that create risk, and negotiate
                the terms that need to change.
              </p>
            </div>
            <div className="situation-card fade-in s4">
              <h3>You have partners but nothing in writing.</h3>
              <p>
                Two or three people built something together, trust each other completely, and have no
                agreement addressing death, disability, divorce, or disagreement. The agreement is
                easier to negotiate now than it will be when the relationship is under stress. We
                draft shareholder agreements and partnership agreements built for the hard
                conversations.
              </p>
            </div>
            <div className="situation-card fade-in s5">
              <h3>Your accountant has recommended a corporate reorganization.</h3>
              <p>
                Estate freezes. Holding company structures. Section 85 rollovers. Family trusts. The
                tax plan requires legal implementation. Share exchanges, amended articles, new
                corporate entities, and supporting agreements. We work with your tax advisor to
                execute the plan and maintain the documentation.
              </p>
            </div>
            <div className="situation-card fade-in s6">
              <h3>Your corporate records need attention.</h3>
              <p>
                The minute book hasn&apos;t been updated since incorporation. No annual resolutions.
                No share certificates. No transparency register. You need financing, or you want to
                sell, and the due diligence will expose every gap. We reconstruct corporate records,
                bring them current, and keep them maintained going forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span
            className="text-sm-label text-gray fade-in"
            style={{ display: "block", marginBottom: "1rem" }}
          >
            Start Here
          </span>
          <h2 className="fade-in s1">
            The best time to get the legal structure right is at the beginning. The second best
            time is before it becomes a problem.
          </h2>
          <p className="fade-in s2">
            Whether you are starting, buying, restructuring, or protecting a business, the
            conversation starts the same way.
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

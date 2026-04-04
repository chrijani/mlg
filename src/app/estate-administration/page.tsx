import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Probate Lawyer Ontario | Estate Administration | Mariotti",
  description:
    "Ontario probate and estate administration. Certificate of Appointment, Estate Administration Tax, creditor notices, CRA clearance. Executor liability protection.",
  alternates: { canonical: "https://mariottilaw.ca/estate-administration" },
  openGraph: {
    title: "Probate Lawyer Ontario | Estate Administration | Mariotti",
    description:
      "Ontario probate and estate administration. Certificate of Appointment, Estate Administration Tax, creditor notices, CRA clearance. Executor liability protection.",
    url: "https://mariottilaw.ca/estate-administration",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/assets/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Probate Lawyer Ontario | Estate Administration | Mariotti",
    description:
      "Ontario probate and estate administration. Certificate of Appointment, Estate Administration Tax, creditor notices, CRA clearance. Executor liability protection.",
    images: ["https://mariottilaw.ca/assets/images/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Mariotti Law Group — Estate Administration",
    description:
      "Ontario probate and estate administration. Certificate of Appointment, Estate Administration Tax, creditor notices, CRA clearance. Executor liability protection.",
    url: "https://mariottilaw.ca/estate-administration",
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
      { "@type": "ListItem", position: 3, name: "Estate Administration", item: "https://mariottilaw.ca/estate-administration" },
    ],
  },
];

export default function EstateAdministrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" data-number="02" id="main-content">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/#practices">Services</a>
            <span className="sep">/</span>
            Estate Administration
          </div>
          <h1 className="fade-in s1">
            You were named executor. You have 180 days, a list of obligations you&apos;ve never
            seen, and personal liability for getting it wrong.
          </h1>
          <p className="lead fade-in s2">
            The will named you, or the family chose you. Either way, the court applications, tax
            filings, creditor notices, and beneficiary expectations are now yours to manage. The
            decisions you make in the first few weeks will determine whether this process costs
            your family months or years.
          </p>
        </div>
      </section>

      {/* Section 01 */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">01</div>
              <h2>The job nobody prepares you for.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                You are personally liable for mistakes. That sentence is worth reading twice. As
                estate trustee, if you distribute assets before obtaining a clearance certificate
                from the CRA, the unpaid taxes come out of your pocket. If you pay one creditor
                ahead of another in an insolvent estate, the shortfall is yours. If you miss the
                180-day deadline to file the Estate Information Return with the Ministry of Finance,
                fines start at $1,000 and there is no limitation on future audits.
              </p>
              <p>
                These are not edge cases. They are the ordinary consequences of administering an
                estate without someone watching the deadlines, the tax filings, and the order of
                payments. Executors hire lawyers because the personal stakes are high and the early
                decisions are the ones that cannot be undone.
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
                We handle estate administration from beginning to end. The court applications, the
                tax filings, the creditor notices, the beneficiary distributions, and the formal
                discharge of the estate trustee.
              </p>
              <p>
                We review the will, identify the assets and debts, and flag problems before they
                become expensive. A dependant who may claim support under the Succession Law Reform
                Act. A beneficiary designation that contradicts the will. Jointly held property where
                the surviving owner&apos;s claim is weaker than they think.
              </p>
              <p>
                We prepare the application for a Certificate of Appointment of Estate Trustee. We
                calculate and pay the Estate Administration Tax. We publish the notice to creditors
                under section 53 of the Trustee Act to protect you from personal liability. We
                coordinate with accountants on the final tax return and the estate&apos;s T3. We
                request the CRA clearance certificate. We file the Estate Information Return.
              </p>
              <p>
                When estates are contested, we advise on the legal options and prepare the court
                materials. Capacity challenges. Undue influence. Dependant support claims. Disputes
                between co-executors. Beneficiaries who want the trustee removed. We work toward
                resolution through mandatory mediation or, where necessary, litigation.
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
                The first step is understanding where things stand. What assets exist. What debts
                are outstanding. Who the beneficiaries are. Whether anyone is likely to make a claim.
              </p>
              <p>
                From there, we lay out the full process, identify the deadlines that matter, and
                give you a clear picture of your responsibilities and your exposure. We tell you
                what you can do now, what needs to wait, and what happens if you move too quickly.
              </p>
              <div className="highlight">
                <p>
                  The most common mistake is distributing assets before the estate is ready. Before
                  the CRA issues a clearance certificate. Before the six-month window for dependant
                  support claims has closed. Before all creditors have been notified. Moving too fast
                  creates liability that follows you personally. We make sure you move at the right
                  pace.
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
              <h2>What estate administration actually costs.</h2>
            </div>
            <div className="stat-row">
              <div className="stat-item fade-in s1">
                <div className="stat-number">$14,250</div>
                <div className="stat-text">
                  Estate Administration Tax on a $1,000,000 estate. Nothing on the first $50,000.
                  1.5% on the rest.
                </div>
              </div>
              <div className="stat-item fade-in s2">
                <div className="stat-number">180 days</div>
                <div className="stat-text">
                  to file the Estate Information Return with the Ministry of Finance after the
                  Certificate is issued
                </div>
              </div>
              <div className="stat-item fade-in s3">
                <div className="stat-number">3–5 months</div>
                <div className="stat-text">
                  typical wait for a Certificate of Appointment in the GTA. Smaller courts can
                  process applications in weeks.
                </div>
              </div>
              <div className="stat-item fade-in s4">
                <div className="stat-number">~5%</div>
                <div className="stat-text">
                  guideline for estate trustee compensation. Roughly $50,000 on a million-dollar
                  estate. Taxable as income.
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
            <h2>Every estate is different. These are the ones we handle regularly.</h2>
          </div>
          <div className="situations-grid">
            <div className="situation-card fade-in s1">
              <h3>You were named executor and have no idea where to start.</h3>
              <p>
                Someone has died. You found out you are the estate trustee. The bank wants a
                Certificate of Appointment before they will release funds. We walk you through
                the entire process from day one.
              </p>
            </div>
            <div className="situation-card fade-in s2">
              <h3>Someone died without a will.</h3>
              <p>
                Intestate estates are harder. You need consents from next-of-kin, you may need to
                post a bond worth double the estate value, and the Succession Law Reform Act decides
                who gets what. Common-law partners inherit nothing. Step-children inherit nothing
                unless legally adopted.
              </p>
            </div>
            <div className="situation-card fade-in s3">
              <h3>A beneficiary is challenging the will.</h3>
              <p>
                Capacity disputes. Undue influence allegations. Claims that the will does not
                reflect what the deceased actually wanted. Will challenges are emotionally charged
                and procedurally complex. We assess the merits and prepare the court materials.
              </p>
            </div>
            <div className="situation-card fade-in s4">
              <h3>A dependant is claiming support from the estate.</h3>
              <p>
                Under the Succession Law Reform Act, a spouse, common-law partner, parent, child,
                or sibling who depended on the deceased can apply for provision from the estate
                within six months of the Certificate being issued. These claims override both wills
                and intestacy rules.
              </p>
            </div>
            <div className="situation-card fade-in s5">
              <h3>The estate includes a business or private company shares.</h3>
              <p>
                Private company shares create valuation disputes, shareholder agreement
                complications, and potential dual-will strategies. Administration of business assets
                requires coordination between estate counsel, corporate counsel, and the
                company&apos;s accountant.
              </p>
            </div>
            <div className="situation-card fade-in s6">
              <h3>You are a beneficiary and the executor is not doing their job.</h3>
              <p>
                Estate trustees owe fiduciary obligations to the beneficiaries. If the trustee is
                delaying without justification, failing to account, or acting in self-interest, the
                court can compel an accounting, reduce compensation, or remove the trustee entirely.
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
            The early decisions in estate administration are the ones that create or prevent
            liability.
          </h2>
          <p className="fade-in s2">
            If you have been named executor, a conversation now prevents problems later. If you
            are a beneficiary with concerns, the same applies.
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

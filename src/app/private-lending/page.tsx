import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Private Lending — Mariotti Law Group",
  description:
    "Private mortgage documentation, closings, and lender representation for Ontario private lenders and MICs. Mariotti Law Group drafts documents built for enforcement.",
  openGraph: {
    title: "Private Lending — Mariotti Law Group",
    description:
      "Sixty-five percent of private mortgage files reviewed by FSRA had deficient documentation. Yours might be among them.",
    url: "https://mariottilaw.ca/private-lending",
    siteName: "Mariotti Law Group",
    type: "website",
  },
};

export default function PrivateLendingPage() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" data-number="04">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/#practices">Services</a>
            <span className="sep">/</span>
            Private Lending
          </div>
          <h1 className="fade-in s1">
            Sixty-five percent of private mortgage files reviewed by FSRA had deficient documentation. Yours might be among them.
          </h1>
          <p className="lead fade-in s2">
            A private mortgage is not a bank product with a bank&apos;s infrastructure behind it. It is a loan between two parties secured by real property, governed by documents that either anticipate every problem or leave you exposed to the first one that arrives.
          </p>
        </div>
      </section>

      {/* Section 01 — Where documentation fails. */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">01</div>
              <h2>Where documentation fails.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                <a href="https://www.fsrao.ca/reports-and-publications" className="source-link" target="_blank" rel="noopener noreferrer">FSRA reviewed 101 private mortgage transactions in 2023</a>. Sixty-five percent had missing, incomplete, or inconsistent suitability documentation. Roughly a third had unclear or missing disclosures. One in five had inadequate identity verification. These were licensed brokerages operating in a regulated environment. The documentation coming across their desks was still deficient more often than it was complete.
              </p>
              <p>
                The errors that create enforcement problems are specific and predictable. A blended payment mortgage that fails to state the interest rate calculated yearly or half-yearly, as section 6 of the Interest Act requires, renders all interest unrecoverable. Not reduced. Unrecoverable. A mortgage without an acceleration clause limits the lender to claiming arrears on default rather than the full outstanding balance. A charge registered an hour late on a property where another lender filed first means second position, regardless of whose commitment letter came first.
              </p>
              <p>
                Template documents compound the risk. Standard charge terms designed for institutional lenders contain provisions that do not apply to private transactions, omit provisions that do, and create ambiguities that borrowers exploit during enforcement. A mortgage document should be drafted for the specific loan, the specific borrower, and the specific property. Anything less is a bet that nothing will go wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 — What we do. */}
      <section className="content-section" style={{ background: "var(--timberwolf-light)" }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">02</div>
              <h2>What we do.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                We act for private lenders and mortgage investment corporations. We draft the documents that fund the loan. Every clause, every covenant, every default definition is written for the moment the borrower stops paying, not for the day the cheque clears.
              </p>
              <p>
                Every loan package is built for the transaction. Charge and mortgage of land. Standard charge terms drafted for private lending. Commitment letter with default definitions that go beyond missed payments to cover tax arrears, insurance lapses, unauthorized transfers, property deterioration, and environmental contamination. Personal guarantees from principals behind corporate borrowers. Assignment of rents on income-producing properties. Direction regarding title. Statutory declarations. Fire and property insurance with the mortgagee named as loss payee.
              </p>
              <p>
                For second mortgages, the package expands. Postponement acknowledgment from the first mortgagee. First mortgage payout statement confirming current balance. Combined loan-to-value analysis. Mortgage priority endorsement on the title insurance policy. Review of the first mortgage&apos;s standard charge terms for provisions that could quietly subordinate your position on renewal or further advance.
              </p>
              <p>
                We handle the independent legal advice process for guarantors and non-borrowing spouses. Courts have set aside mortgages where the advising lawyer was not truly independent, where the transaction was improvident and the lender failed to insist on ILA, and where the guarantor did not understand what they were signing. In <a href="https://www.canlii.org/en/on/onca/doc/2025/2025onca253/2025onca253.html" className="source-link" target="_blank" rel="noopener noreferrer">McKenzie-Barnswell v. Xpert Credit Control Solutions (2025 ONCA)</a>, the Court of Appeal upheld an unconscionability finding and reduced the mortgage to amounts legitimately owed. The ILA file gets the same attention as the mortgage itself, because that is where enforcement challenges begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — How we work. */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">03</div>
              <h2>How we work.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                Private lending moves quickly. A deal that closes in days, not weeks, is the norm. We work at that pace without cutting the steps that protect the loan.
              </p>
              <p>
                Title search. Identification of every registered interest, every lien, every encumbrance. Confirmation of the borrower&apos;s authority to charge the property. Verification that spousal consent requirements under the Family Law Act are satisfied. Review of the property tax status because municipal tax arrears carry super-priority over your mortgage. Registration of the charge on title with the correct priority position confirmed.
              </p>
              <p>
                For lenders funding multiple loans each month, we build the relationship around consistency. Your documentation standards are established once and applied to every file. Your preferences for default provisions, insurance requirements, and reporting are built into the template. What changes from deal to deal is the borrower, the property, and the risk profile. What stays the same is the quality of the documents and the speed of the turnaround.
              </p>
              <div className="highlight">
                <p>
                  The criminal interest rate threshold dropped to 35% APR on January 1, 2025. <a href="https://www.canadianmortgagetrends.com" className="source-link" target="_blank" rel="noopener noreferrer" style={{ color: "var(--night)", textDecorationColor: "var(--dim-gray)" }}>FSRA found that 51% of private mortgages with terms of six months or less had APRs exceeding that number.</a> If your loan structure pushes near the line once fees are factored in, you need counsel who can calculate it properly and structure the transaction to stay on the right side of it.
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
              <span className="text-sm-label" style={{ color: "var(--dim-gray)", display: "block", marginBottom: "1rem" }}>
                The Numbers
              </span>
              <h2>The private lending market in Ontario.</h2>
            </div>
            <div className="stat-row">
              <div className="stat-item fade-in s1">
                <div className="stat-number">$32B</div>
                <div className="stat-text">
                  in private mortgages funded in Ontario in 2024. Over 65,000 transactions. Nearly tripled since 2015.
                </div>
              </div>
              <div className="stat-item fade-in s2">
                <div className="stat-number">65%</div>
                <div className="stat-text">
                  of private mortgage files reviewed by FSRA had missing or incomplete suitability documentation.
                </div>
              </div>
              <div className="stat-item fade-in s3">
                <div className="stat-number">35%</div>
                <div className="stat-text">
                  APR. The criminal interest rate threshold as of January 1, 2025. Over half of short-term private mortgages were above it.
                </div>
              </div>
              <div className="stat-item fade-in s4">
                <div className="stat-number">$500K</div>
                <div className="stat-text">
                  maximum FSRA penalty per contravention for mortgage brokerages. Enforcement actions doubled year over year.
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
            <h2>The lenders we work with.</h2>
          </div>
          <div className="situations-grid">
            <div className="situation-card fade-in s1">
              <h3>You are funding your first private mortgage and want to get it right.</h3>
              <p>
                Your brokerage has a deal. The borrower qualifies. The LTV works. Now you need a lawyer who will search the title, prepare documents that actually protect your position, handle the ILA, register the charge, and deliver a closing package you can rely on if the borrower stops paying.
              </p>
            </div>
            <div className="situation-card fade-in s2">
              <h3>You fund regularly and need a firm that can keep pace.</h3>
              <p>
                Multiple closings each month. Your documentation standards established. Your preferences for default provisions and insurance covenants built into every file. Title search, document preparation, registration, and reporting delivered on the timeline the deal requires.
              </p>
            </div>
            <div className="situation-card fade-in s3">
              <h3>You are funding a second mortgage and need to understand your priority.</h3>
              <p>
                The first mortgagee&apos;s standard charge terms may allow renewal at increased rates with priority preserved over your position. Further advance clauses may let the first lender increase the debt ahead of you without consent. We review the first mortgage before you fund the second.
              </p>
            </div>
            <div className="situation-card fade-in s4">
              <h3>You are lending against a construction project.</h3>
              <p>
                Construction lending carries risks that residential lending does not. Lien priorities under the Construction Act. Holdback obligations. Draw schedules tied to construction milestones. Cost overruns that erode your security. We structure the documentation and the advance process to protect your position as the project progresses.
              </p>
            </div>
            <div className="situation-card fade-in s5">
              <h3>You operate a MIC and need counsel who understands the structure.</h3>
              <p>
                MICs operate under the Income Tax Act, the MBLAA, and FSRA oversight simultaneously. Your documentation needs to satisfy mortgage law, securities requirements, and regulatory compliance. We handle the transactional mortgage work and coordinate with your securities and tax advisors on the corporate structure.
              </p>
            </div>
            <div className="situation-card fade-in s6">
              <h3>A borrower has defaulted and your documents need to hold up.</h3>
              <p>
                This is where the quality of the original documentation is tested. If the charge, the guarantee, the standard charge terms, and the ILA were done properly, enforcement is a procedural exercise. If they were not, the borrower&apos;s lawyer will find the gap. We handle enforcement through our mortgage enforcement practice.
              </p>
            </div>
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
            Good documentation is invisible. You only notice it when it is missing.
          </h2>
          <p className="fade-in s2">
            Whether you are funding your first mortgage or your five hundredth, the conversation starts with the loan and ends with documents that protect it.
          </p>
          <div className="cta-buttons fade-in s3">
            <a href="tel:+1XXXXXXXXXX" className="btn">Call Us</a>
            <a href="mailto:info@mariottilaw.ca" className="btn btn-filled">Send an Email</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

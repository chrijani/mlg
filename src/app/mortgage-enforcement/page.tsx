import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Mortgage Enforcement | Power of Sale, Receivership | Mariotti Law Group | Ontario",
  description:
    "Mortgage enforcement for Ontario lenders. Power of sale, receivership, judicial sale, personal judgment. We act for private lenders, MICs, credit unions, and institutional lenders.",
  alternates: { canonical: "https://mariottilaw.ca/mortgage-enforcement" },
  openGraph: {
    title: "Mortgage Enforcement | Power of Sale, Receivership | Mariotti Law Group | Ontario",
    description:
      "Mortgage enforcement for Ontario lenders. Power of sale, receivership, judicial sale, personal judgment. We act for private lenders, MICs, credit unions, and institutional lenders.",
    url: "https://mariottilaw.ca/mortgage-enforcement",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Enforcement | Power of Sale, Receivership | Mariotti Law Group | Ontario",
    description:
      "Mortgage enforcement for Ontario lenders. Power of sale, receivership, judicial sale, personal judgment. We act for private lenders, MICs, credit unions, and institutional lenders.",
    images: ["https://mariottilaw.ca/og-image.jpg"],
  },
};

export default function MortgageEnforcementPage() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" data-number="03" id="main-content">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/#practices">Services</a>
            <span className="sep">/</span>
            Mortgage Enforcement
          </div>
          <h1 className="fade-in s1">
            Enforcement works when the process is followed precisely. It fails the moment it is not.
          </h1>
          <p className="lead fade-in s2">
            Power of sale. Judicial sale. Foreclosure. Receivership. Personal judgment. Five remedies. Each one works. None of them forgive a procedural mistake.
          </p>
        </div>
      </section>

      {/* Section 01 — Where it breaks down. */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">01</div>
              <h2>Where it breaks down.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                The Mortgages Act requires notice to every person with a registered interest in the property. Every single one. A title search that misses a second charge holder, a construction lien claimant, or a spouse with Family Law Act rights can void the entire sale. Accept a payment after issuing the Notice on terms that differ from the original mortgage and the Notice is gone. Not suspended. Gone. You issue a new one and the redemption period starts fresh. Commence any proceeding during the 35-day redemption window without leave of the court and the enforcement unravels. These are the rules. Courts enforce them.
              </p>
              <p>
                Move too early and courts will punish you for it. Move too slowly and you lose the mortgage altogether. In 2024, the Superior Court discharged a private mortgage from title because the lender served a Notice of Sale in 2011, collected nothing, pursued nothing, and waited ten years for the borrower to pay voluntarily. The borrower never did. The Real Property Limitations Act ran its course. The mortgage was struck from title and the lender walked away with nothing on a debt that had been accruing at 14% for over a decade.
              </p>
              <div className="highlight">
                <p>
                  Every week a default sits without action is a week of interest accruing, property deteriorating, new liens registering on title, and the limitation clock ticking toward a number you cannot negotiate with. Speed and precision are not competing priorities. They are the same priority.
                </p>
              </div>
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
                We act for private lenders, mortgage investment corporations, credit unions, and institutional lenders. We enforce mortgages under the Mortgages Act, the Courts of Justice Act, and the Bankruptcy and Insolvency Act. We choose the right remedy for the file and we follow the statutory process without deviation.
              </p>
              <p>
                Power of sale is the fastest route for most residential defaults. Approximately six months from default to completed sale in an uncontested matter. Receivership is the right instrument when the property generates income, the borrower refuses to cooperate, or competing creditors need to be managed under the supervision of the court. Judicial sale belongs in files where title complications or priority disputes demand a judge&apos;s involvement. Foreclosure is narrow in application, reserved for depressed markets where a sale would not recover the debt, and it extinguishes the right to pursue a deficiency. We advise on these trade-offs before a path is chosen, not after.
              </p>
              <p>
                We run the process. Title searches to identify every person entitled to notice. Service of the Notice of Sale under sections 31 through 36. BIA section 244 notices when the debtor&apos;s property triggers the threshold. Strict observance of the section 42 prohibition during the redemption period. Marketing. Appraisals. Sale. Surplus distribution under section 27. And where the proceeds fall short, personal judgment against borrowers and guarantors for the balance.
              </p>
              <p>
                For MICs and portfolio lenders carrying multiple defaults at once, we track notices, redemption windows, limitation dates, and court schedules across the book. Ten concurrent files across different properties, courts, and stages of the Mortgages Act process. Precision at volume is what portfolio enforcement demands. It is what we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 — What we watch for. */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">03</div>
              <h2>What we watch for.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                Recovery depends on priority. First mortgage. Second mortgage. Construction lien. Condominium common expense lien. Municipal tax arrears. CRA deemed trust. The order matters. The rules governing that order are not uniform, and some of them require no registration at all to take effect.
              </p>
              <p>
                The CRA deemed trust is the one most lenders never see. Unremitted source deductions and HST create a priority claim that primes a registered first mortgage without registration, without filing, without notice. A borrower who ran a small business and fell behind on payroll remittances can erode a first mortgagee&apos;s recovery entirely. The lender finds out when the enforcement is already underway and the CRA files its claim. By then, the math has changed.
              </p>
              <p>
                Construction Act liens follow a separate priority regime. A mortgage registered before the first lien arose has priority, but only to the extent of advances already made. Building mortgages have priority except to the extent of the 10% statutory holdback deficiency. On development files, the priority analysis before funds are advanced is the work that determines whether the lender&apos;s position survives a dispute or collapses under one.
              </p>
              <p>
                Matrimonial home issues belong at the documentation stage. Under the Family Law Act, a mortgage placed on a matrimonial home without the consent of both spouses may be void. The non-titled spouse holds independent redemption rights. The redemption period extends to 40 days. Discovering these facts during enforcement means discovering them too late to fix them cheaply.
              </p>
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
              <h2>The market right now.</h2>
            </div>
            <div className="stat-row">
              <div className="stat-item fade-in s1">
                <div className="stat-number">$32B</div>
                <div className="stat-text">
                  Ontario&apos;s private mortgage market in 2024. Over 65,000 loans. Nearly tripled since 2015.
                </div>
              </div>
              <div className="stat-item fade-in s2">
                <div className="stat-number">11,000+</div>
                <div className="stat-text">
                  Ontario mortgages with a missed payment in Q4 2024. Three times the 2022 figure.
                </div>
              </div>
              <div className="stat-item fade-in s3">
                <div className="stat-number">~6 months</div>
                <div className="stat-text">
                  default to completed power of sale. Uncontested. Defended proceedings take considerably longer.
                </div>
              </div>
              <div className="stat-item fade-in s4">
                <div className="stat-number">10 years</div>
                <div className="stat-text">
                  Real Property Limitations Act. The clock runs whether you enforce or not. When it expires, the mortgage is gone.
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
            <h2>The lenders who call us.</h2>
          </div>
          <div className="situations-grid">
            <div className="situation-card fade-in s1">
              <h3>A borrower has stopped paying.</h3>
              <p>
                Arrears growing. Term expiring. Principal at risk. We assess the file, select the remedy, and move through the Mortgages Act process. No wasted steps. No procedural gaps for the borrower to exploit.
              </p>
            </div>
            <div className="situation-card fade-in s2">
              <h3>You hold a second mortgage and the first is also in default.</h3>
              <p>
                If the first mortgagee sells and the proceeds fall short, your position is gone. We evaluate the options. Pay out the first mortgage and take over enforcement. Negotiate a priority arrangement. Or intervene in the first mortgagee&apos;s sale to protect your interest before it is extinguished.
              </p>
            </div>
            <div className="situation-card fade-in s3">
              <h3>The property produces income and the borrower will not cooperate.</h3>
              <p>
                Rental buildings, commercial properties, and development sites with ongoing revenue require a receiver. We bring the application under the Courts of Justice Act or the BIA, depending on the scope needed, and work with the appointed receiver to manage the property and maximize recovery.
              </p>
            </div>
            <div className="situation-card fade-in s4">
              <h3>A development has stalled and your construction loan is exposed.</h3>
              <p>
                Developer receiverships in Ontario jumped 50% in 2024. Stalled projects bring lien priority disputes, holdback deficiencies, incomplete construction, and creditors competing for whatever is left. We handle the enforcement and, where it makes economic sense, work with receivers to complete the project rather than liquidate it at a loss.
              </p>
            </div>
            <div className="situation-card fade-in s5">
              <h3>The borrower is fighting the enforcement.</h3>
              <p>
                Unconscionability. Improvident sale. Documentation challenges. Limitation period arguments. Every contested enforcement follows a pattern. We assess whether the defence has merit, prepare the responding materials, and pursue summary judgment where the record supports it.
              </p>
            </div>
            <div className="situation-card fade-in s6">
              <h3>You run a portfolio and need counsel built for volume.</h3>
              <p>
                MICs and portfolio lenders do not default one file at a time. We manage concurrent enforcement proceedings across different properties, courts, and stages of the process. Tracking systems. Reporting. Deadlines that do not slip. The infrastructure matters as much as the legal work.
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
            A default does not age well.
          </h2>
          <p className="fade-in s2">
            Whether you need to enforce a single mortgage or manage defaults across a lending portfolio, the first conversation determines how quickly recovery begins.
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

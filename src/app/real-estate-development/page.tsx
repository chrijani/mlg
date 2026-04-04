import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Real Estate Development Law | Mariotti Law Group | Ontario",
  description:
    "Legal counsel for Ontario developers from land acquisition through registered plan. Planning approvals, subdivision agreements, OLT appeals, construction financing, Tarion compliance.",
  alternates: { canonical: "https://mariottilaw.ca/real-estate-development" },
  openGraph: {
    title: "Real Estate Development Law | Mariotti Law Group | Ontario",
    description:
      "Legal counsel for Ontario developers from land acquisition through registered plan. Planning approvals, subdivision agreements, OLT appeals, construction financing, Tarion compliance.",
    url: "https://mariottilaw.ca/real-estate-development",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Development Law | Mariotti Law Group | Ontario",
    description:
      "Legal counsel for Ontario developers from land acquisition through registered plan. Planning approvals, subdivision agreements, OLT appeals, construction financing, Tarion compliance.",
    images: ["https://mariottilaw.ca/og-image.jpg"],
  },
};

export default function RealEstateDevelopmentPage() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" data-number="06" id="main-content">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/#practices">Services</a>
            <span className="sep">/</span>
            Real Estate Development
          </div>
          <h1 className="fade-in s1">
            You bought the land three years ago. You still don&apos;t have a building permit.
          </h1>
          <p className="lead fade-in s2">
            Between the land you own and the project you planned to build on it sits a process that touches half a dozen statutes, multiple levels of government, and a timeline that no proforma accurately predicts. We handle the legal work across every stage of that process.
          </p>
        </div>
      </section>

      {/* Section 01 — The distance between land and a buildable project. */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">01</div>
              <h2>The distance between land and a buildable project.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                A subdivision in Ontario takes three to seven years from application to registered plan. That timeline runs through the Planning Act, the Development Charges Act, the Conservation Authorities Act, the Construction Act, the Environmental Protection Act, the Building Code Act, and, depending on the project, the Ontario Heritage Act, the Condominium Act, and the Species Conservation Act. Each statute imposes its own requirements. Each municipality interprets them differently.
              </p>
              <p>
                The purchase agreement is conditional on a rezoning. The rezoning requires an official plan amendment. The official plan amendment may require an Ontario Land Tribunal hearing. The financing structure depends on the timing of all three. A transactional real estate lawyer handles closings. A development lawyer understands that every document in the project is connected to every approval, and that a delay at one stage cascades through every stage that follows.
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
                We work with developers from land acquisition through registered plan and beyond. Residential subdivisions, condominiums, infill, commercial, industrial. Every stage of the project has legal work attached to it. We handle all of it.
              </p>
              <p>
                At acquisition, we review title, conduct off-title searches, assess zoning against the intended use, coordinate environmental due diligence, and structure conditional purchase agreements tied to the approvals the project requires. For land assemblies, we manage multiple conditional agreements with staggered closings and option structures. We find the restrictive covenant that blocks the intended use, the unregistered easement that cuts through the site, and the zoning that contradicts what the proforma assumes, before the deposit goes hard.
              </p>
              <p>
                Through approvals, we prepare and file applications for official plan amendments, zoning by-law amendments, plans of subdivision, site plan control, consents, and Part Lot Control exemptions. We negotiate subdivision agreements, including the financial securities, parkland dedication, servicing obligations, and lapsing provisions that come with them. When the municipality does not decide within the statutory period, we file non-decision appeals at the OLT. When decisions go wrong, we appeal on the merits and coordinate the planners, traffic engineers, and environmental consultants that tribunal hearings require.
              </p>
              <p>
                On financing, we prepare construction loan documentation, provide title opinions at each draw, and manage the Construction Act holdback and trust obligations. We handle Tarion enrollment, warranty compliance, HCRA licensing, and the delayed closing procedures that apply when the schedule slips.
              </p>
              <p>
                At disposition, we prepare condominium declarations and descriptions, structure disclosure statements, manage cooling-off periods and material change obligations, and close with end purchasers. For freehold projects, we handle Part Lot Control applications and the transfer documentation that delivers finished lots to buyers.
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
                Development charges determine whether the project pencils. The numbers vary wildly by municipality and they change frequently. Some municipalities have cut charges by half in the past year. Others have not. Knowing the current rate is table stakes. Knowing which exemptions apply, when the deferral to occupancy takes effect, and how the background study methodology can be challenged at the OLT is where the value sits.
              </p>
              <p>
                Construction Act lien priority is the risk that lenders and developers underestimate most consistently. A building mortgage has priority over construction liens only to the extent of the 10% statutory holdback deficiency. The Court of Appeal confirmed that the 10% cap applies across all building mortgages combined, not per mortgage. If a lien is registered on title, subsequent advances are made at the lender&apos;s peril. Getting this analysis right before the first draw goes out determines whether the financing position survives a dispute or collapses under one.
              </p>
              <p>
                The Species Conservation Act replaced the Endangered Species Act in March 2026. The registration-first model lets proponents begin activity after registering rather than waiting for a ministry permit. But species like redside dace, Blanding&apos;s turtle, and butternut still delay southern Ontario projects. Archaeological assessment backlogs at the Ministry stretch to seven years. These are the bottlenecks that never appear in the proforma but always appear in the timeline.
              </p>
              <div className="highlight">
                <p>
                  Bill 185 introduced lapsing provisions that allow municipalities to withdraw approvals from developments that have not received building permits within three years. A conditional approval that sits idle is no longer a permanent entitlement. It is an asset with an expiry date. If you are sitting on approvals, the clock is running.
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
              <h2>The development landscape.</h2>
            </div>
            <div className="stat-row">
              <div className="stat-item fade-in s1">
                <div className="stat-number">3–7 yrs</div>
                <div className="stat-text">
                  from subdivision application to registered plan. That is the realistic timeline. Not the statutory one.
                </div>
              </div>
              <div className="stat-item fade-in s2">
                <div className="stat-number">23 months</div>
                <div className="stat-text">
                  average site plan approval across Ontario. The Planning Act says 60 days.
                </div>
              </div>
              <div className="stat-item fade-in s3">
                <div className="stat-number">30–35%</div>
                <div className="stat-text">
                  of new home cost in Ontario attributable to government fees and taxes. Development charges have risen 176% since 2011.
                </div>
              </div>
              <div className="stat-item fade-in s4">
                <div className="stat-number">50%</div>
                <div className="stat-text">
                  increase in Ontario developer receiverships in 2024. Projects stall. The legal consequences are immediate.
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
            <h2>The developers we work with.</h2>
          </div>
          <div className="situations-grid">
            <div className="situation-card fade-in s1">
              <h3>You are acquiring land and need to know what you can build before you commit.</h3>
              <p>
                Zoning. Official plan designations. Environmental constraints. Heritage listings. Conservation authority jurisdiction. Restrictive covenants on title. We review the regulatory picture before you commit capital to land that may not support the project.
              </p>
            </div>
            <div className="situation-card fade-in s2">
              <h3>Your approvals are stalled and the carrying costs are climbing.</h3>
              <p>
                Official plan amendment. Rezoning. Subdivision. Site plan. Each with its own statutory timeline and its own set of conditions. When the municipality does not decide within the statutory period, we appeal. When the decision goes wrong, we take it to the OLT.
              </p>
            </div>
            <div className="situation-card fade-in s3">
              <h3>The subdivision agreement keeps growing and you need someone to push back.</h3>
              <p>
                Financial securities. Parkland dedication. Road widenings. Servicing obligations. Lapsing provisions. The subdivision agreement is a binding contract registered on title. Every term you accept is an obligation that survives until assumption. We negotiate the terms that belong and resist the ones that don&apos;t.
              </p>
            </div>
            <div className="situation-card fade-in s4">
              <h3>You are building condominiums and the compliance requirements are multiplying.</h3>
              <p>
                Declaration. Description. Disclosure statement. Tarion addendum. Budget statement. Cooling-off periods. Material change obligations. Deposit trust requirements. HCRA licensing. Every stage from presale through turnover has regulatory requirements attached. We handle the compliance so you can build.
              </p>
            </div>
            <div className="situation-card fade-in s5">
              <h3>Your financing conditions are tied to approvals that keep moving.</h3>
              <p>
                Lender draw requirements depend on title opinions that depend on approvals that depend on municipal timelines you do not control. When the approvals schedule slips, the financing schedule is affected. We coordinate the legal work on both sides so one does not undermine the other.
              </p>
            </div>
            <div className="situation-card fade-in s6">
              <h3>A project has stalled and you need to understand what comes next.</h3>
              <p>
                Presales that did not materialize. Financing that fell through. Construction costs that blew past the proforma. Developer receiverships jumped 50% in 2024. We advise on restructuring, lender renegotiation, purchaser obligations, Tarion and HCRA implications, and when the numbers no longer work, the wind-down.
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
            Bring us in at acquisition. Not at the problem.
          </h2>
          <p className="fade-in s2">
            The legal work that prevents delays costs a fraction of the delays themselves. Whether you are assembling land, waiting on approvals, or managing construction, we work at the pace the project demands.
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

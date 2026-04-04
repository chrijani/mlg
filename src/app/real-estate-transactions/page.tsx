import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Real Estate Transactions | Commercial & Residential | Mariotti Law Group | Ontario",
  description:
    "Purchases, sales, refinances, commercial acquisitions, investment properties, and leasing across Ontario. Title search, due diligence, HST structuring, Planning Act compliance.",
  alternates: { canonical: "https://mariottilaw.ca/real-estate-transactions" },
  openGraph: {
    title: "Real Estate Transactions | Commercial & Residential | Mariotti Law Group | Ontario",
    description:
      "Purchases, sales, refinances, commercial acquisitions, investment properties, and leasing across Ontario. Title search, due diligence, HST structuring, Planning Act compliance.",
    url: "https://mariottilaw.ca/real-estate-transactions",
    siteName: "Mariotti Law Group",
    type: "website",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Transactions | Commercial & Residential | Mariotti Law Group | Ontario",
    description:
      "Purchases, sales, refinances, commercial acquisitions, investment properties, and leasing across Ontario. Title search, due diligence, HST structuring, Planning Act compliance.",
    images: ["https://mariottilaw.ca/og-image.jpg"],
  },
};

export default function RealEstateTransactionsPage() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" data-number="05" id="main-content">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/#practices">Services</a>
            <span className="sep">/</span>
            Real Estate Transactions
          </div>
          <h1 className="fade-in s1">
            What you don&apos;t find before closing, you own after it.
          </h1>
          <p className="lead fade-in s2">
            Purchases. Sales. Refinances. Commercial acquisitions. Investment properties. Leases. We handle real estate transactions from the agreement through registration, and we find the problems that need fixing before the money moves.
          </p>
        </div>
      </section>

      {/* Section 01 — What sits between agreement and closing. */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">01</div>
              <h2>What sits between agreement and closing.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                A residential purchase has a title search, a few standard requisitions, and a closing date four to six weeks out. A commercial acquisition has title review, off-title enquiries to a dozen government departments, zoning confirmation, environmental due diligence, tenant estoppel certificates, survey review, a requisition period, HST structuring, and a closing date 60 to 90 days out. The volume of work between signature and registration is what separates one transaction from another.
              </p>
              <p>
                Title defects surface. A mortgage that was paid off years ago but never discharged from title. An easement that was never registered but has been in use for decades. A Planning Act contravention that renders the transfer void under section 50 until it is remediated. Open building permits that the vendor forgot existed. Unpaid municipal taxes that carry priority over every other claim on the property. Each one has to be found, assessed, and resolved before the closing date arrives.
              </p>
              <p>
                The off-title searches tell you what the title search cannot. Whether the property sits in a flood plain regulated by a conservation authority. Whether there are outstanding fire code or electrical safety orders. Whether the zoning permits the use the buyer intends. Whether underground storage tanks were ever installed on the site. These answers come from municipal departments that respond in two to six weeks. If the searches are not ordered early, the answers arrive late. Late answers delay closings. Delayed closings cost money.
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
                We handle residential and commercial real estate transactions. Purchases, sales, and refinances for homeowners and families through our SimplyClose division. Commercial acquisitions, dispositions, investment property transactions, and leasing through Mariotti Law Group.
              </p>
              <p>
                On every file, we search title through Teraview, review every registered instrument on the parcel, conduct execution and insolvency searches on the vendor, order and review off-title enquiries, confirm Planning Act compliance through abutting lands searches and planning law statements, and coordinate with the lender on mortgage instructions and security documentation. We review the agreement of purchase and sale for conditions that protect the buyer and obligations that bind the seller. We submit requisitions on title defects and follow them through to resolution or undertaking. On closing day, we register the transfer and charge electronically, report to the client, and complete the post-closing undertakings.
              </p>
              <p>
                For commercial transactions, the work expands. Tenant lease review and estoppel certificate collection. Environmental due diligence and RSC requirements under Ontario Regulation 153/04. Zoning compliance confirmation. Survey review. HST structuring under section 221(2) of the Excise Tax Act, including verification of the purchaser&apos;s GST registration and coordination of the self-assessment. Vendor take-back mortgage documentation where applicable. Assignment of contracts and transfer of operating permits.
              </p>
              <p>
                For investment properties, we verify the rent roll against the leases and the bank deposits. We confirm that every unit has proper building permits and that the current use complies with the zoning by-law. We review the property for Residential Tenancies Act compliance, including lawful rent calculations, above-guideline increase history, and any pending Landlord and Tenant Board applications. Properties built after November 15, 2018 are exempt from rent control. Properties built before that date are not. The distinction changes the investment thesis.
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
                The Planning Act is both a planning statute and a title statute. Section 50 prohibits any dealing with land where the owner retains abutting property unless a statutory exception applies. A contravening transfer does not create any interest in land. It is void. This is not a technical deficiency that title insurance covers. It is a transaction that did not happen. The Act is a significant source of malpractice claims for real estate lawyers and a significant source of title problems for buyers who hired the wrong one.
              </p>
              <p>
                HST on commercial real estate is where vendors get caught. When the purchaser is HST-registered, the vendor is relieved of collecting and the purchaser self-assesses. But if the purchaser&apos;s registration is defective or later revoked, the vendor is assessed. In one Tax Court decision, a vendor was assessed over $400,000 because the purchaser&apos;s GST registration was retroactively revoked after closing. Clear agreement drafting, registration verification, and indemnification clauses are the only protection.
              </p>
              <p>
                Environmental contamination does not appear on title. It appears in the soil. Under the Environmental Protection Act, liability for remediation is joint, several, and not based on fault. A purchaser who buys contaminated land inherits the cleanup obligation regardless of who caused the contamination. Title insurance does not cover environmental liability. A Phase I Environmental Site Assessment before closing is the only way to know what is in the ground before you own it.
              </p>
              <div className="highlight">
                <p>
                  A commercial lease in Ontario is not governed by the Residential Tenancies Act. There is no rent control. No automatic renewal. No Landlord and Tenant Board. The landlord can seize tenant property for unpaid rent without a court order and change the locks 16 days after rent is due. The lease agreement is the tenant&apos;s only protection. Every term in it matters.
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
              <h2>What transactions look like in Ontario.</h2>
            </div>
            <div className="stat-row">
              <div className="stat-item fade-in s1">
                <div className="stat-number">$16,475</div>
                <div className="stat-text">
                  Ontario Land Transfer Tax on a $1,000,000 commercial purchase. Non-residential properties cap at the 2.0% bracket.
                </div>
              </div>
              <div className="stat-item fade-in s2">
                <div className="stat-number">13%</div>
                <div className="stat-text">
                  HST on commercial real estate sales. The purchaser self-assesses if they are HST-registered. If their registration fails, the vendor pays.
                </div>
              </div>
              <div className="stat-item fade-in s3">
                <div className="stat-number">60–90 days</div>
                <div className="stat-text">
                  typical closing timeline for a commercial transaction. Residential closings run 30 to 60 days. The difference is the due diligence.
                </div>
              </div>
              <div className="stat-item fade-in s4">
                <div className="stat-number">25%</div>
                <div className="stat-text">
                  Non-Resident Speculation Tax on residential property across Ontario. In Toronto, an additional 10% municipal NRST applies. Combined foreign buyer tax in Toronto is 35%.
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
            <h2>The transactions we handle.</h2>
          </div>
          <div className="situations-grid">
            <div className="situation-card fade-in s1">
              <h3>You are buying or selling a home.</h3>
              <p>
                Our SimplyClose division handles residential purchases, sales, and refinances. Title search. Mortgage coordination. Closing. Registration. The process is streamlined because we do it every day, and we do it with the same attention to title and Planning Act compliance that we bring to commercial files.
              </p>
            </div>
            <div className="situation-card fade-in s2">
              <h3>You are acquiring or disposing of a commercial property.</h3>
              <p>
                Title review. Off-title enquiries. Zoning confirmation. Environmental due diligence. Tenant lease review and estoppels. HST structuring. We manage the due diligence and closing process on transactions where the volume of work between agreement and registration demands a firm that understands the commercial timeline.
              </p>
            </div>
            <div className="situation-card fade-in s3">
              <h3>You are buying an investment property and the rent roll needs verification.</h3>
              <p>
                Permitted units confirmed against building permits. Zoning compliance verified. Rent roll checked against leases and deposits. RTA compliance audited. Properties with units occupied before November 15, 2018 carry rent control obligations that follow the property to the new owner. We verify before you close.
              </p>
            </div>
            <div className="situation-card fade-in s4">
              <h3>You are negotiating a commercial lease and the landlord&apos;s form is 40 pages long.</h3>
              <p>
                Net lease or gross lease. Renewal options. Assignment and sublease rights. Exclusivity clauses. Continuous operation covenants. Demolition clauses. The landlord drafted the lease to protect the landlord. We review it to protect you. Or we draft it on your behalf.
              </p>
            </div>
            <div className="situation-card fade-in s5">
              <h3>You are refinancing and need the existing charge discharged and the new one registered.</h3>
              <p>
                Title search. Mortgage discharge coordination with the outgoing lender. New charge preparation and registration per the incoming lender&apos;s instructions. We handle refinances for homeowners through SimplyClose and for commercial property owners through the firm.
              </p>
            </div>
            <div className="situation-card fade-in s6">
              <h3>You are transferring property within the family for estate or tax planning purposes.</h3>
              <p>
                Capital gains on deemed disposition. Principal residence exemption planning. Land Transfer Tax on assumed mortgages. Income attribution rules. Matrimonial home risk if the recipient is married. Estate Administration Tax savings through lifetime transfers. We coordinate with your accountant and estate planning lawyer to structure the transfer properly.
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
            The closing date is fixed. The work required to get there is not.
          </h2>
          <p className="fade-in s2">
            Whether you are buying a first home or acquiring a commercial portfolio, the process starts with a title search and ends with a registration. We handle everything in between.
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

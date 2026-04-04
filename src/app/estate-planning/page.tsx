import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Wills & Estate Planning — Mariotti Law Group",
  description:
    "Wills, powers of attorney, trusts, and estate plans for Ontario families. Mariotti Law Group helps you protect your family, your assets, and your legacy.",
  openGraph: {
    title: "Wills & Estate Planning — Mariotti Law Group",
    description:
      "More than half of Canadians do not have a will. The gap between knowing you need a plan and actually having one is where the risk lives.",
    url: "https://mariottilaw.ca/estate-planning",
    siteName: "Mariotti Law Group",
    type: "website",
  },
};

export default function EstatePlanningPage() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" data-number="01">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/#practices">Services</a>
            <span className="sep">/</span>
            Wills &amp; Estate Planning
          </div>
          <h1 className="fade-in s1">
            The plan that protects your family when you cannot.
          </h1>
          <p className="lead fade-in s2">
            More than half of Canadians do not have a will. Fewer than four in ten have a power
            of attorney for property. The gap between knowing you need a plan and actually having
            one is where the risk lives.
          </p>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">01</div>
              <h2>What happens without a plan.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                Without a will, the Succession Law Reform Act decides who gets what. If you are
                married with children and your estate exceeds $350,000, your spouse takes that first
                $350,000 and a share of the remainder. Your children split the rest. You had no say.
              </p>
              <p>
                If you are in a common-law relationship, the situation is worse. Under the Succession
                Law Reform Act, a common-law partner has no right to inherit on intestacy. Twenty
                years together. Children together. It does not matter. Without a will, the surviving
                partner must apply to court for dependant support, prove their claim, and wait months
                for a result that is never guaranteed.
              </p>
              <p>
                Without a power of attorney, no one has authority over your finances or medical care
                if you become incapacitated. Not your spouse. Not your children. A guardianship
                application through the Superior Court takes roughly a year when uncontested, and
                costs $5,000 to $12,000 in legal fees, assessments, and court costs. When family
                members disagree, those figures climb past $20,000.
              </p>
              <div className="highlight">
                <p>
                  A power of attorney costs a fraction of a guardianship application. The difference
                  is measured in tens of thousands of dollars and months of delay, imposed on the
                  people closest to you at the worst possible moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="content-section" style={{ background: "var(--timberwolf-light)" }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">02</div>
              <h2>What we do.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                We prepare wills, continuing powers of attorney for property, and powers of attorney
                for personal care. For straightforward situations, the work is focused and efficient.
                For complex ones, we go further.
              </p>
              <p>
                Complex means business ownership where the estate plan and the shareholder agreement
                need to say the same thing. Blended families where children from a prior relationship
                need protection alongside a current spouse. Registered accounts where a $500,000 RRSP
                without a spousal rollover generates roughly $268,000 in tax at death. Cottages that
                trigger capital gains, create shared ownership disputes among siblings, and require
                planning that most families never think about until it is too late.
              </p>
              <p>
                We use the multiple wills strategy where it makes sense. A secondary will covers
                private company shares, personal effects, and other assets that do not require a
                Certificate of Appointment. Only the primary will goes through probate. For families
                with a member who has a disability, we draft Henson trusts that preserve Ontario
                Disability Support Program eligibility by keeping assets in the trustee&apos;s
                absolute discretion.
              </p>
              <p>
                We work with your accountant and financial advisor. Estate planning involves tax,
                insurance, and investment decisions that need to work together. We expect your other
                advisors to be part of the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How We Work */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-label fade-in">
              <div className="section-number">03</div>
              <h2>How we work.</h2>
            </div>
            <div className="content-body fade-in s2">
              <p className="opener">
                Every plan starts with a conversation. Not paperwork. A conversation about your
                family, your assets, and the outcomes that matter most to you.
              </p>
              <p>
                We ask questions you may not have considered. Who manages your finances if you have a
                stroke at 58? If you and your spouse die together, who raises your children and who
                manages their money? Does your shareholder agreement conflict with your will? Have you
                looked at your RRSP beneficiary designations since your last major life change?
              </p>
              <p>
                For a straightforward will and powers of attorney, the process takes two to three
                weeks from first meeting to signing. Complex plans take longer, and we tell you at
                the outset what to expect. We explain every document in plain language before you
                sign. We recommend reviewing your plan every three to five years, and immediately
                after any major life event.
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
              <h2>The cost of not planning.</h2>
            </div>
            <div className="stat-row">
              <div className="stat-item fade-in s1">
                <div className="stat-number">53%</div>
                <div className="stat-text">of Canadians do not have a will</div>
              </div>
              <div className="stat-item fade-in s2">
                <div className="stat-number">$5K–$12K</div>
                <div className="stat-text">
                  typical cost of an uncontested guardianship application when no power of attorney exists
                </div>
              </div>
              <div className="stat-item fade-in s3">
                <div className="stat-number">$350K</div>
                <div className="stat-text">
                  preferential share for a surviving spouse on intestacy under the SLRA. Everything above
                  that gets divided.
                </div>
              </div>
              <div className="stat-item fade-in s4">
                <div className="stat-number">$0</div>
                <div className="stat-text">
                  what a common-law partner inherits on intestacy under the Succession Law Reform Act. Zero.
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
            <h2>No two families are the same.</h2>
            <p>These are the situations we work with regularly.</p>
          </div>
          <div className="situations-grid">
            <div className="situation-card fade-in s1">
              <h3>Blended families.</h3>
              <p>
                Providing for a current spouse without disinheriting children from a prior relationship
                requires trust structures that balance competing obligations. A simple will that leaves
                everything to one person is not a plan. It is a postponed conflict.
              </p>
            </div>
            <div className="situation-card fade-in s2">
              <h3>Business owners.</h3>
              <p>
                If your will leaves shares to your children but your shareholder agreement gives
                partners a buyout at book value, one of those documents wins. Your family loses. The
                estate plan and the corporate documents need to say the same thing.
              </p>
            </div>
            <div className="situation-card fade-in s3">
              <h3>Parents of young children.</h3>
              <p>
                Naming a guardian in your will is the only way to express your preference for who
                raises your children. Without it, a court decides. A children&apos;s trust ensures
                the money is managed properly until your children are ready for it.
              </p>
            </div>
            <div className="situation-card fade-in s4">
              <h3>Common-law couples.</h3>
              <p>
                The Succession Law Reform Act does not treat you like a married couple when it comes
                to inheritance. Your partner has no automatic right to your estate. A will is not
                optional. It is the only thing standing between your partner and a court application.
              </p>
            </div>
            <div className="situation-card fade-in s5">
              <h3>Families with a member who has a disability.</h3>
              <p>
                An outright inheritance can disqualify your child from ODSP. A Henson trust holds
                assets in the trustee&apos;s absolute discretion, keeping the inheritance outside the
                beneficiary&apos;s personal asset limit while still allowing the trustee to enhance
                their quality of life.
              </p>
            </div>
            <div className="situation-card fade-in s6">
              <h3>Cottage and multi-property families.</h3>
              <p>
                The family cottage triggers capital gains tax on death, creates shared ownership
                headaches among siblings, and generates Land Transfer Tax if the planning is not done
                in advance. The children who want to keep it and the children who want to sell will
                disagree. Your plan needs to account for that.
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
            A 30-minute conversation is enough to know whether your plan protects your family.
          </h2>
          <p className="fade-in s2">
            If it does, we will tell you. If it does not, we will explain why and what to do about it.
          </p>
          <div className="cta-buttons fade-in s3">
            <a href="tel:+15199771965" className="btn">Call Us</a>
            <a href="mailto:info@mariottilaw.ca" className="btn btn-filled">Send an Email</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

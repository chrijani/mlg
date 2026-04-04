import ScrollAnimations from "./ScrollAnimations";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-left">
            <p className="text-sm-label text-gray fade-in">Est. 1965</p>
            <h1 className="fade-in stagger-1">
              Protecting what you&apos;ve built.<br />Planning for what&apos;s next.
            </h1>
            <p className="fade-in stagger-2">
              Estate planning. Mortgage enforcement. Commercial real estate. Corporate transactions.
              Mariotti Law Group has advised Ontario families, lenders, and businesses for six decades.
              One firm. Five practices. The counsel you need before you need it.
            </p>
            <a href="#contact" className="btn fade-in stagger-3">Schedule a Consultation</a>
          </div>
          <div className="hero-right">
            <div className="hero-heritage fade-in stagger-4">
              <div className="year">1965</div>
              <div className="label">Year Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>
      </div>

      {/* Core Practices */}
      <section className="practices" id="practices">
        <div className="container">
          <div className="practices-header fade-in">
            <span className="text-sm-label">Core Practices</span>
            <h2>What We Do</h2>
            <p>
              Every practice at our firm exists to solve a specific problem. We list them because they
              are what we do, every day, for clients who depend on getting it right.
            </p>
          </div>

          <div className="practices-grid">
            <div className="practice-card fade-in stagger-1">
              <div className="number">01</div>
              <h3>Wills &amp; Estate Planning</h3>
              <p>
                Your will is not a form to fill out. It is the document that determines who controls
                your assets, who raises your children, and whether your family spends six months in
                court or six minutes with a lawyer. We build estate plans that account for blended
                families, business interests, tax exposure, and the complications that only surface
                when it is too late to fix them.
              </p>
              <a href="/estate-planning" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-2">
              <div className="number">02</div>
              <h3>Estate Administration</h3>
              <p>
                When someone dies, the paperwork starts. Court applications. Tax clearances. Asset
                transfers. Creditor claims. Beneficiary disputes. Estate administration is detail work
                under emotional pressure, and the mistakes people make in the first 30 days can take
                years to undo. We guide estate trustees through every stage, from the Certificate of
                Appointment to the final distribution.
              </p>
              <a href="#" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-3">
              <div className="number">03</div>
              <h3>Mortgage Enforcement &amp; Private Lending</h3>
              <p>
                Private lenders succeed when their documentation is precise and their enforcement
                remedies are clear. We draft mortgage documents, promissory notes, and guarantees that
                anticipate default. When borrowers stop paying, we move to power-of-sale proceedings,
                receivership applications, and court-ordered sales with the efficiency your portfolio
                demands.
              </p>
              <a href="#" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-1">
              <div className="number">04</div>
              <h3>Real Estate — Commercial &amp; Development</h3>
              <p>
                Acquisitions. Development agreements. Construction financing. Commercial leases.
                Severances. Every commercial real estate transaction has a timeline, and every delay
                has a cost. We work at the speed of the deal without cutting corners on the details
                that protect your position.
              </p>
              <a href="#" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>

            <div className="practice-card fade-in stagger-2">
              <div className="number">05</div>
              <h3>Corporate &amp; Commercial</h3>
              <p>
                Business purchases and sales. Shareholder agreements. Partnership structures.
                Commercial contracts. When relationships are good, everyone agrees on a handshake.
                When they change, you need the agreement you signed three years ago to say exactly
                what it needs to say. We write those agreements.
              </p>
              <a href="#" className="card-link">
                Learn more <ArrowIcon />
              </a>
            </div>
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
              <p>
                Mariotti Law Group advises Ontario families, private lenders, developers, and
                businesses across five core practice areas. Estate planning and administration.
                Mortgage enforcement and private lending. Commercial and development real estate.
                Corporate and commercial transactions. Each practice exists because clients need it,
                and each is staffed by people who work in that area every day.
              </p>
              <p>
                What has remained constant since the firm&apos;s founding in 1965 is the approach:
                understand the client&apos;s situation completely before proposing a solution.
                Anticipate problems before they arrive. Explain the options in plain language.
                Execute with precision.
              </p>
              <p>
                We do not try to be all things to all people. Clients who need careful,
                forward-looking legal counsel for their family, their investments, or their business
                are the clients we serve well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="approach" id="approach">
        <div className="container">
          <div className="approach-header fade-in">
            <span className="text-sm-label">How We Work</span>
            <h2>Counsel, not just compliance.</h2>
          </div>

          <div className="approach-items">
            <div className="approach-item fade-in stagger-1">
              <h3>We listen before we advise.</h3>
              <p>
                Every engagement starts with understanding. Your situation, your concerns, the
                outcomes that matter to you. We ask the questions that surface issues you may not
                have considered, and we do not propose solutions until we understand the full picture.
              </p>
            </div>
            <div className="approach-item fade-in stagger-2">
              <h3>We think three moves ahead.</h3>
              <p>
                The value of a good lawyer is not in the document they draft today. It is in the
                problem they prevent next year. We structure agreements, estate plans, and
                transactions with an eye toward what could change, what could go wrong, and how your
                interests stay protected when it does.
              </p>
            </div>
            <div className="approach-item fade-in stagger-3">
              <h3>We speak plainly.</h3>
              <p>
                Legal complexity is not an excuse for unclear communication. We explain the law in
                terms you can act on. If you leave a meeting unsure about what was decided or what
                happens next, we have not done our job.
              </p>
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
            <a href="tel:+1XXXXXXXXXX" className="btn">Call Us</a>
            <a href="mailto:info@mariottilaw.ca" className="btn btn-filled">Send an Email</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Our Team — Mariotti Law Group",
  description:
    "Meet the lawyers at Mariotti Law Group. Five practitioners. Seven practice areas. Six decades of advising Ontario families, lenders, and businesses.",
  openGraph: {
    title: "Our Team — Mariotti Law Group",
    description:
      "The people behind the counsel. Meet the team that has advised Ontario families, lenders, and businesses since 1965.",
    url: "https://mariottilaw.ca/team",
    siteName: "Mariotti Law Group",
    type: "website",
  },
};

const team = [
  {
    name: "Christian Janisse",
    title: "Managing Partner",
    bio: "Christian leads the firm\u2019s corporate, commercial, and real estate practice groups. He advises business owners, developers, and private lenders on transactions that require precision documentation and forward-looking strategy. His clients trust him because he identifies issues before they become problems\u2014and because he speaks plainly about what needs to happen next.",
    areas: ["Corporate & Commercial", "Real Estate Transactions", "Private Lending", "Real Estate Development"],
  },
  {
    name: "David Coscarella",
    title: "Partner",
    bio: "David brings a depth of experience in mortgage enforcement and private lending that comes from handling hundreds of files to resolution. When borrowers default, David acts. Power-of-sale proceedings, receivership applications, court-ordered sales\u2014he executes with the diligence that lenders depend on when the stakes are highest.",
    areas: ["Mortgage Enforcement", "Private Lending", "Real Estate Transactions"],
  },
  {
    name: "Joya Innocente",
    title: "Associate",
    bio: "Joya\u2019s practice focuses on estate planning and estate administration\u2014the area of law where careful drafting today prevents costly disputes tomorrow. She works with families, business owners, and individuals to build estate plans that reflect their actual circumstances, not a template. When estates need to be administered, she guides trustees through every step with patience and precision.",
    areas: ["Wills & Estate Planning", "Estate Administration"],
  },
  {
    name: "Lauren Del Greco",
    title: "Associate",
    bio: "Lauren handles residential and commercial real estate transactions from agreement to closing. She understands that every deal has a timeline, and every delay has a cost. Her clients\u2014whether first-time buyers or experienced investors\u2014value her attention to detail and her ability to keep complex closings on track.",
    areas: ["Real Estate Transactions", "Real Estate Development"],
  },
  {
    name: "Nicole Couvillon",
    title: "Associate",
    bio: "Nicole supports the firm\u2019s corporate and commercial practice, advising on business purchases and sales, shareholder agreements, and commercial contracts. She approaches every engagement with the understanding that the agreement you sign today is the one you\u2019ll rely on when circumstances change.",
    areas: ["Corporate & Commercial", "Real Estate Transactions"],
  },
];

export default function TeamPage() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero page-hero-short">
        <div className="container">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            Our Team
          </div>
          <h1 className="fade-in s1">
            The people behind the counsel.
          </h1>
          <p className="lead fade-in s2">
            Five practitioners. Seven practice areas. Every engagement at Mariotti Law Group
            is led by a lawyer who knows your file, understands your objectives, and is
            accountable for the outcome.
          </p>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="team-philosophy">
        <div className="container-narrow">
          <div className="fade-in">
            <p className="team-philosophy-text">
              A law firm is only as good as the people who do the work. At Mariotti Law Group,
              every client is served by a lawyer\u2014not a clerk, not a paralegal handling the file
              alone, not an associate you have never met. You will know your lawyer by name. They
              will know your matter by heart.
            </p>
            <p className="team-philosophy-text">
              We hire carefully. We train rigorously. And we have built a team that shares a single
              conviction: the best legal work is invisible. When it is done right, you never see the
              problems that were prevented.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="container">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`team-member fade-in stagger-${(i % 3) + 1}`}
            >
              <div className="team-member-photo">
                <div className="team-photo-placeholder">
                  <span>{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
              </div>
              <div className="team-member-info">
                <span className="text-sm-label text-gray">{member.title}</span>
                <h2>{member.name}</h2>
                <p className="team-member-bio">{member.bio}</p>
                <div className="team-member-areas">
                  {member.areas.map((area) => (
                    <span key={area} className="team-area-tag">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Strip */}
      <section className="dark-section">
        <div className="container">
          <h2 className="fade-in" style={{ textAlign: "center", marginBottom: "1rem" }}>
            How we work
          </h2>
          <p className="fade-in stagger-1" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 3rem" }}>
            Every member of the team operates by the same principles.
          </p>
          <div className="stat-row fade-in stagger-2">
            <div className="stat-item">
              <div className="stat-number">Direct</div>
              <p>Your lawyer is your point of contact. No runaround. No layers.</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">Precise</div>
              <p>We draft, review, and advise with the care that comes from knowing the cost of a mistake.</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">Candid</div>
              <p>We tell you what you need to hear. If the answer is no, we say so early.</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">Prepared</div>
              <p>We anticipate issues before they surface. The value is in what we prevent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="text-sm-label text-gray fade-in" style={{ display: "block", marginBottom: "1rem" }}>
            Work With Us
          </span>
          <h2 className="fade-in stagger-1">
            The right lawyer for the work ahead.
          </h2>
          <p className="fade-in stagger-2">
            Whether you need to plan an estate, close a transaction, enforce a mortgage, or
            structure a business, a conversation is the place to start. Tell us what you are
            facing, and we will connect you with the right member of our team.
          </p>
          <div className="cta-buttons fade-in stagger-3">
            <a href="tel:+1XXXXXXXXXX" className="btn">Call Us</a>
            <a href="/contact" className="btn btn-filled">Schedule a Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollAnimations from "../ScrollAnimations";

export const metadata: Metadata = {
  title: "Resources — Mariotti Law Group",
  description:
    "Legal insights, updates, and practical guidance from Mariotti Law Group. Estate planning, corporate law, real estate, and mortgage enforcement in Ontario.",
  openGraph: {
    title: "Resources — Mariotti Law Group",
    description:
      "Articles, updates, and practical legal guidance for Ontario families and businesses.",
    url: "https://mariottilaw.ca/resources",
    siteName: "Mariotti Law Group",
    type: "website",
  },
};

interface Article {
  title: string;
  description: string;
  category: string;
  date: string;
  href: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    title: "Why every Ontario business owner needs a shareholder agreement before they need one",
    description:
      "A handshake works until it does not. We explain the five provisions that prevent the disputes we see most often in closely held businesses.",
    category: "Corporate & Commercial",
    date: "Coming Soon",
    href: "#",
    featured: true,
  },
  {
    title: "The true cost of dying without a will in Ontario",
    description:
      "The Succession Law Reform Act decides who gets what. For common-law partners, the answer is nothing. We break down what intestacy actually means for your family.",
    category: "Wills & Estate Planning",
    date: "Coming Soon",
    href: "#",
    featured: true,
  },
  {
    title: "You were named executor. Here is what happens in the first 30 days.",
    description:
      "Court applications, tax filings, creditor notices, and personal liability. A practical guide for newly appointed estate trustees.",
    category: "Estate Administration",
    date: "Coming Soon",
    href: "#",
  },
  {
    title: "Private lending in Ontario: documentation that survives enforcement",
    description:
      "Standard-form mortgages downloaded from the internet rarely survive contested proceedings. What lenders need to know before funding.",
    category: "Mortgage Enforcement",
    date: "Coming Soon",
    href: "#",
  },
  {
    title: "The transparency register: what Ontario corporations need to file and why it matters",
    description:
      "Since January 2023, every Ontario corporation must maintain a register of individuals with significant control. The penalty for non-compliance is up to $200,000.",
    category: "Corporate & Commercial",
    date: "Coming Soon",
    href: "#",
  },
  {
    title: "Estate freezes explained: when your accountant says it is time",
    description:
      "An estate freeze locks in the current value of your business for tax purposes and shifts future growth to the next generation. Here is how it works and when it makes sense.",
    category: "Corporate & Commercial",
    date: "Coming Soon",
    href: "#",
  },
  {
    title: "Henson trusts: protecting a loved one with a disability without losing ODSP",
    description:
      "An outright inheritance can disqualify your child from Ontario Disability Support Program benefits. A Henson trust preserves eligibility while enhancing quality of life.",
    category: "Wills & Estate Planning",
    date: "Coming Soon",
    href: "#",
  },
  {
    title: "Power of sale vs. judicial sale: which enforcement path and when",
    description:
      "Two remedies, two timelines, two cost structures. How private lenders decide which enforcement mechanism fits the situation.",
    category: "Mortgage Enforcement",
    date: "Coming Soon",
    href: "#",
  },
  {
    title: "Due diligence in commercial real estate: what buyers miss",
    description:
      "Title searches, zoning compliance, environmental assessments, and the assumptions that cost buyers money after closing.",
    category: "Real Estate",
    date: "Coming Soon",
    href: "#",
  },
];

const categories = [
  "All",
  "Wills & Estate Planning",
  "Estate Administration",
  "Mortgage Enforcement",
  "Corporate & Commercial",
  "Real Estate",
];

export default function ResourcesPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

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
            Resources
          </div>
          <h1 className="fade-in s1">Insights and practical guidance.</h1>
          <p className="lead fade-in s2">
            Legal updates, client guides, and the questions we get asked most often.
            Written by the lawyers who do this work every day.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="resources-filter">
        <div className="container">
          <div className="filter-tags fade-in">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`filter-tag${cat === "All" ? " filter-tag-active" : ""}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <section className="resources-featured">
        <div className="container">
          <div className="resources-featured-grid">
            {featured.map((article, i) => (
              <a
                key={article.title}
                href={article.href}
                className={`featured-card fade-in s${i + 1}`}
              >
                <div className="featured-card-inner">
                  <span className="article-category">{article.category}</span>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <span className="article-date">{article.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="resources-list">
        <div className="container">
          <div className="resources-list-header fade-in">
            <span className="text-sm-label">All Articles</span>
          </div>
          <div className="resources-list-grid">
            {rest.map((article, i) => (
              <a
                key={article.title}
                href={article.href}
                className={`article-card fade-in s${(i % 6) + 1}`}
              >
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span className="article-date">{article.date}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta-section">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span
            className="text-sm-label text-gray fade-in"
            style={{ display: "block", marginBottom: "1rem" }}
          >
            Stay Informed
          </span>
          <h2 className="fade-in s1">
            Clause &amp; Effect
          </h2>
          <p className="fade-in s2">
            Practical legal updates for Ontario families and businesses. No jargon.
            No filler. Published when we have something worth saying.
          </p>
          <div className="cta-buttons fade-in s3">
            <a href="/contact" className="btn btn-filled">Subscribe</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

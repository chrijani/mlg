import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ScrollAnimations from "../../ScrollAnimations";

// UPDATE THESE for each new article:
// - title: "[Article Title] | Mariotti Law Group"
// - description: 140-155 chars summarizing the article, include primary keyword
// - canonical URL, OG URL
export const metadata: Metadata = {
  title: "Article Title Goes Here | Mariotti Law Group",
  description:
    "This is where the opening paragraph goes. It should summarize the key takeaway from the article in two to three sentences.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://mariottilaw.ca/resources/template" },
  openGraph: {
    title: "Article Title Goes Here | Mariotti Law Group",
    description:
      "This is where the opening paragraph goes. It should summarize the key takeaway from the article.",
    url: "https://mariottilaw.ca/resources/template",
    siteName: "Mariotti Law Group",
    type: "article",
    locale: "en_CA",
    images: [{ url: "https://mariottilaw.ca/assets/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Article Title Goes Here | Mariotti Law Group",
    description:
      "This is where the opening paragraph goes. It should summarize the key takeaway from the article.",
    images: ["https://mariottilaw.ca/assets/images/og-image.jpg"],
  },
};

const relatedArticles = [
  {
    category: "Estate Planning",
    title: "Related Article Title One",
    date: "March 2026",
    href: "/resources",
  },
  {
    category: "Mortgage Enforcement",
    title: "Related Article Title Two",
    date: "March 2026",
    href: "/resources",
  },
  {
    category: "Private Lending",
    title: "Related Article Title Three",
    date: "February 2026",
    href: "/resources",
  },
];

// UPDATE datePublished, dateModified, headline, author, and URL for each article
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Article Title Goes Here",
    author: {
      "@type": "Person",
      name: "Christian Mariotti",
      url: "https://mariottilaw.ca/team/christian-mariotti",
    },
    publisher: {
      "@type": "Organization",
      name: "Mariotti Law Group",
      url: "https://mariottilaw.ca",
    },
    datePublished: "2026-04-03",
    dateModified: "2026-04-03",
    url: "https://mariottilaw.ca/resources/template",
    mainEntityOfPage: "https://mariottilaw.ca/resources/template",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mariottilaw.ca/" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://mariottilaw.ca/resources" },
      { "@type": "ListItem", position: 3, name: "Article Title Goes Here", item: "https://mariottilaw.ca/resources/template" },
    ],
  },
];

export default function ArticleTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollAnimations />
      <Navbar />

      {/* Article Hero */}
      <section className="article-hero" id="main-content">
        <div className="container-article">
          <div className="breadcrumb fade-in">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/resources">Resources</a>
            <span className="sep">/</span>
            Article Title Goes Here
          </div>
          <span className="text-sm-label text-gray fade-in s1" style={{ display: "block", marginTop: "2rem" }}>
            Clause &amp; Effect
          </span>
          <h1 className="fade-in s1">
            Article Title Goes Here
          </h1>
          <p className="article-meta fade-in s2">
            Christian Mariotti &middot; April 3, 2026
          </p>
          <div className="article-rule"></div>
        </div>
      </section>

      {/* Article Body */}
      <section className="article-body-section">
        <div className="container-article">
          <div className="article-content fade-in">
            <p className="opener">
              This is where the opening paragraph goes. It should summarize the key takeaway from the article in two to three sentences. The first paragraph is styled in night colour with weight 400 to distinguish it from the body text that follows.
            </p>

            <p>
              The body paragraphs carry the analysis. For Clause &amp; Effect newsletters, this is where the case facts, the court&apos;s reasoning, and the practical implications for real estate professionals are laid out. Each paragraph earns its place on the page.
            </p>

            <p>
              The closing paragraph ties the analysis back to the reader&apos;s practice. What should a realtor, mortgage broker, or investor do differently because of this decision? The answer belongs here.
            </p>
          </div>

          {/* Article Footer */}
          <div className="article-rule"></div>

          <div className="article-author-card fade-in">
            <div className="article-author-avatar">
              <span>CM</span>
            </div>
            <div className="article-author-info">
              <div className="article-author-name">Christian Mariotti</div>
              <div className="article-author-desc">Real Estate, Private Lending, Mortgage Enforcement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="article-related">
        <div className="container-article">
          <span className="text-sm-label text-gray fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
            Related Articles
          </span>
          <div className="article-related-grid">
            {relatedArticles.map((a) => (
              <Link key={a.title} href={a.href} className="article-related-card fade-in">
                <span className="article-related-category">{a.category}</span>
                <h3>{a.title}</h3>
                <span className="article-related-date">{a.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="subscribe">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="text-sm-label text-gray fade-in" style={{ display: "block", marginBottom: "1rem" }}>
            Stay Current
          </span>
          <h2 className="fade-in s1">
            Subscribe to Clause &amp; Effect.
          </h2>
          <p className="fade-in s2">
            Ontario court decisions translated into practical insights for real estate professionals, lenders, and business owners. Delivered to your inbox.
          </p>
          <div className="cta-buttons fade-in s3">
            <a href="#" className="btn">Subscribe</a>
            <a href="/resources" className="btn btn-filled">View All Resources</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

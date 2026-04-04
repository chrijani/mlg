# Blog / Article SEO Publishing Checklist

Use this checklist each time a new article is published under `/resources/`.

## Before Publishing

- [ ] **Title tag** — Under 60 characters, includes primary keyword
- [ ] **Meta description** — 140-155 characters, includes primary keyword, compelling CTA
- [ ] **Canonical URL** — Set to `https://mariottilaw.ca/resources/[slug]`
- [ ] **OG tags** — Title, description, URL, image all set
- [ ] **Twitter card** — summary_large_image with title, description, image
- [ ] **H1** — One per page, matches article title, includes primary keyword
- [ ] **H2/H3 structure** — Logical hierarchy, no skipped levels
- [ ] **Internal links** — Link to 2-3 relevant practice area pages from body text
- [ ] **Opening paragraph** — Summarizes key takeaway in 2-3 sentences
- [ ] **JSON-LD Article schema** — headline, author, datePublished, dateModified, URL
- [ ] **JSON-LD BreadcrumbList** — Home > Resources > Article Title
- [ ] **Robots directive** — Remove `noindex, nofollow` (only on template)
- [ ] **Sitemap** — Add URL to `/public/sitemap.xml`
- [ ] **Related articles** — Update the 3 related article links at bottom of page
- [ ] **Author card** — Verify author name and practice areas are correct
- [ ] **CTA section** — Newsletter subscribe + "View All Resources" link present

## After Publishing

- [ ] **Verify in browser** — Check all links, images, and formatting
- [ ] **Test OG tags** — Use a social sharing debugger to verify preview
- [ ] **Mobile check** — Verify layout on mobile breakpoints
- [ ] **Internal links from other pages** — Add links to the new article from relevant practice pages if appropriate

## Template Location
The article template is at `/src/app/resources/template/page.tsx`. Copy this for each new article.

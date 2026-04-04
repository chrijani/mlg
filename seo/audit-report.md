# SEO Audit Report — Mariotti Law Group
**Date:** April 4, 2026  
**Auditor:** Claude (automated)

## Summary
Comprehensive SEO audit covering meta tags, structured data, heading hierarchy, accessibility, mobile optimization, sitemap, robots.txt, and blog infrastructure.

## Completed

### Phase 1: Meta Tags
- ✅ All 11 pages have keyword-optimized title tags (under 60 chars)
- ✅ All 11 pages have meta descriptions (140-155 chars)
- ✅ Canonical URLs set on every page
- ✅ Open Graph tags (title, description, URL, image, locale) on every page
- ✅ Twitter cards (summary_large_image) on every page

### Phase 2: Structured Data (JSON-LD)
- ✅ Homepage: LegalService schema with areaServed (Windsor, Essex County, Ontario) + BreadcrumbList
- ✅ 7 service pages: LegalService schema + BreadcrumbList
- ✅ Team page: BreadcrumbList
- ✅ Christian Mariotti bio: Person schema + BreadcrumbList
- ✅ Contact page: BreadcrumbList
- ✅ Resources page: BreadcrumbList
- ✅ Article template: Article schema + BreadcrumbList

### Phase 5-6: Accessibility & Mobile
- ✅ Skip-to-content link on every page (skip-link in layout.tsx)
- ✅ Focus-visible outlines on all interactive elements
- ✅ 44px minimum touch targets on mobile (768px breakpoint)
- ✅ 14px minimum font size on mobile
- ✅ All `id="main-content"` targets set for skip link

### Phase 7: Crawlability
- ✅ `/public/sitemap.xml` — 12 URLs (all public pages, excludes template)
- ✅ `/public/robots.txt` — Allows all crawlers, blocks `/resources/template`, blocks AI training crawlers (GPTBot, CCBot, Google-Extended, anthropic-ai)
- ✅ Sitemap reference in robots.txt
- ✅ Article template has `robots: "noindex, nofollow"`

### Phase 8-9: Documentation
- ✅ `seo/keyword-map.md` — Primary and secondary keywords for every page
- ✅ `seo/blog-seo-checklist.md` — Publishing checklist for new articles
- ✅ `seo/audit-report.md` — This document

## Needs Attention (Cannot Fix Automatically)

### OG Image
- ⚠️ All pages reference `/assets/images/og-image.jpg` — this file needs to be created (1200x630px recommended). Currently this path may 404.

### Geo Meta Tags
- ℹ️ Geo meta tags (geo.region, geo.placename, geo.position, ICBM) are set in the root layout for local SEO.

### Google Search Console
- ⚠️ Submit sitemap at `https://mariottilaw.ca/sitemap.xml` to Google Search Console once the site is verified.

### Vercel Headers
- ⚠️ Consider adding security/performance headers in `vercel.json` or `next.config.js`:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - Cache-Control headers for static assets

### Bio Pages
- ⚠️ Only Christian Mariotti has a bio page. Other 4 lawyers (Christian Janisse, David Coscarella, Joya Innocente, Lauren Del Greco) need bio pages created.

### Blog Articles
- ⚠️ All 9 articles on the resources page are "Coming Soon" with `href="#"`. When published, each needs its own page, sitemap entry, and JSON-LD.

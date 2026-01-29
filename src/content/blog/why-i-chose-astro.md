---
title: "Why I Chose Astro for My Portfolio"
description: "A deep dive into why Astro's island architecture was the perfect choice for a performance-focused personal site."
pubDate: 2024-12-20
tags: ["web", "astro", "performance"]
---

When rebuilding my portfolio, I evaluated several frameworks. After extensive testing, Astro emerged as the clear winner. Here's why.

## The Requirements

I needed a site that was:

- **Blazingly fast** — first impressions matter
- **Easy to maintain** — I want to focus on content, not infrastructure
- **Flexible** — able to handle both static content and interactive elements

## Why Not Next.js?

Don't get me wrong—Next.js is excellent. I use it daily at work. But for a portfolio site that's 95% static content, shipping a full React runtime felt excessive.

## Astro's Island Architecture

What sold me on Astro was the island architecture. I can write most of my site as pure HTML/CSS, then selectively hydrate interactive components only where needed.

```astro
---
// This runs at build time
const projects = await getProjects();
---

<Layout>
  <!-- Static HTML, zero JS -->
  <ProjectGrid projects={projects} />
  
  <!-- Interactive island -->
  <VideoPlayer client:visible />
</Layout>
```

## Performance Results

The numbers speak for themselves:

| Metric | Before (Next.js) | After (Astro) |
|--------|------------------|---------------|
| First Contentful Paint | 1.2s | 0.4s |
| Total JS Bundle | 180KB | 12KB |
| Lighthouse Score | 89 | 100 |

## The Developer Experience

Beyond performance, Astro's DX is exceptional:

- **File-based routing** that just works
- **Built-in Markdown support** with frontmatter
- **Component islands** from any framework
- **Content collections** for type-safe content

## Conclusion

For content-focused sites, Astro offers the best of both worlds: the developer experience of modern frameworks with the performance of static HTML. I couldn't be happier with the choice.

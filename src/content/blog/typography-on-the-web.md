---
title: "Typography on the Web: Beyond Font Selection"
description: "A comprehensive guide to web typography, from variable fonts to responsive sizing and optical adjustments."
pubDate: 2024-09-12
tags: ["typography", "css", "design"]
---

Good typography is invisible. When it works, readers focus on the content. When it doesn't, they struggle to engage. Here's what I've learned about making type work on the web.

## The Foundation: System Font Stacks

Before loading custom fonts, consider if the system stack is sufficient:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

System fonts offer:
- Zero load time
- Familiarity to the user
- Excellent rendering

## Variable Fonts

Variable fonts pack multiple weights and styles into a single file. This is both a performance win and a design superpower.

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

h1 {
  font-weight: 650; /* Any value from 100-900 */
}
```

### Optical Sizing

Variable fonts can adjust their design for different sizes. Small text becomes slightly heavier for readability:

```css
.body-text {
  font-optical-sizing: auto;
}
```

## Responsive Typography

### Fluid Type Scales

Instead of breakpoints, use `clamp()` for smooth scaling:

```css
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
```

This creates a font size that:
- Never goes below 2rem
- Scales with viewport width
- Never exceeds 4rem

### Line Length

Optimal reading length is 45-75 characters. Use `ch` units:

```css
.article {
  max-width: 65ch;
}
```

## Vertical Rhythm

Consistent spacing creates visual harmony. I use an 8px baseline grid:

```css
:root {
  --baseline: 8px;
}

p {
  margin-bottom: calc(var(--baseline) * 3); /* 24px */
  line-height: calc(var(--baseline) * 3);   /* 24px */
}

h2 {
  margin-top: calc(var(--baseline) * 6);    /* 48px */
  margin-bottom: calc(var(--baseline) * 2); /* 16px */
}
```

## Fine-Tuning

### Letter Spacing

Headlines often benefit from tighter tracking:

```css
h1 {
  letter-spacing: -0.02em;
}

.all-caps {
  letter-spacing: 0.1em; /* Caps need more space */
}
```

### Font Feature Settings

OpenType features unlock hidden typography powers:

```css
.tabular-numbers {
  font-feature-settings: 'tnum'; /* Fixed-width numbers */
}

.small-caps {
  font-feature-settings: 'smcp'; /* True small caps */
}
```

## Loading Strategy

Font loading affects perceived performance. My recommended approach:

```html
<link rel="preload" href="/fonts/Inter-Variable.woff2" 
  as="font" type="font/woff2" crossorigin>
```

Combined with `font-display: swap`, this ensures text is always visible.

## Conclusion

Typography on the web is a balance between aesthetics and performance. Master the fundamentals—sizing, spacing, and loading—and your type will serve your readers well.

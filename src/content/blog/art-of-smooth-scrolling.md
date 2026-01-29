---
title: "The Art of Smooth Scrolling"
description: "A technical deep dive into Lenis and the physics behind buttery smooth scroll experiences."
pubDate: 2024-10-28
tags: ["animation", "performance", "javascript"]
---

Smooth scrolling can make a website feel premium and polished. But achieving that buttery feel requires understanding both the physics and the implementation details.

## Why Default Scrolling Feels "Off"

Browser native scrolling is immediate and linear. When you stop scrolling, the page stops instantly. In the physical world, objects have momentum—they coast to a stop.

This is where libraries like Lenis come in.

## Understanding Lenis

Lenis creates a virtual scroll position that lerps (linear interpolates) toward the target position. The result is a smooth deceleration that feels natural.

### Basic Setup

```javascript
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

### The Easing Function

The default easing is an exponential decay that mimics natural friction:

```javascript
// This creates a quick start with a gentle stop
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
```

You can customize this for different feels:

```javascript
// Snappier
easing: (t) => 1 - Math.pow(1 - t, 3)

// More gradual
easing: (t) => t < 0.5 
  ? 4 * t * t * t 
  : 1 - Math.pow(-2 * t + 2, 3) / 2
```

## Performance Considerations

### GPU Acceleration

Use transforms instead of scroll position when animating elements based on scroll:

```css
.parallax-element {
  will-change: transform;
  transform: translateZ(0);
}
```

### Throttling Scroll Events

Lenis provides a scroll event, but be careful not to do heavy work on every frame:

```javascript
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  // Only update when velocity is significant
  if (Math.abs(velocity) > 0.1) {
    updateParallax(progress);
  }
});
```

## When Not to Use Smooth Scrolling

Smooth scrolling isn't always appropriate:

- **Accessibility concerns** — Some users find it disorienting
- **Content-heavy sites** — Long articles where users need to scroll quickly
- **Mobile** — Touch scrolling already has momentum built in

Always respect `prefers-reduced-motion`:

```javascript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const lenis = new Lenis({
  smooth: !prefersReducedMotion,
});
```

## Conclusion

Smooth scrolling is a subtle enhancement that can elevate a website from good to great. But like all animation, it should serve the user experience, not distract from it.

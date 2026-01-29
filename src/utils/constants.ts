/**
 * Application Constants
 * Centralized configuration for maintainability
 */

// Scroll thresholds
export const SCROLL_TO_TOP_THRESHOLD = 200;

// Debounce timing
export const RESIZE_DEBOUNCE_MS = 150;

// Mobile breakpoint
export const MOBILE_BREAKPOINT = 768;

// Animation durations (in ms)
export const DURATION = {
  FAST: 150,
  NORMAL: 250,
  SLOW: 400,
  SLOWER: 600,
} as const;

// Intersection Observer margins
export const OBSERVER_MARGINS = {
  VIDEO: '100px 0px',
  PREFETCH: '50px 0px',
} as const;

// Lenis configuration
export const LENIS_CONFIG = {
  LERP: 0.1,
  WHEEL_MULTIPLIER: 0.8,
  TOUCH_MULTIPLIER: 1.5,
} as const;

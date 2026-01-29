/**
 * Video Observer Utility
 * Singleton pattern for efficient video playback management
 * Pauses videos when out of viewport to save resources
 */

// Configuration constants
const VIDEO_PRELOAD_MARGIN = '100px 0px';
const VIDEO_VISIBILITY_THRESHOLD = 0.1;

let videoObserver: IntersectionObserver | null = null;
let observedVideos = new Set<HTMLVideoElement>();

/**
 * Creates or returns the singleton IntersectionObserver instance
 */
function getVideoObserver(): IntersectionObserver {
  if (!videoObserver) {
    videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            // Video visible: play with error handling
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                // Autoplay was prevented, show poster or fallback
                if (error.name === 'NotAllowedError') {
                  video.muted = true;
                  video.play().catch(() => {});
                }
              });
            }
          } else {
            // Video out of view: pause to save resources
            video.pause();
          }
        });
      },
      {
        rootMargin: VIDEO_PRELOAD_MARGIN,
        threshold: VIDEO_VISIBILITY_THRESHOLD,
      }
    );
  }

  return videoObserver;
}

/**
 * Observes a video element for viewport visibility
 */
export function observeVideo(video: HTMLVideoElement): void {
  if (!video || observedVideos.has(video)) return;

  const observer = getVideoObserver();
  observer.observe(video);
  observedVideos.add(video);
}

/**
 * Stops observing a specific video element
 */
export function unobserveVideo(video: HTMLVideoElement): void {
  if (!video || !observedVideos.has(video)) return;

  videoObserver?.unobserve(video);
  observedVideos.delete(video);
}

/**
 * Observes all videos matching a selector
 */
export function observeAllVideos(selector: string): void {
  document.querySelectorAll<HTMLVideoElement>(selector).forEach((video) => {
    observeVideo(video);
  });
}

/**
 * Disconnects the observer and cleans up
 * Call this on page transitions (astro:before-preparation)
 */
export function disconnectVideoObserver(): void {
  if (videoObserver) {
    videoObserver.disconnect();
    videoObserver = null;
  }
  observedVideos.clear();
}

/**
 * Setup cleanup for Astro View Transitions
 */
export function setupVideoObserverCleanup(): void {
  document.addEventListener('astro:before-preparation', () => {
    disconnectVideoObserver();
  });
}

export const FB_PIXEL_ID = 1725744551683051;

// Safe check for `window.fbq`
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};
// Safe check for `window.fbq`
export const viewcontent = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "ViewContent");
  }
};

// Track custom events
export const event = (name: string, options = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, options);
  }
};

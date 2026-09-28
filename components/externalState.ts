import { useSyncExternalStore } from "react";

/* Two bits of state that live outside React: the media query, and the
 * theme attribute set on <html> before first paint. Subscribing to them
 * keeps render pure and avoids a setState-in-effect cascade. */

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false, // server: assume no preference
  );
}

export function useTheme(): "light" | "dark" {
  return useSyncExternalStore(
    (onChange) => {
      const observer = new MutationObserver(onChange);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
      return () => observer.disconnect();
    },
    () =>
      document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
    () => "light" as const,
  );
}

export function setTheme(next: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* private mode or blocked storage — the toggle still works for this visit */
  }
}

"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    window.history.scrollRestoration = "manual";

    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigation?.type === "reload";

    if (isReload && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return null;
}

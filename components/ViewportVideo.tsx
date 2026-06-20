"use client";

import { useEffect, useRef } from "react";

type ViewportVideoProps = {
  src: string;
  poster: string;
  className?: string;
  mobile?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export default function ViewportVideo({
  src,
  poster,
  className,
  mobile = false,
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const connection = (navigator as NavigatorWithConnection).connection;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;

    if (connection?.saveData || prefersReducedMotion || (!mobile && isSmallScreen)) {
      return;
    }

    let sourceLoaded = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!sourceLoaded) {
            video.src = src;
            video.load();
            sourceLoaded = true;
          }
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.15 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [mobile, src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      className={className}
    />
  );
}

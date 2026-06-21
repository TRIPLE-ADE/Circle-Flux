"use client";

import {
  type CSSProperties,
  type FocusEvent,
  type TransitionEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const SLIDE_MS = 700;
const SLIDE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const CLONE_COUNT = 2;
const TESTIMONIALS = [
  {
    id: 0,
    quote: "CircleFlux has been our primary table water supplier for over 2 years. Their delivery is always on time, and our customers frequently comment on how fresh the water tastes.",
    author: "Emeka Obi",
    role: "Supermarket Owner",
  },
  {
    id: 1,
    quote: "We have used Circleflux Water for several corporate and social events, and the feedback is always positive. The packaging is premium, and the quality is exceptional.",
    author: "Patricia Adebayo",
    role: "Operations Manager",
  },
  {
    id: 2,
    quote: "Outstanding water quality! I love the modern, premium look of the bottles. It makes a statement at our events and matches our brand aesthetic perfectly.",
    author: "Funke Balogun",
    role: "Event Planner",
  },
  {
    id: 3,
    quote: "As a health coach, hydration is key for my clients. CircleFlux offers the most balanced natural mineral taste in the market. Absolute purity in every pack.",
    author: "Sarah Alao",
    role: "Fitness & Wellness Coach",
  },
  {
    id: 4,
    quote: "Fantastic customer support and seamless wholesale orders. They handled our emergency order of 200 cases for our convention within 24 hours without delay.",
    author: "Tunde Bakare",
    role: "Logistics Coordinator",
  },
];

const EXTENDED_TESTIMONIALS = [
  ...TESTIMONIALS.slice(-CLONE_COUNT),
  ...TESTIMONIALS,
  ...TESTIMONIALS.slice(0, CLONE_COUNT),
];

const subscribeToMobileViewport = (callback: () => void) => {
  const query = window.matchMedia("(max-width: 639px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

const getMobileViewportSnapshot = () => window.matchMedia("(max-width: 639px)").matches;
const subscribeToReducedMotion = (callback: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const getReducedMotionSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const normalizeVirtualIndex = (index: number) => {
  if (index >= TESTIMONIALS.length + CLONE_COUNT) return index - TESTIMONIALS.length;
  if (index < CLONE_COUNT) return index + TESTIMONIALS.length;
  return index;
};

export default function Testimonials() {
  const isMobile = useSyncExternalStore(subscribeToMobileViewport, getMobileViewportSnapshot, () => false);
  const prefersReducedMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotionSnapshot, () => false);
  const dimensions = isMobile ? { cardWidth: 280, gap: 16 } : { cardWidth: 520, gap: 24 };

  const [virtualIndex, setVirtualIndex] = useState(CLONE_COUNT + 1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const transitionLockRef = useRef(false);

  const getRealIndex = (index: number) =>
    (index - CLONE_COUNT + TESTIMONIALS.length) % TESTIMONIALS.length;
  const activeIndex = getRealIndex(virtualIndex);

  const moveBy = useCallback((amount: number) => {
    if (transitionLockRef.current) return;

    if (prefersReducedMotion) {
      setVirtualIndex((current) => normalizeVirtualIndex(current + amount));
      return;
    }

    transitionLockRef.current = true;
    setTransitionEnabled(true);
    setVirtualIndex((current) => current + amount);
  }, [prefersReducedMotion]);

  const moveTo = (nextIndex: number) => {
    if (transitionLockRef.current || nextIndex === virtualIndex) return;

    if (prefersReducedMotion) {
      setVirtualIndex(normalizeVirtualIndex(nextIndex));
      return;
    }

    transitionLockRef.current = true;
    setTransitionEnabled(true);
    setVirtualIndex(nextIndex);
  };

  const handleDotClick = (realIndex: number) => {
    const baseIndex = realIndex + CLONE_COUNT;
    const nearestIndex = [baseIndex - TESTIMONIALS.length, baseIndex, baseIndex + TESTIMONIALS.length]
      .filter((index) => index >= 0 && index < EXTENDED_TESTIMONIALS.length)
      .reduce((nearest, index) =>
        Math.abs(index - virtualIndex) < Math.abs(nearest - virtualIndex) ? index : nearest
      );
    moveTo(nearestIndex);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;

    const normalizedIndex = normalizeVirtualIndex(virtualIndex);
    if (normalizedIndex === virtualIndex) {
      transitionLockRef.current = false;
      return;
    }

    setTransitionEnabled(false);
    setVirtualIndex(normalizedIndex);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        transitionLockRef.current = false;
      });
    });
  };

  useEffect(() => {
    if (isUserPaused || isInteractionPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => moveBy(1), 3000);
    return () => window.clearInterval(timer);
  }, [isInteractionPaused, isUserPaused, moveBy, prefersReducedMotion]);

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsInteractionPaused(false);
    }
  };

  return (
    <section
      data-testid="testimonials"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setIsInteractionPaused(true)}
      onMouseLeave={() => setIsInteractionPaused(false)}
      onFocusCapture={() => setIsInteractionPaused(true)}
      onBlurCapture={handleBlur}
      className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white text-[#1d2428] relative overflow-hidden z-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-11">
          <span className="text-[10px] font-black uppercase tracking-[0.04em] font-overpass block mb-7">
            Customer Reviews
          </span>
          <h2 className="font-overpass text-2xl md:text-[34px] font-black max-w-xl mx-auto leading-tight text-[#1d2428]">
            Hear what people are saying about us
          </h2>
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Testimonial {activeIndex + 1} of {TESTIMONIALS.length}: {TESTIMONIALS[activeIndex].author}
        </p>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          <button
            type="button"
            onClick={() => moveBy(1)}
            aria-label="Move testimonials left"
            className="absolute left-5 sm:left-8 z-30 w-12 h-12 rounded-full bg-white/90 text-[#1d2428] shadow-sm flex items-center justify-center hover:bg-white active:scale-95 transition-transform duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => moveBy(-1)}
            aria-label="Move testimonials right"
            className="absolute right-5 sm:right-8 z-30 w-12 h-12 rounded-full bg-white/90 text-[#1d2428] shadow-sm flex items-center justify-center hover:bg-white active:scale-95 transition-transform duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="w-full overflow-hidden py-5 px-2 select-none">
            <div
              data-testid="testimonial-track"
              onTransitionEnd={handleTransitionEnd}
              className="relative flex"
              style={{
                left: "50%",
                transform: `translate3d(-${virtualIndex * (dimensions.cardWidth + dimensions.gap) + dimensions.cardWidth / 2}px, 0, 0)`,
                transition: transitionEnabled && !prefersReducedMotion
                  ? `transform ${SLIDE_MS}ms ${SLIDE_EASE}`
                  : "none",
                width: `${EXTENDED_TESTIMONIALS.length * dimensions.cardWidth + (EXTENDED_TESTIMONIALS.length - 1) * dimensions.gap}px`,
                gap: `${dimensions.gap}px`,
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              {EXTENDED_TESTIMONIALS.map((testimonial, index) => {
                const isActive = getRealIndex(index) === activeIndex;
                const cardStyle: CSSProperties = {
                  width: `${dimensions.cardWidth}px`,
                  backgroundColor: isActive ? "#14aee5" : "#f2b705",
                  boxShadow: isActive
                    ? "0 22px 42px rgba(20, 174, 229, 0.18)"
                    : "0 10px 24px rgba(242, 183, 5, 0.12)",
                  transform: isActive ? "scale(1)" : "scale(0.94)",
                  transition: prefersReducedMotion
                    ? "none"
                    : `background-color ${SLIDE_MS}ms ${SLIDE_EASE}, box-shadow ${SLIDE_MS}ms ${SLIDE_EASE}, transform ${SLIDE_MS}ms ${SLIDE_EASE}`,
                };

                return (
                  <article
                    data-testid="testimonial-card"
                    data-active={isActive ? "true" : "false"}
                    aria-hidden={index !== virtualIndex}
                    key={`${testimonial.id}-${index}`}
                    onClick={() => !isActive && moveTo(index)}
                    style={cardStyle}
                    className={`shrink-0 overflow-hidden rounded-lg min-h-[220px] p-7 sm:p-9 flex flex-col justify-center text-center text-[#1d2428] border border-white/30 ${
                      isActive ? "z-10" : "cursor-pointer"
                    }`}
                  >
                    <div>
                      <div className="flex gap-1 justify-center mb-5" aria-hidden="true">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            style={{
                              color: isActive ? "#f2b705" : "#14aee5",
                              fill: isActive ? "#f2b705" : "#14aee5",
                              transition: prefersReducedMotion ? "none" : `color ${SLIDE_MS}ms ${SLIDE_EASE}, fill ${SLIDE_MS}ms ${SLIDE_EASE}`,
                            }}
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-overpass text-sm sm:text-base md:text-lg leading-relaxed font-black text-[#1d2428]">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-overpass font-black text-[10px] text-[#1d2428]">{testimonial.author}</h3>
                      <p className="font-source-sans text-[10px] font-semibold text-[#1d2428]/65">{testimonial.role}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2.5 mt-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.id}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-brand-red" : "bg-[#dfe4ea]"}`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
          <button
            type="button"
            onClick={() => setIsUserPaused((paused) => !paused)}
            className="ml-3 w-8 h-8 rounded-full border border-[#1d2428]/20 flex items-center justify-center text-[#1d2428] hover:bg-brand-pink transition-colors"
            aria-label={isUserPaused ? "Resume testimonial autoplay" : "Pause testimonial autoplay"}
          >
            {isUserPaused ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

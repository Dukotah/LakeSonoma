"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper: fades + gently rises its children into view once when
 * they enter the viewport. Refined and subtle by design.
 *
 * Respects prefers-reduced-motion (the .reveal utility in globals.css renders
 * fully visible with no transition for those users), and also reveals
 * immediately when IntersectionObserver is unavailable (SSR / old browsers).
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  /** Stagger in milliseconds (e.g. index * 80). */
  delay?: number;
  /** Element/tag to render (default "div"). */
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${revealed ? " is-revealed" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

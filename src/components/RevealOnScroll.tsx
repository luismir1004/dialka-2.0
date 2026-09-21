"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  direction?: "up" | "none";
  threshold?: number;
}

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // triggers slightly before scrolling past
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={domRef}
      style={style}
      className={`reveal-element ${
        direction === "up" ? "reveal-up" : ""
      } ${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`}
    >
      {children}
    </div>
  );
}

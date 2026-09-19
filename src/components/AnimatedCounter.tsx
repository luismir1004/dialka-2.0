"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number; // in milliseconds
}

export function AnimatedCounter({
  value,
  duration = 1500,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Parse value pattern: e.g. "+20", "5.000+", "307", "100%"
    const match = value.match(/^([^\d]*)(\d[\d.,]*)([^\d]*)$/);
    if (!match) return;

    const prefix = match[1] || "";
    const rawNumStr = match[2];
    const suffix = match[3] || "";
    const hasDot = rawNumStr.includes(".");
    const targetNum = parseInt(rawNumStr.replace(/[.,]/g, ""), 10);

    if (isNaN(targetNum)) return;

    // Use IntersectionObserver to trigger animation when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function: easeOutExpo for a premium deceleration feel
            const easeProgress =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentNum = Math.floor(easeProgress * targetNum);

            let formatted = currentNum.toString();
            if (hasDot && currentNum >= 1000) {
              const thousands = Math.floor(currentNum / 1000);
              const remainder = currentNum % 1000;
              formatted = `${thousands}.${remainder.toString().padStart(3, "0")}`;
            }

            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{displayValue}</span>;
}

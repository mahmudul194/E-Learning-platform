"use client";

import React, { useState, useEffect } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 1600,
  trigger,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic easing
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [trigger, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

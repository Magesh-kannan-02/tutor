import { motion, useReducedMotion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const RevealOnScroll = ({
  children,
  delay = 0,
  y = 24,
  once = true,
  threshold = 0.2,
  springConfig = {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  },
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  threshold?: number;
  springConfig?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y,
        scale: 0.98,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      transition={{
        delay,
        ...springConfig,
      }}
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)", 
      }}
    >
      {children}
    </motion.div>
  );
};

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export const AnimatedScreen = ({
  children,
  motionKey,
  direction = "forward",
  className = "",
}: {
  children: React.ReactNode;
  motionKey: string;
  direction?: "forward" | "back";
  className?: string;
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const fromX = direction === "forward" ? 40 : -40;
  const exitX = direction === "forward" ? -30 : 30;

  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0, x: fromX }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: exitX }}
      transition={{
        x: {
          type: "spring",
          stiffness: 160,
          damping: 22,
          mass: 0.6,
        },
        opacity: {
          type: "tween",
          duration: 0.18,
          ease: "easeOut",
        },
      }}
      style={{ willChange: "transform, opacity" }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
};

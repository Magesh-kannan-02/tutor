import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface CircularProgressProps {
  id?: string; // unique id
  value: number; // 0–100
  size?: number; // diameter
  strokeWidth?: number; // thickness
  trackColor?: string; // background ring
  gradientFrom?: string; // start color
  gradientTo?: string; // end color
  label?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export const CircularProgress = ({
  id = "",
  value,
  size = 160,
  strokeWidth = 15,
  trackColor = "#1f3b28",
  gradientFrom = "#63FF7F",
  gradientTo = "#035C24",
  label = "Score",
  valueClassName = "",
  labelClassName = "",
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 100) * circumference;

  // animation state
  const [offset, setOffset] = useState(circumference);
  const [displayValue, setDisplayValue] = useState(0);

  // animate on mount / value change
  useEffect(() => {
    // stroke animation
    requestAnimationFrame(() => {
      setOffset(progressOffset);
    });

    // number animation
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const animateNumber = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setDisplayValue(Math.round(progress * value));
      if (progress < 1) requestAnimationFrame(animateNumber);
    };

    requestAnimationFrame(animateNumber);
  }, [progressOffset, value]);

  return (
    <div
      id={id}
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <svg width={size} height={size}>
        {/* Gradient */}
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
      </svg>

      {/* Center Text */}
      <div
        className="flex flex-col items-center justify-center gap-1"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p
          className={cn(
            "leading-none font-sans font-bold text-content1-foreground",
            valueClassName
          )}
          style={{ fontSize: size * 0.23 }}
        >
          {displayValue}
        </p>
        <p
          className={cn(
            "leading-none font-sans font-medium text-secondary-150",
            labelClassName
          )}
          style={{ fontSize: size * 0.13, marginTop: 4 }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

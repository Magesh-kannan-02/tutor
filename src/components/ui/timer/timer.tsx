import { cn } from "@/lib/utils";
import React from "react";

interface CircularTimerProps {
  id?: string; // unique id
  duration: number;
  size?: number;
  strokeWidth?: number;
  ringGap?: number;   // gap between rings
  progressColor?: string; //
  outerBgColor?: string;
  middleBgColor?: string;
  innerBgColor?: string;
  onComplete?: () => void;
  textClassName?: string; // for text class name
  
  
}

export const CircularTimer = ({
  id='',
  duration,
  size = 120,
  strokeWidth = 6,
  ringGap = 0, 
  progressColor = "#73CD03",
  outerBgColor = "#262626",
  middleBgColor = "#262626",
  innerBgColor = "#3A3A39",
  textClassName,
  onComplete,
  ...rest
  
 
   
}: CircularTimerProps) => {
  const baseRadius = (size - strokeWidth) / 2;

  
  const outerRadius = baseRadius;
  const middleRadius = baseRadius - strokeWidth - ringGap;
  const innerRadius = baseRadius - strokeWidth * 2 - ringGap * 2;

  const circumference = 2 * Math.PI * outerRadius;

  const [timeLeft, setTimeLeft] = React.useState(duration);

  React.useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const progress = (timeLeft / duration) * circumference;

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div id={id}  style={{ width: size, height: size, position: "relative" }} {...rest}>
      <svg width={size} height={size}>

        {/* OUTER RING */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={outerRadius}
          stroke={outerBgColor}
          strokeWidth={strokeWidth}
          fill={outerBgColor}
        />

        {/* MIDDLE RING */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={middleRadius}
          stroke={middleBgColor}
          strokeWidth={strokeWidth-1}
         fill={innerBgColor}
        />

        {/* INNER CIRCLE */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={innerRadius}
          fill={innerBgColor}
        />

        {/* PROGRESS RING OVER OUTER RING */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={outerRadius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* TEXT */}
      <div

        className={cn("text-[1.75rem] font-semibold text-content1-foreground font-sans",textClassName)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
           
          
        }}
      >
        {minutes}:{seconds}
      </div>
    </div>
  );
};

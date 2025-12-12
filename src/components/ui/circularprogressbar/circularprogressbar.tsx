import { cn } from "@/lib/utils";

interface CircularProgressProps {
  id?: string; // unique id
  value: number; // 0–100 (progress)
  size?: number; // diameter
  strokeWidth?: number; // thickness
  trackColor?: string; // background ring
  gradientFrom?: string; // start color
  gradientTo?: string; // end color
  label?: string; // e.g. "Score"
  valueClassName?: string; // custom classname for value
  labelClassName?: string; // custom classname for label
}

export const CircularProgress = ({
  id='',
  value,
  size = 160,
  strokeWidth = 15,
  trackColor = "#1f3b28",
  gradientFrom = "#63FF7F",
  gradientTo = "#035C24",
  label = "Score",
  valueClassName = "",
  labelClassName = "",
  ...rest
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div id={id} {...rest} style={{ width: size, height: size, position: "relative" }}>
      <svg width={size} height={size}>
        {/* Gradient Definition */}
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

        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform={`rotate(90 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* Center Text */}
      <div
        className="flex flex-col justify-center items-center gap-1"
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
          {value}
        </p>
        <p
          className={cn(
            "leading-none font-sans font-medium text-secondary-150",
            labelClassName
          )}
          style={{
            fontSize: size * 0.13,

            marginTop: 4,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

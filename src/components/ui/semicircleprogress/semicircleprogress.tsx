import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface SemiCircleProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  content?: React.ReactNode;
  className?: string;
  gradientStartColor?: string;
  gradientEndColor?: string;
  trackColor?: string;
  capHeight?: number;
  capRadius?: number;
  contentWrapperClassName?: string;
}

interface CustomCapProps {
  angle: number
  fill: string
  size: number
  strokeWidth: number
  capHeight: number
  capRadius: number
  centerY: number
  radius: number
  cx: number
}

const CustomCap = ({
  angle,
  fill,
  strokeWidth,
  capHeight,
  capRadius,
  centerY,
  radius,
  cx,
}: CustomCapProps) => {
  const angleInRadians = (angle * Math.PI) / 180
  const x = cx + radius * Math.cos(angleInRadians)
  const y = centerY + radius * Math.sin(angleInRadians)
  
  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      <rect
        width={strokeWidth}
        height={capHeight}
        x={-strokeWidth / 2}
        y={-capHeight / 2}
        rx={capRadius}
        ry={capRadius}
        fill={fill}
      />
    </g>
  )
}

export const SemiCircleProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  SemiCircleProgressProps
>(
  (
    {
      value = 0,
      size = 320,
      strokeWidth = 40,
      className,
      content,
      gradientStartColor = "#804900",
      gradientEndColor = "#FFB907",
      trackColor = "#6b6b6b",
      capHeight = 20,
      capRadius = 10,
      contentWrapperClassName,
      ...props
    },
    ref
  ) => {
    const id = React.useId()
    const gradientId = `gradient-${id}`
    const maskId = `mask-${id}`

    const progress = Math.min(100, Math.max(0, value))
    const radius = (size - strokeWidth) / 2
    const cx = size / 2
    const centerY = radius + strokeWidth / 2

    const circumference = Math.PI * radius
    const offset = circumference - (progress / 100) * circumference

    // End angle based on progress (180 to 360)
    const endAngle = 180 + (progress / 100) * 180

    const capProps = {
      size,
      strokeWidth,
      capHeight,
      capRadius,
      centerY,
      radius,
      cx,
    }

    return (
      <ProgressPrimitive.Root
        ref={ref}
        value={progress}
        className={cn("relative w-fit bg-background-foreground/15", className)}
        {...props}
      >
        {/* SVG Arc */}
        <svg
          width={size}
          height={centerY + strokeWidth / 2}
          viewBox={`0 0 ${size} ${centerY + strokeWidth / 2}`}
          className="block"
        >
          <defs>
            <linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1={0}
              y1={0}
              x2={size}
              y2={0}
            >
              <stop offset="0%" stopColor={gradientStartColor} />
              <stop offset="100%" stopColor={gradientEndColor} />
            </linearGradient>

            <mask id={maskId}>
              {/* Progress Start Cap - always visible if progress > 0 */}
              <CustomCap angle={180} fill="white" {...capProps} />

              <path
                d={`
                  M ${strokeWidth / 2} ${centerY}
                  A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${centerY}
                `}
                fill="none"
                stroke="white"
                strokeWidth={strokeWidth}
                strokeLinecap="butt"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-[stroke-dashoffset] duration-500 ease-out"
              />

              {/* Progress End Cap - Rotates with progress */}
              <g
                style={{
                  transformOrigin: `${cx}px ${centerY}px`,
                  transform: `rotate(${endAngle}deg)`,
                  transition: "transform 500ms ease-out",
                }}
              >
                <g transform={`translate(${cx + radius}, ${centerY})`}>
                  <rect
                    width={strokeWidth}
                    height={capHeight}
                    x={-strokeWidth / 2}
                    y={-capHeight / 2}
                    rx={capRadius}
                    ry={capRadius}
                    fill="white"
                  />
                </g>
              </g>
            </mask>
          </defs>

          {/* Track */}
          {/* Track Start Cap */}
          <CustomCap angle={180} fill={trackColor} {...capProps} />
          {/* Track End Cap (at 360/0 degrees) */}
          <CustomCap angle={360} fill={trackColor} {...capProps} />

          <path
            d={`
              M ${strokeWidth / 2} ${centerY}
              A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${centerY}
            `}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
          />

          {/* Progress */}
          {progress > 0 && (
            <rect
              x={0}
              y={0}
              width={size}
              height={centerY + strokeWidth / 2}
              fill={`url(#${gradientId})`}
              mask={`url(#${maskId})`}
              className="pointer-events-none"
            />
          )}

        </svg>

        {/* Center Content */}
        <div
          className={cn("absolute inset-x-0 flex flex-col items-center justify-center pointer-events-none", contentWrapperClassName)}
          style={{ bottom: 0, height: centerY }} // Position based on the bottom, filling the arc height
        >
          {content}
        </div>
      </ProgressPrimitive.Root>
    )
  }
)

SemiCircleProgress.displayName = "SemiCircleProgress"

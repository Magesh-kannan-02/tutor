import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
import { ProgressBarLine } from "@/assets"

interface ProgressProps {
  id?: string
  className?: string
  value: number
  indicatorClassName?: string
  indicatorMainClassName?:string
  ProgressBarLineClassname?:string
}

export const BroadProgressBar = (
  { id, className, value = 0, indicatorClassName,indicatorMainClassName,ProgressBarLineClassname, ...rest }: ProgressProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <ProgressPrimitive.Root
      ref={ref}
      id={id}
      className={cn(
        "relative h-[54px] w-full rounded-[16px] overflow-visible",
        className
      )}
      {...rest}
    >
      {/* CLIPPED AREA */}
      <div className={cn("absolute inset-0 overflow-hidden rounded-[16px] bg-content1-foreground/15",indicatorMainClassName)}>
        <ProgressPrimitive.Indicator
          className={cn(
            "absolute inset-y-0 left-0 w-full",
            "rounded-l-[14px]",
            "bg-gradient-to-b from-primary to-primary-foreground",
            "transition-transform duration-500 ease-in-out",
            indicatorClassName
          )}
          style={{
            transform: `translateX(-${100 - clampedValue}%)`,
          }}
        />
      </div>

      {/* PROGRESS END LINE  */}
      {
        value !== 0 && (
          <ProgressBarLine
            className={cn("absolute -top-1 z-10 transition-all duration-500 ease-in-out",ProgressBarLineClassname)}
            style={{
              left: `${clampedValue}%`,
              transform: "translateX(-50%)",
            }}
          />
        )
      }
    </ProgressPrimitive.Root>
  )
}


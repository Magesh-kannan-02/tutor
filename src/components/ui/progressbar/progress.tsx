
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"
interface ProgressProps
   {
    id?: string; // unique id
  className?: string; // custom base class name
  value: number; // progress value
  indicatorClassName?: string; // indicator class name
}

export const ProgressBar = (({ id, className, value=0, indicatorClassName, ...rest }: ProgressProps, ref?: React.Ref<HTMLDivElement>) => (
  <ProgressPrimitive.Root
    ref={ref}
    id={id}
    className={cn(
      "relative h-[0.375rem] w-[100%] overflow-hidden rounded-full bg-content1-50/20",
      className
    )}
    {...rest}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-primary-50  rounded-full transition-transform duration-500 ease-in-out",
        indicatorClassName
      )}
      style={{ transform: `translateX(-${100 - (Number(value) || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))




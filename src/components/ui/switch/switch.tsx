import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchOption<T extends string> {
  label: string;
  value: T;
}                             

interface SwitchProps<T extends string> {
  options: SwitchOption<T>[];

  value?: T ;      
  defaultValue?: T;      
  onValueChange?: (value: T) => void;

  className?: string;
  optionClassName?: string;
  activeOptionClassName?: string;
}


export const Switch = <T extends string>({
  options,
  value,
  defaultValue = options[0]?.value,
  onValueChange,
  className,
  optionClassName,
  activeOptionClassName,
  ...rest
}: SwitchProps<T>) => {
  const [internalValue, setInternalValue] = React.useState<T>(
    defaultValue as T
  )

  const activeValue = value ?? internalValue
  const activeIndex = options.findIndex(
    (opt) => opt.value === activeValue
  )

  const handleToggle = (newValue: T) => {
    if (newValue === activeValue) return

    onValueChange?.(newValue)
    if (value === undefined) {
      setInternalValue(newValue)
    }
  }

  return (
    <div
      className={cn(
        "relative flex h-[46px] rounded-full bg-content1-foreground/15 ",
        "cursor-pointer select-none",
        className
      )}
      {...rest}
      style={{ width: `${options.length * 92}px` }}
    >
      {/* Sliding Indicator */}
      <div
        className={cn(
          "absolute h-[46px] top-0 rounded-full bg-content1-foreground",
          "transition-transform duration-300 ease-in-out"
        )}
        style={{
          width: `${100 / options.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {/* Options */}
      {options.map((opt) => {
        const isActive = opt.value === activeValue

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleToggle(opt.value)}
            className={cn(
              "relative flex-1 text-center font-medium",
              "transition-transform duration-150 ease-out active:scale-95",
              isActive ? "text-content1" : "text-content1-foreground",
              optionClassName,
              isActive && activeOptionClassName
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

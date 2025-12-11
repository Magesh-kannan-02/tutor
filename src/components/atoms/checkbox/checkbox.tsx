import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
interface CheckboxProps {
  className?: string; // custom class name for the checkbox
  indicatorClassName?: string; // custom class name for the indicator
  onClick?: () => void; // click handler
  disabled?: boolean; // disabled state
  checked?: boolean; // checked state
  id?: string; // unique id
  iconClassName?: string; // icon class name
}

export const Checkbox = ({
  id = "",
  disabled = false,
  checked,
  className,
  indicatorClassName,
  iconClassName,
  onClick,
  ...rest
}: CheckboxProps) => (
  <CheckboxPrimitive.Root
    id={id}
    disabled={disabled}
    checked={checked}
    onClick={onClick}
    className={cn(
      "grid place-content-center   rounded-full  h-[1.5rem] w-[1.5rem] shrink-0 border-secondary-50  border  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  disabled:opacity-50 data-[state=checked]:bg-content1-foreground data-[state=checked]:text-inherit data-[state=checked]:border-content1-foreground bg-secondary ",
      className
    )}
    {...rest}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "grid place-content-center text-current" ,
        indicatorClassName
      )}
    >
      <Check className={cn("h-5 w-5 text-current", iconClassName)} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);



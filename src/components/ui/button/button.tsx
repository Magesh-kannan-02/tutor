import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-2  rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground  ",

        outline:
          "border border-input bg-background  hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-content1-foreground  !text-center !flex !justify-center !items-center w-full !rounded-full   !py-[1.25rem] ",
        flat: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startContent?: React.ReactNode; // content at the start (left)
  endContent?: React.ReactNode; // content at the end (right)
  baseClassName?: string; // button base class name
  textClassName?: string; // button text class name
  iconClassName?: string; // button icon class name
  startContentClassName?: string; // start content class name
  endContentClassName?: string; // end content class name
  buttonText?: string; // button text
  id?: string; // unique id
  disabled?: boolean; // disabled state
  isLoading?: boolean; // loading state
  handleOnClick?: () => void; // button click handler
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id = "",
      variant = "default",
      size = "default",
      startContent,
      endContent,
      children,
      baseClassName,
      textClassName,
      iconClassName,
      startContentClassName,
      endContentClassName,
      buttonText = "button",
      disabled = false,
      isLoading = false,
      handleOnClick,
      ...rest
    },
    ref
  ) => {
    const ButtonComponent = "button";

    return (
      <ButtonComponent
        id={id}
        className={cn(
          "cursor-pointer select-none  transition-all duration-200 ease-out   active:scale-[0.98] active: active:duration-100",
          buttonVariants({ variant, size }),
          baseClassName
        )}
        ref={ref}
        onClick={!isLoading ? handleOnClick : undefined}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading && (
          <span className="animate-spin rounded-full border-2 border-t-transparent w-4 h-4"></span>
        )}
        {startContent && !isLoading && (
          <span className={cn("px-2", startContentClassName)}>
            {startContent}
          </span>
        )}

        <span className={cn(textClassName)}>{buttonText}</span>
        {endContent && !isLoading && (
          <span className={cn("px-2", endContentClassName)}>{endContent}</span>
        )}
      </ButtonComponent>
    );
  }
);



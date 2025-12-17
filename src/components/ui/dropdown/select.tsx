import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "@/assets";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    startContentClassName?: string;
    endContentClassName?: string;
    iconClassName?: string;
    allowArrow?: boolean;
  }
>(({ className, children, startContent, endContent,allowArrow=true, startContentClassName, endContentClassName, iconClassName, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full group items-center focus-visible:outline-none focus-visible:ring-0  justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {/* LEFT CONTENT */}
    {startContent && (
      <span className={cn("flex items-center", startContentClassName)}>
        {startContent}
      </span>
    )}

    {/* SELECTED VALUE / PLACEHOLDER */}
    <div className="flex-1 text-left">
      {children}
    </div>

    {/* ARROW ICON */}
    <span
      className={cn(
        "transition-transform duration-200 group-data-[state=open]:rotate-180",
        iconClassName
      )}
    >
      {
        allowArrow && (

      <SelectPrimitive.Icon asChild>
        <ArrowDownIcon />
      </SelectPrimitive.Icon>
        )
      }
    </span>

    {/* RIGHT CONTENT */}
    {endContent && (
      <span className={cn("ml-2 flex items-center", endContentClassName)}>
        {endContent}
      </span>
    )}
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50  max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
        position === "popper" && "",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1 max-h-[200px] overflow-y-auto ",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

interface OptionType {
  label: string;
  value: string;
}

interface DropdownProps {
  id?: string; //unique id
  className?: string; // base classname
  label?: string; // group  name 
  placeholder?: string; // place holder
  options: OptionType[]; // options
  value?: string; // selected value
  onChange?: (value: string) => void; // handle change func
  position?: "bottom" | "top" | "right" | "left"; // postion of the drawer
  disabled?: boolean; // disabled state
  required?: boolean; // required state
  triggerClassName?: string; //
  contentClassName?: string; // content class name
  itemClassName?: string; // each item class name
  indicatorClassName?: string; // indicator class name 
  viewportClassName?: string; // view port class name (for scrolling width  and height)
  iconClassName?: string; // custom class name for icon
  startContent?: React.ReactNode; // start content
  endContent?: React.ReactNode; // end content
  startContentClassName?: string; // start content class name
  endContentClassName?: string; // end content class name
  allowArrow?: boolean; // allow arrow at the end
  placeholderClassName?: string; // placeholder class name
}

export const Dropdown = ({
  id = "",
  className = "", 
  label = "",
  placeholder = "Select...",
  options = [],
  value,
  position = "bottom",
  onChange,
  disabled = false,
  required = false,
  triggerClassName = "",
  contentClassName = "",
  itemClassName = "",
  indicatorClassName = "",
  viewportClassName = "",
  iconClassName = "",
  startContent,
  endContent,
  startContentClassName = "",
  endContentClassName = "",
  allowArrow = true,
  placeholderClassName = "",
}: DropdownProps) => {
  return (
    <div id={id} className={cn("w-full", className)}>
      <Select
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        required={required}
      >
        <SelectTrigger
         startContent={startContent}
          endContent={endContent}
          startContentClassName={startContentClassName}
          endContentClassName={endContentClassName}
          iconClassName={iconClassName}
          allowArrow={allowArrow}
          
          className={cn(
            "h-[3.75rem] pl-[1rem] pr-[1.6rem] !text-body5 text-content1-foreground rounded-[1rem] bg-background-100/60 backdrop-blur-3xl border-[0.031rem] border-background-50 group",
            triggerClassName
          )}
        >
          <SelectValue placeholder={<span className={cn("text-muted-foreground", placeholderClassName)}>
          {placeholder}
        </span>} />
        </SelectTrigger>

        <SelectContent
          side={position}
          className={cn(
            "bg-background-100/60 text-body py-[0.75rem] text-content1-foreground backdrop-blur-3xl rounded-[1rem] border-[0.031rem] border-background-50",
            contentClassName
          )}
        >
          <SelectGroup>
            {label && (
              <SelectPrimitive.Label className="px-2 py-1.5 text-sm font-semibold">
                {label}
              </SelectPrimitive.Label>
            )}

            <SelectPrimitive.Viewport
              className={cn(
                "p-1 max-h-[200px] overflow-y-auto",
                viewportClassName
              )}
            >
              {options?.map((opt) => (
                <SelectPrimitive.Item
                  key={opt?.value}
                  value={opt?.value}
                  className={cn(
                    "relative cursor-pointer flex w-full hover:backdrop-blur-[6.25rem] hover:bg-content1-foreground/10 items-center rounded-lg py-1.5 pl-2 pr-8 text-sm outline-none",
                    itemClassName
                  )}
                >
                  <span
                    className={cn(
                      "absolute right-4 flex items-center justify-center",
                      indicatorClassName
                    )}
                  >
                    <SelectPrimitive.ItemIndicator>
                      <Check className={cn("h-5 w-5", iconClassName)} />
                    </SelectPrimitive.ItemIndicator>
                  </span>

                  <SelectPrimitive.ItemText>
                    {opt?.label}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

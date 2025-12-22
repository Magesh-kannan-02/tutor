import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

/* ----------------- ITEM ----------------- */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

/* ----------------- TRIGGER ----------------- */
interface TriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  openIconClassName?: string;
  closeIconClassName?: string;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  TriggerProps
>(
  (
    {
      className,
      children,
      openIcon,
      closeIcon,
      openIconClassName,
      closeIconClassName,
      ...props
    },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left",
          className
        )}
        {...props}
      >
        {children}

        <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
          <span className="absolute inset-0 hidden group-data-[state=open]:block">
            {closeIcon}
          </span>

          <span className="absolute inset-0 block group-data-[state=open]:hidden">
            {openIcon}
          </span>
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/* ----------------- CONTENT ----------------- */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

/* ----------------- MAIN COMPONENT ----------------- */
interface AccordionItemType {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

type AccordionComponentProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
> & {
  id?: string; // unique id
  items: AccordionItemType[]; // content

  /* custom styles */
  className?: string;
  itemClassname?: string;
  triggerClassName?: string;
  contentClassName?: string;

  /* icons */
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  openIconClassName?: string;
  closeIconClassName?: string;

  noBorder?: boolean;
};

export const AccordionComponent = ({
  items,
  className,
  itemClassname = "",
  triggerClassName,
  contentClassName,
  id = "",
  openIcon,
  closeIcon,
  openIconClassName,
  closeIconClassName,

  noBorder = false,
  ...rest
}: AccordionComponentProps) => {
  return (
    <Accordion id={id} className={cn("w-[100%] text-white", className)} {...rest}>
      {items?.map((item) => (
        <AccordionItem
          key={item?.value}
          value={item?.value}
          className={cn(itemClassname, noBorder && "border-none")}
        >
          <AccordionTrigger
            className={triggerClassName}
            openIcon={openIcon}
            closeIcon={closeIcon}
            openIconClassName={openIconClassName}
            closeIconClassName={closeIconClassName}
          >
            {item?.trigger}
          </AccordionTrigger>

          <AccordionContent className={contentClassName}>
            {item?.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

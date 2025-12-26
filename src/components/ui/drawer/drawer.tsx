import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/assets";

// --- Types ---
type DrawerDirection = "bottom" | "top" | "left" | "right";

interface DrawerProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;

  // Content Slots
  headerContent?: React.ReactNode;
  content?: React.ReactNode;
  footerContent?: React.ReactNode;

  // Configuration
  position?: DrawerDirection;
  slidingDirection?: DrawerDirection;
  shouldScaleBackground?: boolean;
  className?: string;
  innerClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  positionClassNames?: Partial<Record<DrawerDirection, string>>;
  overlayClassName?: string;
  closeOnOutsideClick?: boolean;
  hideCloseIcon?: boolean;
  headerContentClassname?: string;
  closeIconClassName?: string;
}

// --- Default Styles ---
const defaultDrawerPositionStyles: Record<DrawerDirection, string> = {
  bottom: "inset-x-0 bottom-0 max-h-[90vh] w-full mx-auto focus:outline-none",
  top: "inset-x-0 top-0 max-h-[90vh] w-full sm:w-[500px] mx-auto focus:outline-none",
  left: "inset-y-0 left-0 w-[320px] focus:outline-none",
  right: "inset-y-0 right-0 w-[320px] focus:outline-none",
};

// --- Sub-Components ---

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
    position?: DrawerDirection;
    innerClassName?: string;
    overlayClassName?: string;
    positionClassNames?: Partial<Record<DrawerDirection, string>>;
    closeOnOutsideClick?: boolean;
  }
>(
  (
    {
      className,
      children,
      position = "bottom",
      innerClassName,
      overlayClassName,
      positionClassNames,
      closeOnOutsideClick = true,
      ...props
    },
    ref
  ) => {
    const currentPositionStyle =
      positionClassNames?.[position] || defaultDrawerPositionStyles[position];

    return (
      <DrawerPortal>
        <DrawerOverlay className={overlayClassName} />
        <DrawerPrimitive.Content
          ref={ref}
          onPointerDownOutside={(e) => {
            if (!closeOnOutsideClick) {
              e.preventDefault();
            }
          }}
          className={cn(
            "fixed z-50 flex flex-col",
            currentPositionStyle,
            className
          )}
          {...props}
        >
          {(position === "bottom" || position === "top") && (
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-muted/50" />
          )}
          <div
            className={cn(
              "flex-1 border bg-background flex flex-col h-full overflow-hidden",
              position === "bottom" && "rounded-[10px] m-4 mt-2",
              position === "top" && "rounded-b-[10px]",
              position === "right" && "rounded-l-[10px]",
              position === "left" && "rounded-r-[10px]",
              innerClassName
            )}
          >
            {children}
          </div>
        </DrawerPrimitive.Content>
      </DrawerPortal>
    );
  }
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center justify-between px-4 py-3", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1 overflow-y-auto touch-none", className)} {...props} />
);
DrawerBody.displayName = "DrawerBody";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 pb-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

// --- Main Component ---
export const DrawerComponent = ({
  open,
  onOpenChange,
  headerContent,
  content,
  position = "bottom",
  slidingDirection,
  footerContent,
  className,
  innerClassName,
  overlayClassName,
  headerClassName,
  footerClassName,
  positionClassNames,
  shouldScaleBackground = true,
  closeOnOutsideClick = true,
  hideCloseIcon = false,
  headerContentClassname,
  closeIconClassName,
  ...rest
}: DrawerProps) => {
  return (
    <Drawer
      open={open}
      direction={slidingDirection || position}
      onOpenChange={onOpenChange}
      shouldScaleBackground={shouldScaleBackground}
      dismissible={false}
      {...rest}
    >
      <DrawerContent
        overlayClassName={overlayClassName}
        className={cn("text-center p-[1rem]", className)}
        position={position}
        innerClassName={innerClassName}
        positionClassNames={positionClassNames}
        closeOnOutsideClick={closeOnOutsideClick}
      >
        <DrawerHeader className={cn("flex items-center justify-between", headerClassName)}>
          <div className={cn("w-full", headerContentClassname)}>
            {headerContent}
          </div>

          {!hideCloseIcon && (
            <span className="mt-5" onClick={() => onOpenChange?.(false)}>
              <CloseIcon
                className={cn("cursor-pointer", closeIconClassName)}
                
              />
            </span>
          )}
        </DrawerHeader>

        <DrawerBody>{content}</DrawerBody>

        {footerContent && (
          <DrawerFooter className={footerClassName}>
            {footerContent}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

``
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/assets";

// --- Types ---
type DrawerDirection = "bottom" | "top" | "left" | "right";

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  // Content Slots
  headerContent?: React.ReactNode;
  content?: React.ReactNode;
  footerContent?: React.ReactNode;

  // Configuration
  position?: DrawerDirection;
  slidingDirection?: DrawerDirection;
  shouldScaleBackground?: boolean;
  className?: string; // control Width, Height, and Centering (mx-auto).
  innerClassName?: string; //Background color, Borders, Radius, and Margins.
  headerClassName?: string;// for header
  footerClassName?: string; // for footer
  positionClassNames?: Partial<Record<DrawerDirection, string>>; // postion class names
  overlayClassName?: string; // for overlay
  closeOnOutsideClick?: boolean; // for outside click
  hideCloseIcon?: boolean; // for hide close icon
  headerContentCalssname?: string;
}

// --- Default Styles ---
const defaultDrawerPositionStyles: Record<DrawerDirection, string> = {
  bottom:
    "inset-x-0 bottom-0 max-h-[90vh] w-full  mx-auto focus:outline-none",
  top:
    "inset-x-0 top-0 max-h-[90vh] w-full sm:w-[500px] mx-auto focus:outline-none",
  left: "inset-y-0 left-0 w-[320px] focus:outline-none",
  right: "inset-y-0 right-0 w-[320px] focus:outline-none",
};
;

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
>(({ 
  className, 
  children, 
  position = "bottom", 
  innerClassName, 
  overlayClassName, 
  positionClassNames, 
  closeOnOutsideClick = true, 
  ...props 
}, ref) => {
  const currentPositionStyle = positionClassNames?.[position] || defaultDrawerPositionStyles[position];

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
          "fixed z-50 flex flex-col ",
          currentPositionStyle,
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex-1 border bg-background", 
            position === "bottom" && "rounded-[10px] m-4",
            position === "top" && "rounded-b-[10px]",
            position === "right" && "h-full rounded-l-[10px]",
            position === "left" && "h-full rounded-r-[10px]",
            innerClassName 
          )}
        >
          {(position === "bottom" || position === "top") && (
            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted/50" />
          )}
          {children}
        </div>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5  text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

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
  closeOnOutsideClick=true,
  hideCloseIcon=false,
  headerContentCalssname,
  ...rest
}: DrawerProps) => {
  return (
    <Drawer
     
      open={open}
      direction={slidingDirection || position}
      onOpenChange={onOpenChange}
    
      {...rest}
      
    >
      <DrawerContent
      overlayClassName={overlayClassName}
        className={cn("text-center p-[1rem]",className)}
        position={position}
        innerClassName={innerClassName}
        positionClassNames={positionClassNames}
        closeOnOutsideClick={closeOnOutsideClick}
      >
        
         <DrawerHeader
  className={cn(
    "flex items-center justify-between ",
    headerClassName
  )}
>
  <div className={cn(headerContentCalssname)}>{headerContent}</div>

  {!hideCloseIcon && (
    <span className="pr-4">

      <CloseIcon
        className="cursor-pointer "
        onClick={() => onOpenChange(false)}
      />
    </span>
  )}
</DrawerHeader>
        

        {content}

        {footerContent && (
          <DrawerFooter className={footerClassName}>
            {footerContent}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

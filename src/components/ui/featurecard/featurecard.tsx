import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { Checkbox } from "@/components/atoms/checkbox/checkbox";
import { iconMapping } from "@/utils";
import { cva } from "class-variance-authority";

interface FeaturecardProps {
  id?: string; // unique id
  className?: string; // base class name for card
  icontype?: string; // icon type
  textContent?: string; //  text content
  handleClick?: () => void; // card click handler
  textclassName?: string; // text class name
  iconClassName?: string; // icon class name
  isactive?: boolean; // active state
  allowendendContent?: boolean; // to  allow end content
  activeClassName?: string; // active class name
  changeIconColor?: boolean; // change icon color when active
  allowStartIcon?: boolean; // allow start icon
  checkboxClassName?: string; // checkbox class name
  checkboxIndicatorClassName?: string; // checkbox indicator class name
  innerclassName?: string; // inner div class name
  activevariant?: "solid" | "default"; // active variants when it is active
  startContent?: React.ReactNode; // start content
  endContent?: React.ReactNode; // end content
  startContentClassName?: string; // start content class name
  endContentClassName?: string; // end content class name
  allowAnimation?: boolean; // to allow clickable animation
}
const activeVariants = cva("", {
  variants: {
    variant: {
      default: "backdrop-blur-[6.25rem] bg-content1-foreground/30",
      solid: "border-none bg-gradient-to-b from-primary to-primary-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Featurecard = ({
  id = "",
  className,
  icontype,
  textContent = "",
  textclassName,
  iconClassName,
  isactive = false,
  allowendendContent = true,
  activeClassName = "",
  handleClick,
  changeIconColor = true,
  allowStartIcon = true,
  checkboxClassName = "",
  checkboxIndicatorClassName = "",
  innerclassName = "",
  activevariant = "default",
  startContent,
  endContent,
  startContentClassName = "",
  endContentClassName = "",
  allowAnimation = true,
  ...rest
}: FeaturecardProps) => {
  const iconData = iconMapping?.[icontype || ""];

  return (
    <Card
      id={id}
      allowAnimation={allowAnimation}
      className={cn(
        "flex py-[1.625rem]  cursor-pointer  rounded-[1rem]  border-[0.5px]  px-[1.5rem] items-center justify-between gap-x-[7rem]",
        {
          [activeClassName]: isactive,
        },
        isactive && activeVariants({ variant: activevariant }),
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      <div className={cn("flex items-center gap-[1rem]", innerclassName)}>
        {startContent && (
          <span className={cn(startContentClassName)}>{startContent} </span>
        )}
        {allowStartIcon && (
          <div className={cn(iconClassName)}>
            {iconData?.type === "svg" && (
              <iconData.icon
                fill={changeIconColor && isactive ? "#FFFFFF" : undefined}
              />
            )}
            {iconData?.type === "image" && (
              <img src={iconData.icon} alt="icon" />
            )}
          </div>
        )}

        <span
          className={cn(
            "!text-[1.25rem] !text-content1-foreground text-body",
            textclassName
          )}
        >
          {textContent}
        </span>
      </div>
      {allowendendContent &&
        (endContent ? (
          <span className={cn(endContentClassName)}>{endContent} </span>
        ) : (
          <Checkbox
            className={cn(checkboxClassName)}
            checked={isactive}
            iconClassName={cn({
              "text-primary": isactive,
              [checkboxIndicatorClassName]: isactive,
            })}
            onClick={handleClick}
          />
        ))}
    </Card>
  );
};

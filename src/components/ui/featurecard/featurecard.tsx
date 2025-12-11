import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { Checkbox } from "@/components/atoms/checkbox/checkbox";
import { iconMapping } from "@/utils";

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
}

export const Featurecard = ({
  id = "",
  className,
  icontype,
  textContent = "",
  textclassName,
  iconClassName,
  isactive = false,
  allowendendContent = true,
  activeClassName = " border-none bg-gradient-to-b from-primary to-primary-foreground",
  handleClick,
  changeIconColor = true,
  allowStartIcon = true,
  checkboxClassName = "",
  checkboxIndicatorClassName = "",
  innerclassName='',
}: FeaturecardProps) => {
  const iconData = iconMapping?.[icontype || ""];

  return (
    <Card
      id={id}
      className={cn(
        "flex py-[1.625rem]  cursor-pointer  rounded-[1rem]  border-[0.5px]  px-[1.5rem] items-center justify-between gap-x-[7rem]",
        {
          [activeClassName]: isactive,
        },
        className
      )}
      onClick={handleClick}
    >
      <div className={cn("flex items-center gap-[1rem]", innerclassName)}>
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
      {allowendendContent && (
        <Checkbox
          className={cn(checkboxClassName)}
          checked={isactive}
          iconClassName={cn({
            "text-primary": isactive,
            [checkboxIndicatorClassName]: isactive,
          })}
          onClick={handleClick}
        />
      )}
    </Card>
  );
};

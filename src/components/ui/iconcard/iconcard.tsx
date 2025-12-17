import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { iconMapping } from "@/utils";
import { cva } from "class-variance-authority";

interface IconcardProps {
  id?: string; // unique id
  icontype?: string; // icon type
  className?: string; // custom class name
  iconName?: string; // icon class name
  textClassName?: string; // text class name
  handleCardClick?: () => void; // card click handler
  isactive?: boolean; // active state
  activeClassName?: string; // active class name
  activevariant?: "default"; // active variants when it is active
  imgIconClassName?: string; // classname for img icon
  svgIconClassName?: string; // classname for svg icon
  allowAnimation?:boolean // to allow clickable animation

}
const activeVariants = cva("", {
  variants: {
    variant: {
      default: "backdrop-blur-[6.25rem] bg-content1-foreground/30",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Iconcard = ({
  id = "",
  icontype,
  className,
  iconName = "",
  textClassName = "",
  handleCardClick,
  isactive = false,
  activeClassName = "",
  activevariant = "default",
  imgIconClassName = "",
  svgIconClassName = "",
  allowAnimation=true,
  ...rest
}: IconcardProps) => {
  const Icon = iconMapping[icontype || ""] || null;
  return (
    <Card
      id={id}
      allowAnimation={allowAnimation}
      onClick={handleCardClick}
      className={cn(
        "flex items-center gap-[1rem] cursor-pointer justify-center flex-col py-[2rem]",
        {
          [activeClassName]: isactive,
        },
        isactive && activeVariants({ variant: activevariant }),
        className
      )}
      {...rest}
    >
      {Icon?.type === "svg" && (
        <span>
          <Icon.icon className={cn(svgIconClassName)} />
        </span>
      )}
      {Icon?.type === "image" && (
        <img src={Icon.icon as string} alt={iconName} className={cn(imgIconClassName)} />
      )}

      <p
        className={cn(
          " !text-[1.25rem] !text-content1-foreground text-body",
          textClassName
        )}
      >
        {iconName}
      </p>
    </Card>
  );
};

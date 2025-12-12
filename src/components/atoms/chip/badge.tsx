import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex items-center  border-[0.031rem]  border-background-50 bg-background-100/80 backdrop-blur-3xl   rounded-full  text-xs  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          " gap-2 items-center cursor-pointer justify-center flex py-[0.656rem] px-[1rem]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",

        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps {
  className?: string; // custom base class name
  variant?: VariantProps<typeof badgeVariants>["variant"]; // badge variant
  startContent?: React.ReactNode; // start content
  endContent?: React.ReactNode; // end content
  text: string; // badge text
  startContentClassName?: string; // start content class name
  endContentClassName?: string; // end content class name
  textClassName?: string; // text class name
  isactive?: boolean; // active state
  activeClassName?: string; // active class name
  handleClick?: () => void; // click handler
}

export const Chip = ({ className, variant,
  startContent,
  endContent,
  text='',
  startContentClassName='',
  endContentClassName='',
  textClassName='',
  isactive=false,
  activeClassName='border-none bg-gradient-to-b from-primary to-primary-foreground',
  handleClick,
  ...rest
  

  }: BadgeProps) => {
  return (
    <div onClick={handleClick} className={cn("",badgeVariants({ variant }),{
      [activeClassName]: isactive,
    }, className)}  {...rest} >
      {startContent && <div className={cn("mr-1", startContentClassName)}>{startContent}</div>}
      {text && <span className={cn("!text-body text-content1-foreground",textClassName)}>{text}</span>}
      {endContent && <div className={cn("ml-1", endContentClassName)}>{endContent}</div>}

    </div>
  );
};

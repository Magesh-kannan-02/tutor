import { cn } from "@/lib/utils";

interface CardProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  allowAnimation?: boolean; // to showw the click effects
}

export const Card = ({
  id = "",
  className,
  children,
  onClick,
  allowAnimation = true,
  ...rest
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      id={id}
      className={cn(
        "w-[100%] select-none  flex gap-2 h-fit p-2   rounded-[1rem] bg-background-100/60 backdrop-blur-3xl  border-[0.031rem]  border-background-50   transition-all ",
        className,
        {
          "duration-200 ease-out  active:scale-[0.98] active: active:duration-100":
            allowAnimation,
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

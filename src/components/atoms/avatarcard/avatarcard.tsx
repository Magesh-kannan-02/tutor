import React from "react";
import { cn } from "@/lib/utils";
import { iconMapping } from "@/utils";

interface AvatarcardProps {
  icontype?: string;          // key from iconMapping
  iconName?: string;          // for <img alt="">
  
  className?: string;         // wrapper styles
  iconClassname?: string;     // svg container styles
  imageClassname?: string;    // image styles
  
  onClick?: () => void;
}

export const Avatarcard = ({
  icontype,
  iconName = "",
  className,
  iconClassname,
  imageClassname,
  onClick
}: AvatarcardProps) => {
  
  const Icon = icontype ? iconMapping[icontype] : null;

  return (
    <div
      onClick={onClick}
      className={cn('bg-success-200 rounded-full',
        className
      )}
    >
      {Icon && (
        <>
          {Icon.type === "svg" ? (
            <div className={cn("w-10 h-10 grid place-items-center", iconClassname)}>
              <Icon.icon />
            </div>
          ) : Icon.type === "image" ? (
            <img
              src={Icon.icon as string}
              alt={iconName}
              className={cn("w-10 h-10 object-contain", imageClassname)}
            />
          ) : null}
        </>
      )}
    </div>
  );
};


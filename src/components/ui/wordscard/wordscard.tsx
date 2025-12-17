import React from "react";
import { cn } from "@/lib/utils";
import { iconMapping } from "@/utils";

interface WordscardProps {
  title?: string;
  wpm?: number | string;
  caption?: string;
  description?: React.ReactNode;
  className?: string;

  captionClassname?: string;
  titleClassname?: string;
  bodyClassname?: string;
  iconClassname?: string;
  imageClassname?: string;

  icontype?: string;     
  iconName?: string;     
  children?: React.ReactNode;
}

export const Wordscard = ({
  title = "Words per minute",
  caption = "",
  description,
  className,
  captionClassname,
  titleClassname,
  bodyClassname,
  iconClassname,
  icontype,
  imageClassname,
  iconName = "",
  children
}: WordscardProps) => {

  const Icon = icontype ? iconMapping[icontype] : null;

  return (
    <div
      className={cn(
        "w-full rounded-xl p-4 pb-1",
        "bg-transparent border border-content2 backdrop-blur-2xl",
        className
      )}
    >
      <div className="flex items-center justify-between ">
        {/* LEFT: caption (small) + title (big) */}
        <div className="flex-1">
          <div className={cn("mb-2 text-secondary-150 font-bold ", titleClassname)}>
            {title}
          </div>
          <div className={cn("text-2xl font-bold text-content1-foreground", captionClassname)}>
            {caption}
          </div>
        </div>

        {/* RIGHT: icon / image in its own block */}
        <div className="flex-shrink-0 ml-2">
          {Icon && (
            <>
              {Icon.type === "svg" ? (
                <div className={cn("w-12 h-12 grid place-items-center",iconClassname)}>
                  <Icon.icon />
                </div>
              ) : Icon.type === "image" ? (
                <img src={Icon.icon as string} alt={iconName} className={cn("w-12 h-12",imageClassname)}/>
              ) : null}
            </>
          )}
        </div>
      </div>

      {/* Description / children */}
      <div className={cn("my-3 text-sm text-secondary-150 leading-snug", bodyClassname)}>
        {children ?? description}
      </div>
    </div>
  );
};

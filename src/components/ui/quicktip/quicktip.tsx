import { cn } from "@/lib/utils";
import { iconMapping } from "@/utils";
import React from "react";

interface QuickTipProps {
  icontype: string
  iconName?: string

  title?: string
  description?: React.ReactNode

  iconPosition?: "start" | "end"   

  className?: string
  iconClassname?: string
  imageClassname?: string
}

export const QuickTip = ({
  icontype,
  iconName = "",
  title = "Quick Tip",
  description,
  iconPosition = "start",         
  className,
  iconClassname,
  imageClassname,
  ...rest
}: QuickTipProps) => {
  const Icon = iconMapping[icontype]

  const renderIcon = () => {
    if (!Icon) return null

    if (Icon.type === "svg") {
      return (
        <div
          className={cn(
            "w-12 h-12 grid place-items-center shrink-0",
            iconClassname
          )}
        >
          <Icon.icon />
        </div>
      )
    }

    if (Icon.type === "image") {
      return (
        <img
          src={Icon.icon as string}
          alt={iconName}
          className={cn(
            "w-12 h-12 object-contain shrink-0",
            imageClassname
          )}
        />
      )
    }

    return null
  }

  return (
    <div
      className={cn(
        "flex gap-5 items-center py-5 px-6 rounded-2xl bg-content1-foreground/15",
        className
      )}
      {...rest}
    >
      {/* START ICON */}
      {iconPosition === "start" && renderIcon()}

      {/* TEXT */}
      <div className="flex flex-col gap-3 justify-between flex-1">
        <p className="text-body5 font-bold !text-content1-foreground">
          {title}
        </p>
        <p className="text-h6 !text-content1-foreground leading-5">
          {description}
        </p>
      </div>

      {/* END ICON */}
      {iconPosition === "end" && renderIcon()}
    </div>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"
import { iconMapping } from "@/utils"

export interface FocusItem {
  icontype: string
  iconName?: string

  title: string
  subtitle: string

  iconClassname?: string
  imageClassname?: string
  titleClassname?: string
  subTitleClassname?: string
}

interface FocusAreaProps {
  title?: string
  items: FocusItem[]
  className?: string
  MainTitleClassname?: string
}

const Item = ({
  icontype,
  iconName = "",
  title,
  subtitle,
  iconClassname,
  imageClassname,
  titleClassname,
  subTitleClassname,
  ...rest
}: FocusItem) => {
  const Icon = iconMapping[icontype]

  return (
    <div className="flex flex-col gap-3" {...rest}>
      <div className="flex items-center gap-5">
        <div className={cn("flex items-center justify-center", iconClassname)}>
          {Icon && (
            <>
              {Icon.type === "svg" ? (
                <div
                  className={cn(
                    " grid place-items-center shrink-0",
                    iconClassname
                  )}
                >
                  <Icon.icon />
                </div>
              ) : Icon.type === "image" ? (
                <img
                  src={Icon.icon as string}
                  alt={iconName}
                  className={cn(
                    " object-contain shrink-0",
                    imageClassname
                  )}
                />
              ) : null}
            </>
          )}
        </div>

        <p
          className={cn(
            "text-body5 font-semibold !text-content1-foreground",
            titleClassname
          )}
        >
          {title}
        </p>
      </div>

      <p className={cn("text-h6 !text-secondary-150", subTitleClassname)}>
        {subtitle}
      </p>
    </div>
  )
}

const Divider = () => (
  <div className="h-[1px] w-full bg-background-50" />
)

export const FocusArea = ({
  title = "Focus Areas",
  items,
  className,
  MainTitleClassname,
}: FocusAreaProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[360px] rounded-2xl px-4 py-5 bg-content1-foreground/15 border border-background-50",
        className
      )}
    >
      <p
        className={cn(
          "text-h6 !text-content1-foreground mb-5",
          MainTitleClassname
        )}
      >
        {title}
      </p>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <React.Fragment key={item.title}>
            <Item {...item} />
            {index !== items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

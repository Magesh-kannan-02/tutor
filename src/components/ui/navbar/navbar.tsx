import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { iconMapping } from "@/utils"


interface NavItemConfig {
  key: string
  label: string
  icontype: string
  iconName?: string
}

interface NavbarProps {
  items: NavItemConfig[]
  defaultActive?: string
  onChange?: (key: string) => void
  className?: string
  iconClassname?: string
  imageClassname?: string
}

export const Navbar = ({
  items,
  defaultActive = items[0]?.key,
  onChange,
  className,
  iconClassname,
  imageClassname,
}: NavbarProps) => {
  const [active, setActive] = useState<string>(defaultActive)

  const handleClick = (key: string) => {
    setActive(key)
    onChange?.(key)
  }

  return (
    <div
      className={cn(
        "flex h-[88px] w-full rounded-2xl",
        "bg-transparent border-t-[2px] border-secondary-150/15",
        className
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.key}>
          <NavItem
            label={item.label}
            active={active === item.key}
            icontype={item.icontype}
            iconName={item.iconName}
            iconClassname={iconClassname}
            imageClassname={imageClassname}
            onClick={() => handleClick(item.key)}
          />

          {index !== items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  )
}

interface NavItemProps {
  label: string
  icontype: string
  iconName?: string
  active?: boolean
  onClick?: () => void
  iconClassname?: string
  imageClassname?: string
}

const NavItem = ({
  label,
  icontype,
  iconName = "",
  active,
  onClick,
  iconClassname,
  imageClassname,
}: NavItemProps) => {
  const Icon = iconMapping[icontype]

  const renderIcon = () => {
    if (!Icon) return null

    if (Icon.type === "svg") {
      return (
        <div
          className={cn(
            "mb-1",
            iconClassname
          )}
        >
          <Icon.icon
            fill={active ? "#B8FF5F" : "#C0C0C0"}
          />
        </div>
      )
    }

    if (Icon.type === "image") {
      return (
        <img
          src={Icon.icon as string}
          alt={iconName}
          className={cn(
            "mb-1 w-6 h-6 object-contain",
            imageClassname
          )}
        />
      )
    }

    return null
  }

  return (
    <button
      onClick={onClick}
      className="flex flex-1 flex-col items-center justify-center gap-1
      transition-transform duration-200 active:scale-95"
    >
      {renderIcon()}

      <span
        className={cn(
          "text-sm",
          active
            ? "text-content1-foreground font-medium"
            : "text-secondary-150 font-normal"
        )}
      >
        {label}
      </span>
    </button>
  )
}

const Divider = () => (
  <div className="h-full w-[0.5px] bg-[#56565659]" />
)

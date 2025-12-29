import * as React from "react";
import { cn } from "@/lib/utils";
import { iconMapping } from "@/utils";

export interface StreakDay {
  id: string;
  active?: boolean;
  iconType?: string;
}

interface StreakProgressCalendarProps {
  title?: string;
  subtitle?: string;

  daysLabel?: string[];         
  grid?: StreakDay[][];          

  iconType?: string ;            
  iconName?: string;

  className?: string;
  headerClassName?: string;
  gridClassName?: string;
  cellClassName?: string;
  activeCellClassName?: string;
  footerClassName?: string;
  daysClassName?: string;
  streak?:string;
}
export const StreakProgressCalendar = ({
  title = "🔥 Your Streak Progress",
  subtitle = "Current streak",
  daysLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  grid,
  iconType = "fireIcon",
  iconName = "streak",

  className,
  headerClassName,
  gridClassName,
  cellClassName,
  activeCellClassName,
  footerClassName,
  streak,
  daysClassName,
  ...rest
}: StreakProgressCalendarProps) => {
  const Icon = iconMapping[iconType]

  const renderIcon = () => {
    if (!Icon) return null

    if (Icon.type === "svg") {
      return <Icon.icon />
    }

    if (Icon.type === "image") {
      return (
        <img
          src={Icon.icon as string}
          alt={iconName}
          className="w-6 h-6 object-contain"
        />
      )
    }

    return null
  }

  return (
    <div
      className={cn(
        "rounded-2xl bg-content1-foreground/15 px-5 py-5 text-content1-foreground w-full justify-between",
        className
      )}
      {...rest}
    >
      {/* Header */}
      <div className={cn("text-center mb-5", headerClassName)}>
        <p>{title}</p>
      </div>

      {/* Days */}
      <div className={cn("grid grid-cols-7 gap-5 text-h6 font-normal !text-secondary-150  mb-3 place-items-center", daysClassName)}>
        {daysLabel.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      {/* Grid */}
      <div className={cn("grid gap-3", gridClassName)}>
        {grid?.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-5 place-items-center">
            {row.map((cell) => (
              <div
                key={cell.id}
                className={cn(
                  "w-8 h-8 rounded-full border border-secondary-150 bg-content1-foreground/30",
                  "grid place-items-center",
                  cellClassName,
                  cell.active && "bg-primary-200 border-none",
                  cell.active && activeCellClassName
                )}
              >
                {cell.active &&
                  (cell.iconType ? (
                    iconMapping[cell.iconType]?.type === "svg" ? (
                      React.createElement(
                        iconMapping[cell.iconType].icon as React.FC
                      )
                    ) : (
                      <img
                        src={iconMapping[cell.iconType].icon as string}
                        alt=""
                        className="w-4 h-4"
                      />
                    )
                  ) : (
                    renderIcon()
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={cn("text-center mt-7", footerClassName)}>
        <p className="text-secondary-150 font-bold pb-1">{subtitle}</p>
        <p className="text-body5 font-bold">{streak} day in a row!</p>
      </div>
    </div>
  )
}

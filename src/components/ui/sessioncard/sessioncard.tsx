import { cn } from "@/lib/utils"
import { iconMapping } from "@/utils"

interface SessionCardProps {
  title?: string
  subtitle?: string
  feedback?: string

  icontype?: string
  iconName?: string

  handleleftclick?: () => void
  handlerightclick?: () => void

  className?: string
  iconClassname?: string
  imageClassname?: string

  titleClassname?: string
  subtitleClassname?: string
  feedbackClassname?: string
  leftButtonClassname?: string
  rightButtonClassname?: string
  leftButtonValue?: string
  rightButtonValue?: string
}

export const SessionCard = ({
  title = "Last session",
  subtitle,
  feedback,
  icontype = "microphone",
  iconName = "session-icon",
  handleleftclick,
  handlerightclick,
  className,
  iconClassname,
  imageClassname,
  titleClassname,
  subtitleClassname,
  feedbackClassname,
  leftButtonClassname,
  rightButtonClassname,
  leftButtonValue,
  rightButtonValue,
  ...rest
}: SessionCardProps) => {
  const Icon = icontype ? iconMapping[icontype] : null

  const renderIcon = () => {
    if (!Icon) return null

    if (Icon.type === "svg") {
      return (
        <div className={cn("w-10 h-10 grid place-items-center", iconClassname)}>
          <Icon.icon />
        </div>
      )
    }

    if (Icon.type === "image") {
      return (
        <img
          src={Icon.icon as string}
          alt={iconName}
          className={cn("w-10 h-10 object-contain", imageClassname)}
        />
      )
    }

    return null
  }

  return (
    <div
      className={cn(
        "rounded-2xl bg-content1-foreground/15 w-full py-5 px-4 flex flex-col gap-3",
        className
      )}
      {...rest}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <p className={cn("!text-content1-foreground text-body5 font-bold", titleClassname)}>{title}</p>
          <p className={cn("!text-secondary-150 text-h6", subtitleClassname)}>{subtitle}</p>
        </div>
        {renderIcon()}
      </div>

      {/* Divider */}
      <div className="h-[0.5px] w-full bg-content2" />

      {/* Feedback */}
      {feedback && (
        <p className={cn("!text-content1-foreground text-h6", feedbackClassname)}>
          AI feedback: {feedback}
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleleftclick}
          className={cn("flex-1 bg-primary-200 py-4 px-3 rounded-xl  text-h6 transition-transform duration-150 ease-out active:scale-95", leftButtonClassname)}
        >
          {leftButtonValue}
        </button>
        <button
          onClick={handlerightclick}
          className={cn("flex-1 bg-content1-foreground py-4 px-3 rounded-xl text-h6 transition-transform duration-150 ease-out active:scale-95", rightButtonClassname)}
        >
          {rightButtonValue}
        </button>
      </div>
    </div>
  )
}
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/assets";

interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string; 
  header?: string;
  content?: React.ReactNode;
  autoCloseSeconds?: number;
  contentClassname?: string;
  headerClassname?: string;
}

export const Drawer = ({
  open,
  onClose,
  children,
  className,
  header,
  content,
  autoCloseSeconds = 5,
  contentClassname,
  headerClassname
}: DrawerProps) => {

  // Disable scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Countdown
  const [secondsLeft, setSecondsLeft] = useState(autoCloseSeconds);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setSecondsLeft(autoCloseSeconds), 0);
    return () => clearTimeout(t);
  }, [open, autoCloseSeconds]);

  useEffect(() => {
    if (!open) return;

    if (secondsLeft <= 0) {
      onClose?.();
      return;
    }

    const timer = setTimeout(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [open, secondsLeft, onClose]);

  const formatTimer = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <>
      {/* Drawer panel */}
      <div
        className={cn(
          "fixed left-6 right-6 bottom-6 z-50",
          "bg-transparent backdrop-blur-xl rounded-xl border-[2px] border-content2",
          "p-4 pt-3 transition-transform duration-300 ease-out",
          className,
          open
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {/* Header (centered) */}
        <div className="relative mb-3 w-full flex items-center justify-center">
          <span className={cn("text-center w-full text-xl text-content1-foreground", headerClassname)}>{header}</span>

          <button
            aria-label="Close"
            onClick={() => onClose?.()}
            className="absolute right-1 top-2.2"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className={cn("bg-transparent max-h-52 overflow-auto", contentClassname)}>
          {content ?? children}
        </div>

        {/* Countdown */}
        <div className="mt-4 text-center text-sm opacity-90 text-content1-foreground">
          <span>Close In: {formatTimer(secondsLeft)}</span>
        </div>
      </div>
    </>
  );
};

export default Drawer;

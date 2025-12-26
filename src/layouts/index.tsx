import { cn } from "@/lib/utils";
import React from "react";

export interface RootLayoutProps {
  children: React.ReactNode;

  /** Outer background container */
  wrapperClassName?: string;

  /** Mobile container (425px) */
  containerClassName?: string;
}

export const RootLayout = ({
  children,
  wrapperClassName = "",
  containerClassName = "",
}: RootLayoutProps) => {
  return (
    <div className={cn("h-[100dvh]  flex justify-center ", wrapperClassName)}>
      <div
        className={cn(
          "w-[425px] max-w-[425px]  flex items-center flex-col ",
          containerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

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
    <div className={cn("min-h-screen  flex justify-center", wrapperClassName)}>
      <div
        className={cn(
          "w-full max-w-[425px] flex items-center flex-col min-h-screen",
          containerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

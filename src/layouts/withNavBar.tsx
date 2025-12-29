import { Navbar } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  wrapperClassName?: string;
  containerClassName?: string;
}
export const LayoutWithNavBar = ({
  children,
  wrapperClassName = "",
  containerClassName = "",
}: LayoutProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { path: "/", key: "home", label: "Home", icontype: "home" },
    { path: "/practice", key: "practice", label: "Practice", icontype: "microphone" },
    { path: "/profile", key: "profile", label: "Profile", icontype: "profile" },
  ];

  return (
    <div
      className={cn(
        "h-[100dvh] w-full  overflow-hidden flex justify-center",
        wrapperClassName
      )}
    >
      {/* Main container */}
      <div
        className={cn(
          "w-full max-w-[425px] flex flex-col items-center relative",
          containerClassName
        )}
      >
        {children}

        {/* Navbar */}
        <Navbar
          activePath={navItems.find(item => item.path === pathname)?.key}
          items={navItems}
          className="
            absolute bottom-0 left-0
            w-full max-w-[425px]
            mx-auto right-0
            !bg-transparent 
          "
          onChange={(path) => navigate(path)}
        />
      </div>
    </div>
  );
};



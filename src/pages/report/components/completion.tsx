import Lottie from "lottie-react";

import CompletionAnimation from "@/assets/lottie/completion.json";

import { iconMapping } from "@/utils";
interface BadgeProps {
  id?: string;
  name: string;
  badgeType: string;
  description: string;
}
export const Badge = ({ id, name, badgeType, description }: BadgeProps) => {
  const Icon = iconMapping[badgeType || ""];
  return (
    <div id={id} className="fixed inset-0 overflow-hidden">
      {/* Content (below Lottie) */}
      <div className="relative z-10 h-full gap-[1.375rem] my-auto flex flex-col items-center justify-center ">
        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-[170%] h-[200%] blur-3xl opacity-50 rounded-full"
            style={{
              background: `radial-gradient(circle, #b28505 20%, transparent 80%)`,
            }}
          />
          <img
            src={Icon?.icon as string}
            alt=""
            className=" drop-shadow-xl relative z-10"
            width={220}
          />
        </div>
        <p className="text-body3 font-semibold mt-5 text-content1-foreground text-center px-6 leading-tight">
          {name}
        </p>
        <p className="!text-body5 text-secondary-150 text-center px-8 !leading-snug">
          {description}
        </p>
      </div>

      {/* Lottie Overlay (on top) */}
      <Lottie
        animationData={CompletionAnimation}
        loop={false}
        style={{ width: "100%", height: "100%",transform: "scale(1.15)" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        className="absolute inset-0 z-20 pointer-events-none"
      />
    </div>
  );
};

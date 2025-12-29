import TickImg from "@/assets/images/greenTick.png";
import CompletionAnimation from "@/assets/lottie/Completion.json";
import { useFlowStore } from "@/store/flow";
import { Button, BroadProgressBar, RevealOnScroll } from "@/components";
import DiamondImg from "@/assets/images/diamond.png";
import Lottie from "lottie-react";
interface OnboardingCompleteProps {
  time?: string;
  xp?: number;
  progressTime?: string;
  progress?: number;
}

export const OnboardingComplete = ({
  time = "1 minute",
  xp = 120,
  progressTime = "1 / 30 min",
  progress = 40,
}: OnboardingCompleteProps) => {
  const { next } = useFlowStore();

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Content (below Lottie) */}
      <div className="relative z-10 h-full mt-auto flex flex-col items-center justify-between gap-5 px-4">
        <div className="flex flex-col h-full items-center justify-between pb-8">
          <div className="place-items-center h-full mt-16">
            <img src={TickImg} alt="tick" width={160} height={160} />
            <RevealOnScroll y={32}>
              <p className="text-body4 text-center text-content1-foreground leading-snug pt-[1.25rem]">
                👏 Nice! <br /> You just practiced for{" "}
                <span className="text-primary-200">{time}.</span>
              </p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.1} y={28}>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full justify-center gap-[0.75rem]  items-start">
                <p className="text-h6 text-content2-200">{progressTime}</p>
                <BroadProgressBar
                  className="w-full rounded-[0.75rem]"
                  value={progress}
                />
              </div>

              <div className="flex items-center justify-center gap-2 py-[1rem]">
                <img src={DiamondImg} alt="diamond" width={24} height={24} />
                <p className="text-content1-foreground text-body font-sans">
                  + {xp} XP
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <Button
          buttonText="Continue"
          variant="secondary"
          textClassName="text-body5 !text-content1 font-medium"
          baseClassName="!py-7 w-full mb-4 transition-transform duration-75 ease-out active:scale-[0.97]"
          onClick={next}
        />
      </div>

      {/* Lottie Overlay (on top) */}
      <Lottie
        animationData={CompletionAnimation}
        loop={false}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        className="absolute inset-0 z-20 pointer-events-none"
      />
    </div>
  );
};

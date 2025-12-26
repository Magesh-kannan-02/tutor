import StreakImg from "@/assets/images/streak.png";
import { Button, Featurecard, RevealOnScroll } from "@/components";
import { useFlowStore } from "@/store/flow";

export const Streak = () => {
  const { next } = useFlowStore();

  return (
    <div className="p-[1rem] flex flex-col justify-between h-full">
      {/* Center section */}
      <div className="flex flex-col my-auto w-full items-center">
        <img
          src={StreakImg}
          alt="streak"
          width={192}
          height={192}
        />

        <div className="flex flex-col items-center gap-[0.875rem]">
          <RevealOnScroll>
          <p className="text-body3 font-sans text-content1-foreground text-center pb-2">
            1-day streak
          </p>
          <p className="text-body3 font-sans text-content1-foreground text-center">
            Keep the spark alive! ✨
          </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-[1.5rem]">
        <Featurecard
          className="bg-content1-foreground/15 backdrop-blur pl-0  py-[1rem] !border-background-50"
          allowendendContent={false}
          textclassName="text-body leading-[130%] font-medium !text-content1-foreground font-sans"
          textContent="Each day you practice, your confidence grows."
        />
        <Button
          buttonText="Let’s Go!"
          variant="secondary"
          onClick={next}
          
          textClassName="text-h5 !text-content1 font-medium font-sans"
        />
      </div>
    </div>
  );
};

import { RevealOnScroll, SemiCircleProgress } from "@/components";
import { iconMapping } from "@/utils";

export const Accent = () => {
  const Icon = iconMapping["lamp"];
  return (
    <div className="flex flex-col gap-[2.3rem] ">
      <RevealOnScroll>
        <div className="flex flex-col items-center gap-[0.5rem]">
          <img src={Icon?.icon as string} alt="lamp" />
          <p className="text-center px-4  text-body leading-normal text-secondary-150">
            Your accent carries the warmth and melody of Indian speech —
            precise, expressive, and evolving toward a more global tone.
          </p>
        </div>
      </RevealOnScroll>

      <div className="flex flex-col !items-start gap-[1rem] mb-[1rem]">
        <RevealOnScroll delay={0.1} y={16}>
          <p className="font-bold text-body4 text-content1-foreground">
            Refine Your Sound
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2} y={28}>
          <div className="flex flex-col gap-[1rem] p-[1rem] bg-transparent border-[0.5px] border-content1-100 rounded-[0.625rem] items-center">
            <p className=" text-body leading-normal text-secondary-150">
              Your voice sounds natural to most listeners. Keep practicing
              rhythm and word stress to reach full fluency!
            </p>
            <SemiCircleProgress
              gradientStartColor="#274600"
              gradientEndColor="#90FF07"
              strokeWidth={32}
              size={230}
              value={90}
              content={
                <div className="flex flex-col items-center justify-end h-full gap-2 ">
                  <p className="text-body5 font-semibold text-primary-200">
                    90%
                  </p>
                  <p className="text-body font-sans text-secondary-150">High</p>
                </div>
              }
            />
            <p className=" text-body leading-normal text-secondary-150">
              Focus on softening /t/ and /d/ sounds in words like ‘water’ or
              ‘ladder’ — it helps them sound smoother in international English.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

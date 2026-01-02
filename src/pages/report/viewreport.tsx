import { Featurecard, RadarChart, RevealOnScroll } from "@/components";

export const ViewReport = () => {
  return (
    <div className=" w-full gap-[1.5rem]  flex flex-col px-[1rem] overflow-y-auto">
      <RevealOnScroll delay={0}>
        <div className="flex flex-col  items-center pt-7  gap-[1.2rem]">
          <p className="text-body5 font-regular text-content1-foreground pb-1">
            Here’s Your English Level 🎯
          </p>
          <p className="font-bold text-body4 text-content1-foreground">
            Upper-Intermediate <span className="text-primary-200">B1</span>
          </p>
          <p className="text-body5 text-secondary-150 font-semibold">
            Progress Score: <span className="text-primary-200">30 Points</span>
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15} y={32}>
        <div
          className="flex justify-center  w-full flex-wrap  p-[1rem]  items-center
       rounded-[0.625rem] border-[0.5px] border-content1-100 bg-transparent h-[350px]"
        >
          <RadarChart className="!p-0 m-0" />
        </div>
      </RevealOnScroll>
      <div className="mt-auto mb-[1rem]">
        <RevealOnScroll delay={0.3} y={20}>
          <Featurecard
            className="bg-content1-foreground/15 backdrop-blur pl-0  py-[1rem] !border-background-50"
            allowendendContent={false}
            textclassName="text-body leading-[130%] font-medium !text-content1-foreground font-sans"
            textContent="Your score is based on 01 mins of real conversation. Keep speaking to get more accurate insights!"
          />
        </RevealOnScroll>
      </div>
    </div>
  );
};

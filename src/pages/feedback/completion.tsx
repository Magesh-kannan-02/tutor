import { BackgroundBlur } from "@/assets";
import { Button, Featurecard } from "@/components";
import { RootLayout } from "@/layouts";
import { useFlowStore } from "@/store/flow";
import { FeedbackHeader } from "./components/header";
import { TickContent } from "./components/tickContent";

export const Completion = () => {
  const back = useFlowStore((state) => state.back);
  const next = useFlowStore((state) => state.next);
  return (
    <RootLayout
      containerClassName={`relative  overflow-hidden  py-[0.8rem] px-[1rem] flex flex-col bg-content1`}
    >
      {/* Backgrounds */}
      <BackgroundBlur
        className="absolute -left-96 -top-28 pointer-events-none"
        size={700}
      />
      <BackgroundBlur
        className="absolute -bottom-48 -right-96 pointer-events-none"
        size={600}
      />
      {/* header */}
      <FeedbackHeader onBack={back} />

      {/* Content */}

      <div
        className="flex   
      items-center flex-col flex-1    overflow-y-auto my-auto [mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]"
      >
        <p className="text-body3 font-semibold  pb-[2rem] pt-10 px-[3rem] text-content1-foreground  text-center leading-tight ">
          Your English Skills Report is Ready 🎯
        </p>
        <TickContent text="Great work!"  className="mb-[5rem]"/>
        <div className=" w-full flex flex-col mt-auto  mb-[2rem]">
          <Featurecard
            className="py-[1.063rem]  pl-[0.3rem]  pr-[2rem] bg-content1-foreground/15
            backdrop-blur   !border-background-50"
            allowendendContent={false}
            textclassName="text-body leading-[130%] font-medium !text-content1-foreground font-sans"
            textContent="You’ve unlocked a personalized insight into your strengths and focus areas."
          />
          
         
        </div>
      </div>

      {/* Footer */}
      <div className=" w-full ">
        <Button
          buttonText={"Continue"}
          variant="secondary"
          onClick={next}
          textClassName="text-h5 !text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

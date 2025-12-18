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
      containerClassName={`relative h-screen overflow-hidden  py-[0.8rem] px-[1rem] flex flex-col bg-content1`}
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
      <FeedbackHeader onBack={back}  />

      {/* Content */}

      <div className="flex justify-center items-center flex-col pt-14 ">
        <p className="text-[1.75rem] font-semibold px-[3rem] pb-[2rem] text-content1-foreground  text-center leading-tight ">Your English Skills Report is Ready 🎯</p>
        <TickContent  text="Great work!"/>

       
      </div>

      {/* Footer */}
      <div className="pt-4 w-full flex flex-col mt-auto gap-[2rem]">
         <Featurecard
          className="py-[1.063rem] pl-[0.3rem]  pr-[2rem] bg-white/10 
            backdrop-blur "
          allowendendContent={false}
          textclassName="!text-[1rem] font-medium text-content1-foreground font-sans"
          textContent="You’ve unlocked a personalized insight into your strengths and focus areas."
        />
        
        <Button
          buttonText={"Continue"}
          variant="secondary"
          onClick={next}
          textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

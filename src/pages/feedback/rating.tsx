import { BackgroundBlur } from "@/assets";
import { RootLayout } from "@/layouts";
import { useFlowStore } from "@/store/flow";
import { FeedbackHeader } from "./components/header";
import { Featurecard } from "@/components";
import { FeedBackData } from "@/data/report";
import { useFeedBackStore } from "@/store/feedback";

export const Rating = () => {
  const back = useFlowStore((state) => state.back);
  const next = useFlowStore((state) => state.next);
  const currentFeedbackId = useFeedBackStore(
    (state) => state.currentfeedbackid
  );
  const updateFeedBack = useFeedBackStore((state) => state.updateFeedback);
  const handleFeedBackClick = (id: string) => {
    updateFeedBack(id);
    setTimeout(() => {
      next();
    }, 300);
  };
  return (
    <RootLayout
      containerClassName={`relative  overflow-hidden  pt-[0.8rem] px-[1rem] flex flex-col bg-content1 
        `}
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
      {/* content */}
      <div
        className="flex flex-col gap-[3.75rem] w-[100%] pb-[0.8rem] flex-1 overflow-y-auto [mask-image:linear-gradient(to_bottom,transparent,black_24px)]
[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24px)]

      "
      >
        <div className="flex flex-col gap-[0.75rem] items-center pt-5">
          <p className="font-semibold  font-sans text-body3 !text-content1-foreground">
            Rate your session!
          </p>
          <p className="!text-h6 text-secondary-150">
            Your vibe helps us level up the AI.
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          {FeedBackData?.map((feedback) => (
            <Featurecard
              key={feedback?.id}
              isactive={currentFeedbackId === feedback?.id}
              icontype={feedback?.icontype}
              textContent={feedback?.title}
              allowendendContent={false}
              activeClassName="!bg-content1-foreground/30 backdrop-blur"
              textclassName="!text-body text-content1-foreground"
              handleClick={() => handleFeedBackClick(feedback?.id)}
              className="bg-content1-foreground/15 backdrop-blur !rounded-[1rem]  p-[1rem]"
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

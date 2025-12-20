import { BackgroundBlur } from "@/assets";
import { Button } from "@/components";
import { RootLayout } from "@/layouts";
import { useFlowStore } from "@/store/flow";
import { FeedbackHeader } from "./components/header";
import { TickContent } from "./components/tickContent";

export const Verified = () => {
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

      <div className="flex justify-center items-center flex-col pt-14 flex-1 overflow-y-auto my-auto [mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]">
        <p className="text-body3 font-semibold px-[3rem] !text-content1-foreground pb-[2.188rem] text-center leading-tight ">
          Verified Successfully!
        </p>
        <TickContent text="You’re all set. Expect your English insights and tips soon." className="mb-auto"/>
        
      </div>

      {/* Footer */}
      <div className="pt-4 w-full  mt-auto ">
        <Button
          buttonText={"Next"}
          variant="secondary"
          onClick={next}
          textClassName="text-h5 !text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

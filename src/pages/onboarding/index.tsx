import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { SelectAge } from "./steps/SelectAge";
import { SelectGender } from "./steps/SelectGender";
import { ProgressBar } from "@/components";
import { SelectSkill } from "./steps/SelectSkill";
import { SelectConfidence } from "./steps/SelectConfidence";
import { SelectFeel } from "./steps/SelectFeel";
import { SelectUse } from "./steps/SelectUse";
import { SelectArea } from "./steps/SelectArea";
import { Percentage } from "./steps/percentage";
import { SelectDifficulty } from "./steps/SelectDifficulty";
import { SelectTrips } from "./steps/SelectTrips";
import { DidYouKnow } from "./steps/DidYouKnow";
import { SelectLevel } from "./steps/SelectLevel";
import { SelectContext } from "./steps/SelectContext";
import { Call } from "./steps/call";
import { useFlowStore } from "@/store/flow";
import { FLOW } from "@/utils/constants";
import { RootLayout } from "@/layouts";

export const Onboarding = () => {
  const {
    stepIndex,
    pageIndex,
    next,
    back,
  } = useFlowStore();

  const totalPages = FLOW.reduce(
    (sum, step) => sum + (step.pages.length || 1),
    0
  );

  // calculate global progress index
  const completedPages =
    FLOW.slice(0, stepIndex).reduce(
      (sum, s) => sum + (s.pages.length || 1),
      0
    ) + pageIndex;

  const progress = (completedPages / totalPages) * 100;

  return (
    <RootLayout
      containerClassName="relative h-screen bg-content1 overflow-hidden"
    >
      {/* Background Blurs */}
      <BackgroundBlur
        size={400}
        className="absolute -top-5 -left-48 z-0 pointer-events-none"
      />
      <BackgroundBlur
        size={400}
        fillOpacity={0.2}
        className="absolute -bottom-20 -right-52 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col gap-5">
        {/* Header */}
        {pageIndex !== 13 && (
          <div className="flex gap-5 items-center pr-9 py-5 px-4">
            <span className="cursor-pointer" onClick={back}>
              <LeftArrowIcon />
            </span>
            <ProgressBar value={progress} className="flex-1" />
          </div>
        )}

        {/* Flow */}
        {stepIndex === 0 && pageIndex === 0 && <SelectAge onNext={next} />}
        {stepIndex === 0 && pageIndex === 1 && <SelectGender onNext={next} />}
        {stepIndex === 0 && pageIndex === 2 && <SelectSkill onNext={next} />}
        {stepIndex === 0 && pageIndex === 3 && <SelectConfidence onNext={next} />}
        {stepIndex === 0 && pageIndex === 4 && <SelectFeel onNext={next} />}
        {stepIndex === 0 && pageIndex === 5 && <SelectUse onNext={next} />}
        {stepIndex === 0 && pageIndex === 6 && <SelectArea onNext={next} />}
        {stepIndex === 0 && pageIndex === 7 && <Percentage onNext={next} />}
        {stepIndex === 0 && pageIndex === 8 && <SelectDifficulty onNext={next} />}
        {stepIndex === 0 && pageIndex === 9 && <SelectTrips onNext={next} />}
        {stepIndex === 0 && pageIndex === 10 && <DidYouKnow onNext={next} />}
        {stepIndex === 0 && pageIndex === 11 && <SelectLevel onNext={next} />}
        {stepIndex === 0 && pageIndex === 12 && <SelectContext onNext={next} />}
        {stepIndex === 0 && pageIndex === 13 && <Call onNext={next}/>}
      </div>
    </RootLayout>
  );
};
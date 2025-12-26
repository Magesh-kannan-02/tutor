import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { AnimatedScreen, ProgressBar } from "@/components";
import { RootLayout } from "@/layouts";

import { useFlowStore } from "@/store/flow";
import { FLOW } from "@/utils/constants";
import { ONBOARDING_COMPONENTS } from "./onboardingSteps";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const Onboarding = () => {
  const navigate = useNavigate();
  const { stepIndex, pageIndex, next, back, direction, getCurrentPage } =
    useFlowStore();

  const totalPages = FLOW.reduce(
    (sum, step) => sum + (step.pages.length || 1),
    0
  );

  const Back = () => {
    if (pageIndex > 0) {
      back();
    } else {
      navigate("/select-test");
    }
  };

  const completedPages =
    FLOW.slice(0, stepIndex).reduce(
      (sum, s) => sum + (s.pages.length || 1),
      0
    ) + pageIndex;

  const progress = (completedPages / totalPages) * 100;

  const CurrentStep = ONBOARDING_COMPONENTS[pageIndex] ?? null;
  let showHeader = true;
  const headerDisallowedRoutes=["call","onboardingcompletion"]
  if (headerDisallowedRoutes?.includes(getCurrentPage() || "")) {
    showHeader = false;
  }

  return (
    <RootLayout containerClassName="relative  min-h-[100dvh]  bg-content1 overflow-hidden">
      {/* Background */}
      <BackgroundBlur
        size={400}
        className="absolute -top-5 -left-48 z-0 pointer-events-none"
      />
      <BackgroundBlur
        size={400}
        fillOpacity={0.2}
        className="absolute -bottom-20 -right-52 pointer-events-none"
      />

      <div className="relative z-10 w-full  min-h-[100dvh]  flex flex-col">
        {/* Header */}
        {showHeader && (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`navbar-${CurrentStep?.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div className="sticky top-0 z-20 flex items-center gap-6 px-4 pt-5 pb-3">
                <span className="cursor-pointer" onClick={Back}>
                  <LeftArrowIcon />
                </span>
                <ProgressBar value={progress} className="flex-1" />
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* CONTAINER */}
        <div
          className="flex-1 overflow-y-auto 
            [mask-image:linear-gradient(to_bottom,transparent,black_20px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_00px,black)]"
        >
          {CurrentStep && (
            <AnimatePresence mode="wait">
              <AnimatedScreen
                motionKey={`content-${CurrentStep?.name}`}
                direction={direction}
                className="w-full h-full"
              >
                <CurrentStep onNext={next} />
              </AnimatedScreen>
            </AnimatePresence>
          )}
        </div>
      </div>
    </RootLayout>
  );
};

import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { AnimatedScreen, ProgressBar } from "@/components";
import { RootLayout } from "@/layouts/withoutNavBar";

import { useFlowStore } from "@/store/flow";
import { useOnboardingStore } from "@/store/onboarding";
import { FLOW } from "@/utils/constants";
import { ONBOARDING_COMPONENTS } from "./onboardingSteps";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export const Onboarding = () => {
  const navigate = useNavigate();
  const { stepIndex, pageIndex, next, back, direction, getCurrentPage } =
    useFlowStore();
  const { setProgress } = useOnboardingStore();

  const currentFlow = FLOW[stepIndex];
  const totalPages = currentFlow?.pages.length || 1;
  const headerDisallowedRoutes=["call","onboardingcompletion","ready"];

  const lastPageKey = currentFlow?.pages[totalPages - 1];
  const isLastPageHidden = typeof lastPageKey === 'string' && headerDisallowedRoutes.includes(lastPageKey);
  
  // If the last page is hidden (e.g. READY), we treat the previous page as the visual 100% mark
  const effectiveTotal = isLastPageHidden ? totalPages - 1 : totalPages;

  const Back = () => {
    if (pageIndex > 0) {
      back();
    } else {
      navigate("/select-test");
    }
  };

  const progress = Math.min(100, ((pageIndex + 1) / effectiveTotal) * 100);

  // Sync progress to store
  useEffect(() => {
    setProgress(progress);
  }, [progress, setProgress]);

  const currentPage = getCurrentPage() as keyof typeof ONBOARDING_COMPONENTS;
  const CurrentStep = ONBOARDING_COMPONENTS[currentPage] ?? null;
  let showHeader = true;
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

import { RootLayout } from "@/layouts/withoutNavBar";
import { BackgroundBlur } from "@/assets";

import {
  AnimatedScreen,
  Button,
  CircularProgress,
  RevealOnScroll,
} from "@/components";
import { useFlowStore } from "@/store/flow";
import { FLOW } from "@/utils/constants";
import { Fluency } from "./fluency";
import { Pronunciation } from "./pronunciation";
import { Grammar } from "./grammar";
import { Vocabulary } from "./vocabulary";
import { ReportNavbar } from "./components/navbar";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import { ViewReport } from "./viewreport";
import { Accent } from "./accent";
import { useNavigate } from "react-router-dom";
import { Badge } from "./components/completion";
// import { useOnboardingStore } from "@/store/onboarding";
const badgeData = {
  id: "badge-1",
  name: "You’ve built a solid foundation.",
  description:
    "You’re not a beginner anymore you’re growing, fast. Keep that energy. 💪",
  badgeType: "upperIntermediate",
};
const pageComponents: Record<any, any> = {
  fluency: {
    component: <Fluency />,
    title: "Fluency",
    hasProgress: true,
    value: 50,
    description:
      "You're improving steadily — just a little faster pacing can make your speech shine.",
    gradientFrom: "#63FF7F",
    gradientTo: "#035C24",
    trackColor: "#1f3b28",
    bgColour: "bg-primary-250",
    buttonText: "Next",
  },
  pronunciation: {
    component: <Pronunciation />,
    title: "Pronunciation",
    hasProgress: true,
    value: 48,
    description: "Improve your grammar skills to reach A1 proficiency.",
    gradientFrom: "#63D3FF",
    gradientTo: "#031A5C",
    trackColor: "#233147",
    bgColour: "bg-content1-150",
    buttonText: "Next",
  },
  grammar: {
    component: <Grammar />,
    title: "Grammar",
    hasProgress: true,
    value: 15,
    description:
      "Grammar's not your enemy — just level it up by 40% to speak smoother! 🎯",
    gradientFrom: "#FFB663",
    gradientTo: "#5C3603",
    trackColor: "#473F23",
    bgColour: "bg-content2-50",
    buttonText: "Next",
  },
  vocabulary: {
    component: <Vocabulary />,
    title: "Vocabulary",
    hasProgress: true,
    value: 70,
    description: "Boost your vocab by 14% to express with more clarity.",
    gradientFrom: "#FF63DD",
    gradientTo: "#5C034D",
    trackColor: "#472445",
    bgColour: "bg-content2-100",
    buttonText: "Next",
  },
  viewreport: {
    component: <ViewReport />,
    title: "",
    hasProgress: false,
    bgColour: "bg-content1",
    buttonText: "View My Report",
  },
  accent: {
    title: "Indian Accent",
    hasProgress: false,

    component: <Accent />,
    buttonText: "Continue",
    bgColour: "bg-content1",
  },
  badge: {
    hasProgress: false,
    component: <Badge {...badgeData} />,
    bgColour: "bg-content1",
    buttonText: "Continue",
  },
};

interface ReportProps {
  homeRoute?: string;
  onComplete?: () => void;
  buttonText?: string;
}

export const Report = ({ homeRoute = "/", onComplete, buttonText }: ReportProps) => {
  const { stepIndex, pageIndex, next, direction } = useFlowStore();
  // const { progress } = useOnboardingStore();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const step = FLOW[stepIndex];
  const currentPageKey = step?.pages?.[pageIndex];
  const currentPage = currentPageKey ? pageComponents[currentPageKey] : null;

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentPageKey]);
  const handleClick = () => {
    if (currentPageKey === "badge") {
      navigate("/onboarding/levelup");
      return;
    }
    // Always navigate to home on vocabulary step completion
    if (currentPageKey === "vocabulary") {
      if (onComplete) {
        onComplete();
      } else {
        navigate(homeRoute);
      }
    } else {
      next();
    }
  };
  const btnText = () => {
    if (buttonText) {
      return buttonText;
    }
    if (currentPageKey === "vocabulary") {
      return "Done";
    } else {
      return currentPage?.buttonText;
    }
  };

  return (
    <RootLayout
      containerClassName={`relative overflow-hidden pt-[1.563rem] pb-[1rem]  flex flex-col ${currentPage?.bgColour} transition-none`}
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

      {/* Header */}
      <AnimatePresence mode="popLayout">
        {currentPage && (
          <motion.div
            key={`navbar-${currentPageKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full px-[1rem]"
          >
            <ReportNavbar
              onBack={() => navigate(-1)}
              title={currentPage?.title}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div
        ref={scrollContainerRef}
        className="
    flex-1 w-full h-full  overflow-y-auto 
    [mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]
  "
      >
        <AnimatePresence mode="wait">
          <AnimatedScreen
            motionKey={`content-${currentPageKey}`}
            direction={direction}
          >
            {currentPage?.hasProgress && (
              <div className="flex flex-col items-center gap-4 pt-[1.688rem] px-[1rem]">
                <motion.div
                  key={`progress-${currentPageKey}`}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 14,
                    delay: 0.1,
                  }}
                >
                  <CircularProgress
                    label="Score"
                    value={currentPage?.value}
                    size={130}
                    gradientFrom={currentPage?.gradientFrom}
                    gradientTo={currentPage?.gradientTo}
                    trackColor={currentPage?.trackColor}
                  />
                </motion.div>

                <RevealOnScroll
                  delay={0.25}
                  y={10}
                  threshold={0.4}
                  springConfig={{
                    type: "spring",
                    stiffness: 130,
                    damping: 18,
                    mass: 0.7,
                  }}
                >
                  <p className="font-sans text-h6 text-center !text-secondary-150 leading-snug">
                    {currentPage?.description}
                  </p>
                </RevealOnScroll>
              </div>
            )}

            {/* Page content */}

            {currentPage?.component}
          </AnimatedScreen>
        </AnimatePresence>

        {/* Scroll-safe padding at bottom */}
      </div>

      {/* Footer */}
      <div className="pt-4 my-auto w-full px-[1rem]">
        <Button
          buttonText={btnText()}
          variant="secondary"
          onClick={handleClick}
          textClassName="text-h5 !text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

import { BackgroundBlur } from "@/assets";
import { AnimatedScreen, Button } from "@/components";
import { RootLayout } from "@/layouts";
import { FeedbackHeader } from "./components/header";
import { useFlowStore } from "@/store/flow";
import { Rating } from "./rating";
import { Verified } from "./verified";
import { Completion } from "./completion";
import { PersonalDetails } from "./personalDetails";
import { Verification } from "./verification";
import React from "react";
import { FLOW } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";

export const FeedBack = () => {
  const FeedBackComponents: Record<any, any> = {
    rating: {
      title: "rating",
      content: <Rating />,
      hasButton: false,
    },
    completion: {
      title: "completion",
      hasButton: true,
      buttontext: "Continue",
      content: <Completion />,
    },
    verified: {
      title: "verified",
      hasButton: true,
      buttontext: "Next",
      content: <Verified />,
    },
    feedbackuserdetails: {
      title: "feedbackuserdetails",
      buttontext: "Send Verification Code",
      hasButton: true,
      content: <PersonalDetails />,
    },
    verification: {
      title: "verification",
      hasButton: true,
      buttontext: "Verify & Continue",
      content: <Verification />,
    },
  };

  const { stepIndex, pageIndex, next, back, direction } = useFlowStore();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const step = FLOW[stepIndex];
  const currentPageKey = step?.pages?.[pageIndex];
  const currentPage = currentPageKey
    ? FeedBackComponents[currentPageKey]
    : null;

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentPageKey]);

  const handleButtonClick = () => {
    next();
  };
  return (
    <RootLayout
      containerClassName={`relative  overflow-hidden  py-[0.8rem] px-[1rem] flex flex-col !bg-content1`}
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
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`navbar-${currentPageKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          <FeedbackHeader onBack={back} />
        </motion.div>
      </AnimatePresence>
      {/* content */}
      <div
        className="flex   
      items-center w-[100%] h-[100%] flex-col flex-1 overflow-y-auto my-auto [mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]"
      >
        <AnimatePresence mode="wait">
          <AnimatedScreen
            motionKey={`content-${currentPageKey}`}
            direction={direction}
            className="w-full !h-full" 
          >
           
        
            {currentPage?.content}
             
          </AnimatedScreen>
        </AnimatePresence>
      </div>
      {currentPage?.hasButton && (
        <div className=" w-full ">
          <Button
            buttonText={currentPage?.buttontext}
            variant="secondary"
            onClick={handleButtonClick}
            textClassName="text-h5 !text-content1 font-medium font-sans"
          />
        </div>
      )}
    </RootLayout>
  );
};

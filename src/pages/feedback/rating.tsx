import { useFlowStore } from "@/store/flow";
import { motion } from "framer-motion";
import { Featurecard } from "@/components";
import { FeedBackData } from "@/data/report";
import { useFeedBackStore } from "@/store/feedback";

export const Rating = () => {
  const next = useFlowStore((state) => state.next);
  const currentFeedbackId = useFeedBackStore(
    (state) => state.currentfeedbackid
  );

  const updateFeedBack = useFeedBackStore((state) => state.updateFeedback);
  const handleFeedBackClick = (id: string) => {
    updateFeedBack(id);
    setTimeout(() => {
      next();
    }, 250);
  };

  return (
    <div className="w-[100%] px-[0.2rem]">
      {/* content */}
      <div className="flex flex-col gap-[0.75rem] items-center pt-5 pb-[3.75rem]">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-semibold font-sans text-body3 !text-content1-foreground"
        >
          Rate your session!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="!text-h6 text-secondary-150"
        >
          Your vibe helps us level up the AI.
        </motion.p>
      </div>

      <div className="flex flex-col gap-[1rem] pb-[1rem]">
        {FeedBackData?.map((feedback, index) => (
          <motion.div
            key={feedback.id}
            initial={{
              opacity: 0,

              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: index * 0.08,
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.6,
            }}
          >
            <Featurecard
              isactive={currentFeedbackId === feedback?.id}
              icontype={feedback?.icontype}
              textContent={feedback?.title}
              allowendendContent={false}
              activeClassName="!bg-content1-foreground/30 backdrop-blur"
              textclassName="!text-body text-content1-foreground"
              handleClick={() => handleFeedBackClick(feedback?.id)}
              className="bg-content1-foreground/15 backdrop-blur !rounded-[1rem] p-[1rem]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

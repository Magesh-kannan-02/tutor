import { Featurecard } from "@/components";
import { TickContent } from "./components/tickContent";
import { motion } from "framer-motion";

export const Completion = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between pb-[2rem]">
      {/* Content */}
      <div className="flex flex-col">
        <motion.p
          className="text-body3 font-semibold pb-[2rem] pt-10 px-[3rem] text-content1-foreground text-center leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Your English Skills Report is Ready 🎯
        </motion.p>

        <TickContent text="Great work!" />
      </div>

      <div className="w-full flex flex-col mt-auto">
        <Featurecard
          className="py-[1.063rem] pl-[0.3rem] pr-[2rem] bg-content1-foreground/15 backdrop-blur !border-background-50"
          allowendendContent={false}
          textclassName="text-body leading-[130%] font-medium !text-content1-foreground font-sans"
          textContent={
            "You’ve unlocked a personalized insight into your strengths and focus areas."
          }
        />
      </div>
    </div>
  );
};

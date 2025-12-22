import { motion } from "framer-motion";
import { TickContent } from "./components/tickContent";

export const Verified = () => {
  return (
    <div className="w-full">
      {/* Title */}
      <motion.p
        className="text-body3 font-semibold px-[3rem] !text-content1-foreground py-[2.188rem] text-center leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Verified Successfully!
      </motion.p>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <TickContent
          text="You’re all set. Expect your English insights and tips soon."
          className="mb-auto"
        />
      </motion.div>
    </div>
  );
};

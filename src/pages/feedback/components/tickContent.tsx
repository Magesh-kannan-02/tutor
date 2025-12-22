import { cn } from "@/lib/utils";
import TickImg from "@/assets/images/greenTick.png";
import { motion } from "framer-motion";
interface TickContentProps {
  className?: string;
  text?: string;
  textClassName?: string;
}

export const TickContent = ({
  className,
  text,
  textClassName,
}: TickContentProps) => {
  return (
    <div className={cn(className, "flex flex-col items-center gap-[1rem]")}>
      <img src={TickImg} alt="tick" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p
          className={cn(
            textClassName,
            "text-body5 px-4 text-center  font-sans text-secondary-150"
          )}
        >
          {text}
        </p>
      </motion.div>
    </div>
  );
};

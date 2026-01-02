import { motion } from "framer-motion";
import EmailImg from "@/assets/images/email.png";

interface EmailContentProps {
  text?: string;
  description?: string;
  email?: string;
  image?:string;
}

export const Content = ({
  text,
  description,
  email,
  image,
}: EmailContentProps) => {
  return (
    <div className="flex flex-col items-center mt-auto">
      {/* Static image */}
      <img src={image || EmailImg} alt="email" width={160} height={160} />

      <div className="flex flex-col gap-[0.75rem] px-3">
        {/* Title */}
        {text && (
          <motion.p
            className="font-semibold text-body3 !text-content1-foreground text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {text}
          </motion.p>
        )}

        <div className="flex flex-col items-center">
          {/* Description */}
          {description && (
            <motion.p
              className="!text-h6 text-secondary-150 text-center !leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {description}
            </motion.p>
          )}

          {/* Email */}
          {email && (
            <motion.p
              className="text-h6 font-bold text-content1-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {email}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

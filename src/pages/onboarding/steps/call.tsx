import { useEffect } from "react";
import { CallEndIcon } from "@/assets/CallEndIcon";
import { Caption, CircularTimer, DrawerComponent } from "@/components";
import { Avatarcard } from "@/components/atoms/avatarcard/avatarcard";
import { useOnboardingStore } from "@/store/onboarding";
import { motion } from "framer-motion";

interface CallProps {
  onNext?: () => void;
}

const DRAWER_OPEN_DELAY = 5000; // ms
const DRAWER_CLOSE_DURATION = 5; // seconds

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export const Call = ({onNext}:CallProps) => {
  const {
    selectedContext,
    contextCategory,
    isCallDrawerOpen,
    callDrawerCloseIn,
    openCallDrawer,
    closeCallDrawer,
    tickCallDrawer,
  } = useOnboardingStore();

  /* open drawer after delay */
  useEffect(() => {
    const openTimer = setTimeout(() => {
      openCallDrawer(DRAWER_CLOSE_DURATION);
    }, DRAWER_OPEN_DELAY);

    return () => clearTimeout(openTimer);
  }, [openCallDrawer]);

  /* countdown */
  useEffect(() => {
    if (!isCallDrawerOpen) return;

    const interval = setInterval(() => {
      tickCallDrawer();
    }, 1000);

    return () => clearInterval(interval);
  }, [isCallDrawerOpen, tickCallDrawer]);

  /* handle time end */
  useEffect(() => {
    if (!isCallDrawerOpen) return;

    if (callDrawerCloseIn <= 0) {
      closeCallDrawer();
      onNext?.();
    }
  }, [callDrawerCloseIn, isCallDrawerOpen, closeCallDrawer, onNext]);

  return (
  <motion.div
      className="flex flex-col items-center w-full h-full py-5 px-4 gap-5 my-auto justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
     <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Avatarcard
          icontype="avatar"
          imageClassname="w-[12rem] h-[7.5rem]"
          className="w-24 h-24 mt-auto mb-2 overflow-hidden"
        />

        <p className="text-2xl font-black text-primary-200 mt-auto">
          {selectedContext}
        </p>

        <p className="text-body4 font-bold text-content1-foreground">
          {contextCategory === "daily"
            ? "Daily Conversation"
            : "Career Training"}
        </p>
      </motion.div>

       <motion.div
        className="mt-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <CircularTimer duration={180} size={150} strokeWidth={5} />
      </motion.div>

     <motion.p
        className="mt-auto text-h6 text-content1-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Hey, I’m Harry! How can I help you?
      </motion.p>

    <motion.div
        className="mt-auto w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <Caption className="bg-content1-foreground/15" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <button
          className="
            mt-auto mb-auto
            w-16 h-16
            rounded-full
            bg-gradient-to-b
            from-[#FF2222]
            to-[#B32F2F]
            flex items-center justify-center
            shadow-lg
            active:scale-95
            transition-transform
          "
          onClick={onNext}
        >
          <CallEndIcon width={35} />
        </button>
      </motion.div>

      <DrawerComponent
        open={isCallDrawerOpen}
        onOpenChange={(v) => (v ? openCallDrawer(DRAWER_CLOSE_DURATION) : closeCallDrawer())}
        position="bottom"
        closeOnOutsideClick={false}
        innerClassName="bg-secondary-200/10 backdrop-blur-xl border border-content1-100"
        overlayClassName="fixed inset-x-0 mx-auto bg-transparent"
        className="!h-[485px] max-w-[450px] !mx-auto"
        headerContent="Incorrect verb form"
        headerClassName="text-body4 text-content1-foreground font-semibold"
        headerContentCalssname="flex-1 text-center"
        content={
         <motion.div
            className="p-4 h-full flex flex-col  mb-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mt-auto text-2xl font-bold text-green-400 flex-1">
              I’m working on it!
            </p>

            <p className="text-h6 text-content1-foreground text-center">
              Close in: {formatTime(callDrawerCloseIn)}
            </p>
          </motion.div>
        }
      />
    </motion.div>
  );
};

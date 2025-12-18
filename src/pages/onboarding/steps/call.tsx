import { useEffect } from "react";
import { CallEndIcon } from "@/assets/CallEndIcon";
import { Caption, CircularTimer, DrawerComponent } from "@/components";
import { Avatarcard } from "@/components/atoms/avatarcard/avatarcard";
import { useOnboardingStore } from "@/store/onboarding";

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

  return (
    <div className="flex flex-col items-center w-full h-full py-5 px-4 gap-7">
      <div className="flex flex-col items-center">
        <Avatarcard
          icontype="avatar"
          imageClassname="w-[12rem] h-[7.5rem]"
          className="w-24 h-24 mt-3 overflow-hidden"
        />

        <p className="text-2xl font-black text-primary-200 mt-4">
          {selectedContext}
        </p>

        <p className="text-xl font-bold text-content1-foreground">
          {contextCategory === "daily"
            ? "Daily Conversation"
            : "Career Training"}
        </p>
      </div>

      <div className="mt-6">
        <CircularTimer duration={180} size={150} strokeWidth={5} />
      </div>

      <p className="mt-6 text-sm text-content1-foreground">
        Hey, I’m Harry! How can I help you?
      </p>

      <div className="mt-16 w-full">
        <Caption className="bg-content1-foreground/15" />
      </div>

      <div>
        <button
          className="
            mt-auto mb-6
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
      </div>

      <DrawerComponent
        open={isCallDrawerOpen}
        onOpenChange={(v) => (v ? openCallDrawer(DRAWER_CLOSE_DURATION) : closeCallDrawer())}
        position="bottom"
        closeOnOutsideClick={false}
        innerClassName="bg-secondary-200/10 backdrop-blur-xl border border-content1-100"
        overlayClassName="fixed inset-x-0 mx-auto bg-transparent"
        className="!h-[485px] max-w-[450px] !mx-auto"
        headerContent="Incorrect verb form"
        headerClassName="text-xl text-content1-foreground font-semibold"
        headerContentCalssname="flex-1 text-center"
        content={
          <div className=" p-4 h-full flex flex-col gap-10 pb-16">
            <p className="mt-6 text-2xl font-bold text-green-400 flex-1">
              I’m working on it!
            </p>

            <p className="text-sm text-content1-foreground text-center">
              Close in: {formatTime(callDrawerCloseIn)}
            </p>
          </div>
        }
      />
    </div>
  );
};

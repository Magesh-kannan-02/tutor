import {
  DrawerComponent,
  Switch,
  StreakProgressCalendar,
  SemiCircleProgress,
  QuickTip,
} from "@/components";
import { useHomeStore } from "@/store/home";
import { useState } from "react";

interface RewardAndProgressProps {
  open: boolean;
  onClose: (open: boolean) => void;
  defaultTab?: "streak" | "xp";
}

export const RewardAndProgress = ({
  open,
  onClose,
  defaultTab = "streak",
}: RewardAndProgressProps) => {
  const [mode, setMode] = useState<"streak" | "xp">(defaultTab);
  const { streak, xp, streakGrid, xpHistory } = useHomeStore();

  const content = (
    <div className="my-[1rem] flex flex-col gap-[1rem] overflow-y-auto">
      {/* Tabs */}
      <div className="">
        <Switch
          options={[
            { label: "Streak", value: "streak" },
            { label: "XP", value: "xp" },
          ]}
          value={mode}
          onValueChange={(val) => setMode(val as "streak" | "xp")}
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        {mode === "streak" ? (
          <div className="flex flex-col gap-4">
            <StreakProgressCalendar
              title="🔥 Your Streak Progress"
              subtitle="Current streak"
              streak={streak.count.toString().padStart(2, "0")}
              iconType="fire"
              grid={streakGrid}
            />

            <QuickTip 
              title="You’re building the habit of fluency. 💪"
              description="Keep it up — 7-day streak unlocks your first badge" 
              icontype="rookie" 
              iconName="rookie" 
              iconClassname="w-20 h-20"
              iconPosition="end"
              titleClassName="text-h5 !text-start leading-5"
              descriptionClassName="text-[14px] !text-start leading-4"
            />

            <div className="flex flex-col gap-2 items-center mt-4">
              <p className="text-h5 font-bold text-content1-foreground flex items-center gap-2">
                🎁 Next reward
              </p>
              <p className="text-[14px] font-medium !text-secondary-150">
                Bronze Speaker Badge” (after 7 days)
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* XP Progress */}
            <div className="bg-content1-foreground/10 rounded-2xl p-6 flex flex-col items-center relative overflow-hidden">
              <p className="text-h5 font-semibold text-content1-foreground mb-4 flex items-center gap-2">
                <img src={xp.icon} alt="gem" className="w-5" /> Your XP Journey
              </p>

              <div className="scale-75 -my-4">
                <SemiCircleProgress
                  value={((xp.count % 100) / 100) * 100}
                  size={400}
                  strokeWidth={50}
                  trackColor="#3b3b3b"
                  gradientEndColor="#FFB907"
                  gradientStartColor="#804900"
                  contentWrapperClassName="top-[25%]"
                  content={
                    <div className="flex flex-col items-center">
                      <img src={xp.levelIcon} alt="gem" className="w-20" />
                      <p className="text-[30px] font-bold text-content1-foreground">
                        {xp.count} XP
                      </p>
                    </div>
                  }
                />
              </div>
              <p className="text-caption text-secondary-150">
                Level {xp.level} → Level {xp.level + 1}
              </p>
              <p className="text-caption text-secondary-150">
                You’re leveling up fast!
              </p>
            </div>

            <div className="text-center py-3">
              <p className="text-h5 font-medium text-content1-foreground flex items-center justify-center gap-2">
                🧭 Next level in {xp.nextLevelXP} XP
              </p>
            </div>

            {/* XP Grid */}
            <div className="mt-2">
              <div className="flex justify-between text-h5 text-secondary-150 font-semibold mb-2 px-2">
                <span>Action</span>
                <span>XP Earned</span>
              </div>
              <div className="flex flex-col gap-2">
                {xpHistory.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 py-4 rounded-xl bg-content1-foreground/10"
                  >
                    <span className="text-h5 font-medium text-content1-foreground">
                      {item.action}
                    </span>
                    <span className="text-h5 font-medium text-content1-foreground">
                      +{item.xp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <DrawerComponent
      open={open}
      onOpenChange={onClose}
      position="bottom"
      className="!h-[90%] max-w-[425px] !p-0 mx-auto"
      innerClassName="border-content1-100 m-0 px-[1rem] bg-content2-150 rounded-t-[1rem] rounded-b-none flex flex-col"
      headerContentClassname="pt-[1.25rem] flex items-center justify-center"
      headerContent={
        <p className="text-body5 font-semibold text-content1-foreground font-sans">
          Rewards & Progress Hub
        </p>
      }
      content={content}
    />
  );
};

import { LayoutWithNavBar } from "@/layouts/withNavBar";
import { BackgroundBlur, Logo } from "@/assets";
import { useHomeStore } from "@/store/home";

import aiCallImg from "@/assets/images/aiCall.png";
import aiCallBlackImg from "@/assets/images/aiCallBlack.png";
import { Button, Chip, Dropdown, QuickTip, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { usePracticeStore } from "@/store/practice";
import { useNavigate } from "react-router-dom";

export const Practice = () => {
  const { streak, xp, user } = useHomeStore();
  const { contextCategory, selectedContext, setContextCategory, setSelectedContext } = usePracticeStore();
  const navigate = useNavigate();

  return (
    <LayoutWithNavBar containerClassName="bg-content1 h-full relative overflow-hidden">
      {/* Background elements ensuring transparency works over them */}
      <BackgroundBlur
        size={400}
        className="absolute -top-5 -left-48 z-0 pointer-events-none"
      />
      <BackgroundBlur
        size={400}
        fillOpacity={0.3}
        className="absolute -bottom-20 -right-52 pointer-events-none"
      />

      <div className="w-full h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-4 pt-6 shrink-0 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo />
              <p className="!text-content1-foreground font-bold text-body4">
                Logo
              </p>
            </div>
            <div className="flex items-center gap-2 border !border-content1-100 rounded-xl px-3 py-2 ">
              <div className="flex items-center gap-1">
                <img src={streak.icon} alt="fire" className="w-6" />
                <p className="text-[14px] !text-secondary-150">
                  {streak.count} Day
                </p>
              </div>
              <div className="w-[1px] h-5 bg-content1-100 mx-1"></div>
              <div className="flex items-center gap-1">
                <img src={xp.icon} alt="diamond" className="w-6" />
                <p className="text-[14px] !text-secondary-150">{xp.count} XP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full overflow-y-auto flex flex-col gap-5 items-center px-4 pt-4 pb-4 mb-[6rem]">
          {/* Level Title */}
          <RevealOnScroll>
            <div className="text-center">
              <h1 className="text-[20px] font-semibold text-content1-foreground">
                {user.level.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary-200">
                  {user.level.split(" ").slice(-1)[0]}
                </span>
              </h1>
            </div>
          </RevealOnScroll>

          {/* Orb Image */}
          <RevealOnScroll delay={0.2}>
            <div className="relative h-20 place-self-center">
              <img
                src={aiCallImg}
                alt="AI"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src={aiCallBlackImg}
                alt="AI overlay"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll delay={0.2}>
            <div className="text-h6 text-secondary-150 font-semibold text-center mb-16">
              <p className="pb-0.5">Call with AI tutor</p>
              <p>to assess your English in the chosen context</p>
            </div>
          </RevealOnScroll>

          {/* Context Selection */}
          <div className="flex flex-col gap-4">
            <RevealOnScroll delay={0.3}>
              <p className="text-body4 text-content1-foreground text-center font-bold">
                Select your context
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} y={12}>
              <Dropdown
                placeholder="Career Training"
                className="px-4"
                triggerClassName="bg-content1-foreground/15"
                options={[
                  { label: "Career Training", value: "career" },
                  { label: "Daily Conversation", value: "daily" },
                ]}
                value={contextCategory}
                onChange={setContextCategory}
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
            <div className="flex gap-3 overflow-x-auto">
              {["Tour Guide", "Medical Staff", "Teacher", "Lawyer"].map((chip, i) => (
                <Chip
                  key={i}
                  text={chip}
                  isactive={selectedContext === chip}
                  handleClick={() => setSelectedContext(chip)}
                  allowAnimation
                  className={cn("flex-shrink-0 ", i === 0 && "ml-4")}
                />
              ))}
            </div>
            </RevealOnScroll>
          </div>

          {/* Goal Card */}
          <RevealOnScroll delay={0.2}>
            <QuickTip
              icontype="aim"
              iconName="goal"
              title="Goal"
              description={
                <p className="text-h5 !text-secondary-150 font-medium">
                  Improve Fluency + Vocabulary
                </p>
              }
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Button
              buttonText="Start call"
              variant="secondary"
              textClassName="text-body5 !text-content1 font-medium"
              baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
              onClick={() => navigate("/practice-flow/call")}
            />
          </RevealOnScroll>
        </div>
      </div>
    </LayoutWithNavBar>
  );
};
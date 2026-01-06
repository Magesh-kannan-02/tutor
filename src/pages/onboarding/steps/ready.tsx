import { LeftArrowIcon, LineGraphBg } from "@/assets";
import { Button, Roadmap, RevealOnScroll } from "@/components";

import { useOnboardingStore } from "@/store/onboarding";
import { useAccountStore } from "@/store/accounts";
import { useNavigate } from "react-router-dom";

export const Ready = () => {
  const { roadmapData, roadmapMilestones } = useOnboardingStore();

  const {
    personalInfo: { name },
  } = useAccountStore();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen overflow-hidden text-content1-foreground relative">
      {/* Header */}
      <div
        className="absolute top-0 w-full flex items-center gap-4 py-5 pb-4 px-4 z-20 bg-background-200
            [mask-image:linear-gradient(to_bottom,black,black_85%,transparent)]
            [-webkit-mask-image:linear-gradient(to_bottom,black,black_85%,transparent)]"
      >
        <span className="cursor-pointer" onClick={() => navigate(-1)}>
          <LeftArrowIcon />
        </span>
        <RevealOnScroll>
          <p className="text-body3 font-semibold max-w-[300px] !text-center mx-auto leading-8">
            {name || "User"}, your growth roadmap is ready 🌟
          </p>
        </RevealOnScroll>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth pt-24 pb-32">
        {/* Roadmap */}
        <div className="relative w-full">
          <div className="absolute inset-0 pointer-events-none z-0">
            <LineGraphBg className="w-full h-full" preserveAspectRatio="none" />
          </div>
          <RevealOnScroll delay={0.1}>
            <Roadmap
              milestones={roadmapMilestones}
              className="pl-4 relative z-10"
              height={"500px"}
              width="100%"
            />
          </RevealOnScroll>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-5 px-4 mt-6">
          {roadmapData.map((card) => (
            //  <RevealOnScroll>
            <div className="bg-content1-foreground/15 p-4 rounded-2xl flex flex-col justify-between gap-2 min-h-[150px]">
              <div className="flex items-center justify-between">
                <p className="font-bold text-h5">{card.title}</p>
                {card.icon.startsWith("/") ? (
                  <img src={card.icon} alt={card.title} className="w-6 h-6" />
                ) : (
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-6 h-6 object-contain"
                  />
                )}
              </div>

              <p className="text-content1-foreground">{card.description}</p>
            </div>
            // </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="absolute bottom-0 w-full bg-background-200 pt-5 pb-2 px-4
            [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10px,black)] z-20"
      >
        <RevealOnScroll delay={0.6}>
          <Button
            buttonText="I'm Ready – Let's Go!"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
            onClick={() => navigate("/")}
          />
        </RevealOnScroll>
      </div>
    </div>
  );
};

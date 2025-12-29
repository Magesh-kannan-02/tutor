import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { LockIcon } from "@/assets";
import { iconMapping } from "@/utils";

interface RewardsItem {
  id?: string;
  isLocked?: boolean;
  icontype?: string;
}

interface RewardsDetailsCardProps {
  id?: string;
  baseClassName?: string;
  rewards: RewardsItem[];
  headerClassName?: string;
  itemClassName?: string;
}

export const RewardsDetailsCard = ({
  id,
  baseClassName,
  rewards,
  headerClassName,
  itemClassName,
  ...props
}: RewardsDetailsCardProps) => {
  const LIMIT = 4;
  const [showAll, setShowAll] = useState(false);

  const visibleRewards = showAll ? rewards : rewards?.slice(0, LIMIT);

  return (
    <Card
      id={id}
      className={cn(
        "flex cursor-pointer rounded-[0.625rem] flex-col gap-[1.25rem] py-[1.2rem] px-[1rem] bg-content1-foreground/1 border-content1-100",
        baseClassName
      )}
      allowAnimation={false}
      {...props}
    >
      {/* Header */}
      <div className={cn("flex items-center justify-between", headerClassName)}>
        <p className="text-body5 font-semibold text-content1-foreground">
          Rewards
        </p>

        <p
          className="text-h6 font-medium text-primary cursor-pointer"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "See less" : "See all"}
        </p>
      </div>

      {/* Rewards List */}
      <div className="flex w-[100%] gap-[0.8rem] flex-wrap">
        {visibleRewards.map((reward, index) => {
          const Icon = iconMapping[reward?.icontype ?? ""];

          return (
            <div
              key={reward.id ?? index}
              className={cn(
                "rounded-[0.75rem] flex justify-center items-center w-[70px] bg-background-100",
                itemClassName
              )}
            >
              {reward?.isLocked ? (
                <span className="p-[1rem]">
                  <LockIcon />
                </span>
              ) : (
                <>
                  {Icon?.type === "svg" ? (
                    <Icon.icon />
                  ) : (
                    <div>
                      <img src={Icon?.icon as string} width={49} height={58} />
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

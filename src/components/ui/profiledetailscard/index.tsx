import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { Separator } from "@/components";
import DiamondImg from "@/assets/images/diamond.png";
import StreakImg from "@/assets/images/streak.png";

interface ProfileDetailsProps {
  id?: string;
  name: string;
  joinedDate: string;
  streak: string;
  xp: number;
  baseclassName?: string;
  nameClassName?: string;
  joinedDateClassName?: string;
  valueClassName?: string;

}
export const ProfileDetailsCard = ({
  id = "",
  name = "",
  joinedDate = "",
  streak = "",
  xp = 0,
  baseclassName = "",
  nameClassName = "",
  joinedDateClassName = "",
  valueClassName = "",
  ...props
}: ProfileDetailsProps) => {
  return (
    <Card
      id={id}
      className={cn(
        "flex cursor-pointer rounded-[0.625rem] flex-col gap-[1.25rem] p-[1.2rem] bg-content1-foreground/1 border-content1-100",
        baseclassName
      )} {...props}
    >
      <div className="flex flex-col gap-[0.5rem] items-center">
        <p className={cn("text-body5 text-content1-foreground font-semibold ",nameClassName)}>
          {name}
        </p>
        <p className={cn("text-body text-secondary-150 ",joinedDateClassName)}>
          Joined on {joinedDate}
        </p>
        <Separator
          orientation="horizontal"
          className="bg-content1-100 mt-[0.3rem]  "
        />
      </div>
      <div className="flex w-full items-stretch">
        <div className="flex flex-col items-center gap-[0.5rem] w-[50%]">
          <p className="text-body text-content1-foreground font-semibold">
            Streak
          </p>
          <div className="flex items-center gap-2">
            <img src={StreakImg} width={24} height={24} className="pb-1" />
            <p className={cn("text-body text-secondary-150 ",valueClassName)}>{streak}</p>
          </div>
        </div>

        <Separator
          orientation="vertical"
          className="bg-content1-100 h-auto  w-[0.5px]"
        />

        <div className="flex flex-col gap-[0.5rem] w-[50%] items-center">
          <p className="text-body text-content1-foreground font-semibold">XP</p>
          <div className="flex items-center gap-2">
            <img src={DiamondImg} width={24} height={24} />
            <p className={cn("text-body text-secondary-150 ",valueClassName)}>{xp} XP</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

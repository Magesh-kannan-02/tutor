import { cn } from "@/lib/utils";
import { DrawerComponent } from "../drawer/drawer";
import { iconMapping } from "@/utils";
import { Button } from "../button/button";
import { SemiCircleProgress } from "../semicircleprogress/semicircleprogress";

interface SkillCardProps {
  name: string;
  progress: number;
  iconType: string;
  description: string;
}
interface SkillOverviewDrawerProps {
  id?: string;
  open?: boolean;
  onClose?: (open: boolean) => void;
  progress?: number;
  skills?: SkillCardProps[];
  baseClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  handleOnClick?: () => void;
  buttonText?: string;
}
const ProgressContent = ({ progress }: { progress: number }) => {
  return (
    <div className="flex items-center flex-col gap-[0.75rem] pt-10">
      <p className="text-body4 font-semibold text-primary-200">
        {progress}%
      </p>
      <p className="text-h5  text-secondary-150 ">
        Progress
      </p>
    </div>
  );
};

const SkillCard = (item: SkillCardProps) => {
  const Icon = iconMapping[item.iconType];
  return (
    <div className="rounded-[0.625rem] gap-[1rem] flex flex-col  items-start p-[1rem] bg-content1-250  border-content1-100">
      <div className="flex items-center gap-3">
        <Icon.icon className="w-[15px] h-[15px] shrink-0" />
        <p className="text-h5 font-semibold text-start tracking-wide text-content1-foreground break-all">
          {item?.name || ""}
        </p>
      </div>
      <p className="text-body4 font-semibold text-primary-200">
        {item?.progress || 0}%
      </p>
      <p className="text-body font-sans pt-1 text-secondary-150 text-start ">
        {item?.description || ""}
      </p>
    </div>
  );
};
export const SkillOverviewDrawer = ({
  id,
  open = false, // state of drawer open or close
  onClose, // for close of drawer
  progress = 0, // overall progress of skill
  skills = [], // skills array
  baseClassName, // base class name
  headerClassName, // header class name
  contentClassName, // content class name
  handleOnClick, // button onclick
  buttonText = "View Results", // button text
  ...props
}: SkillOverviewDrawerProps) => {
  return (
    <DrawerComponent
      open={open}
      onOpenChange={onClose}
      closeOnOutsideClick={true}
      {...props}
      className="!h-[600px]"
      innerClassName={cn(
        "border-content1-100 m-0 px-[1rem] bg-content2-150 rounded-[1rem] overflow-y-auto  flex flex-col",
        baseClassName
      )}
      headerContentClassname={cn(
        "pt-[1.25rem] flex items-center justify-center",
        headerClassName
      )}
      footerClassName="w-[100%] mt-auto"
      headerContent={
        <div className="flex items-center justify-center ">
          <p className="text-body5 font-semibold text-content1-foreground font-sans">
            Skills Overview
          </p>
        </div>
      }
      content={
        <div
          className={cn(
            "my-[1.5rem] flex flex-col  gap-[2rem] overflow-y-auto",
            contentClassName
          )}
        >
          <SemiCircleProgress
            value={progress}
            size={270}
            strokeWidth={33}
            gradientEndColor="#63FF7F"
            gradientStartColor="#035C24"
            className="bg-transparent mx-auto"
            content={<ProgressContent progress={progress}/>}
          />
          <div className="grid grid-cols-2 gap-[1rem]">
            {skills.map((item, index) => (
              <SkillCard key={index} {...item} />
            ))}
          </div>
        </div>
      }
      footerContent={
        <Button
          buttonText={buttonText}
          baseClassName="w-full "
          variant={"secondary"}
          onClick={handleOnClick}
        />
      }
    />
  );
};

import {
  ArrowRightIcon,
  BackgroundBlur,
  ExitIcon,
  ProfileIcon,
} from "@/assets";
import {
  ProfileAvatar,
  ProfileDetailsCard,
  RewardsDetailsCard,
} from "@/components";
import { LayoutWithNavBar } from "@/layouts/withNavBar";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const rewards = [
    {
      id: "reward-1",
      isLocked: false,
      icontype: "badge",
    },
    {
      id: "reward-2",
      isLocked: true,
      icontype: "badge",
    },
    {
      id: "reward-2",
      isLocked: true,
      icontype: "badge",
    },
    {
      id: "reward-2",
      isLocked: true,
      icontype: "badge",
    },
    {
      id: "reward-2",
      isLocked: true,
      icontype: "badge",
    },
  ];
  const navigate = useNavigate();

  return (
    <LayoutWithNavBar
      containerClassName={`relative h-full overflow-hidden    bg-content1 transition-none`}
    >
      <BackgroundBlur
        className="absolute -left-96 -top-28 pointer-events-none"
        size={700}
      />

      <BackgroundBlur
        className="absolute -bottom-48 -right-96 pointer-events-none"
        size={600}
      />
      <div className="flex flex-col mb-[5.5rem] pb-4 overflow-y-auto w-full h-full items-center gap-[1rem] px-[1rem]  mt-[1rem]">
        <ProfileAvatar
          size={130}
          onChange={(file, preview) => {
            console.log(file);
            console.log(preview);
          }}
          value="https://th.bing.com/th/id/OIP.j11pt13ZectNBnErbzz1JAHaHa?w=209&h=209&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1"
        />
        <ProfileDetailsCard
          name="Bala Vignesh"
          joinedDate="02 Oct 2025"
          streak="01 Day"
          xp={120}
          baseclassName=" mt-3"
        />
        <RewardsDetailsCard rewards={rewards} />
        <div
          onClick={() => navigate("/accounts")}
          className="
    flex items-center justify-between w-full
    rounded-[0.625rem] bg-background-100/60 p-[1rem]
    cursor-pointer select-none
    transition-all duration-200 ease-out
    hover:bg-background-100/80
    active:scale-[0.97] active:bg-background-100/60
  "
        >
          <div className="flex items-center gap-4">
            <ProfileIcon fill="#FFFFFF" width={26} height={26} />
            <p className="text-h5 font-semibold text-content1-foreground">
              My Account
            </p>
          </div>

          <ArrowRightIcon />
        </div>
        <div
          className="
    flex items-center w-full
    rounded-[0.625rem] bg-background-100/60 p-[1rem]
    cursor-pointer select-none
    transition-all duration-200 ease-out
    hover:bg-background-100/60
    active:scale-[0.97] active:bg-background-100
  "
        >
          <div className="flex items-center gap-4">
            <ExitIcon width={26} height={26} />
            <p className="text-h5 font-semibold text-content1-foreground">
              Log out
            </p>
          </div>
        </div>
      </div>
    </LayoutWithNavBar>
  );
};

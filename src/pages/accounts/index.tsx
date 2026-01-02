import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { RevealOnScroll, Separator } from "@/components";
import { RootLayout } from "@/layouts/withoutNavBar";
import { useNavigate } from "react-router-dom";
interface AccountsItem {
  item: string;
  path: string;
}
export const Accounts = () => {
  const accountData: AccountsItem[] = [
    { item: "Change Name", path: "change-name" },
    { item: "Change Email", path: "change-email" },
    { item: "Change Password", path: "change-password" },
  ];
  const navigate = useNavigate();
  const deleteAccount = () => {};
  return (
    <RootLayout
      containerClassName={`overflow-hidden relative  flex flex-col bg-content1 py-[1.375rem] px-[1.25rem] `}
    >
      {/* Backgrounds */}
      <BackgroundBlur
        className="absolute -left-96 -top-28 pointer-events-none"
        size={700}
      />

      <BackgroundBlur
        className="absolute -bottom-48 -right-96 pointer-events-none"
        size={600}
      />
      <RevealOnScroll y={-12} delay={0.05}>
        <div className="flex items-center w-full">
          <span onClick={() => navigate(-1)} className="!cursor-pointer">
            <LeftArrowIcon />
          </span>
          <p className="text-center mx-auto text-body4 font-bold text-content1-foreground">
            My Account
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.12}>
        <div className="rounded-[0.625rem] p-[1rem] mt-[2.5rem] w-full bg-content1-foreground/5 flex flex-col border-[0.5px] border-content1-100 gap-[1rem]">
          {accountData?.map((item: AccountsItem, index: number) => {
            return (
              <RevealOnScroll
                key={item.path}
                delay={0.15 + index * 0.07}
                y={14}
              >
                <div className="flex flex-col gap-[1rem]">
                  <p
                    onClick={() => navigate(item?.path)}
                    key={index}
                    className="text-body w-fit cursor-pointer font-sans text-content1-foreground"
                  >
                    {item?.item}
                  </p>

                  <Separator className="w-full bg-content1-100 h-[0.5px]" />
                </div>
              </RevealOnScroll>
            );
          })}
          <p
            onClick={deleteAccount}
            className="text-body w-fit cursor-pointer font-sans text-danger-50"
          >
            Delete My Account
          </p>
        </div>
      </RevealOnScroll>
    </RootLayout>
  );
};

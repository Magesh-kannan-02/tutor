import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { RootLayout } from "@/layouts/withoutNavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { ChangeHelperComponents } from "./changeHelperComponents";
import { Button, RevealOnScroll } from "@/components";
import { useAccountStore } from "@/store/accounts";
import React from "react";
import { Verification } from "@/pages/feedback/verification";
import { Verified } from "@/pages/feedback/verified";
import { CreatePassword } from "@/pages/feedback/createPassword";
export const AccountChange = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const params = path.split("/").filter(Boolean).pop();
   console.log(params);
   
  const {
    personalInfo,
    updatePersonalInfo,
    personalInfoErrors,
    updateErrors,
    resetpersonalInfoErrors,
    validatePassword,
  } = useAccountStore();
  React.useEffect(() => {
    resetpersonalInfoErrors();
  }, []);
  const handleButtonClick = () => {
    switch (params) {
      case "change-name":
        if (!personalInfo.name) {
          updateErrors("name", "Name is required");
          return;
        }
        navigate("/accounts");

        break;
      case "change-email":
        if (!personalInfo.email) {
          updateErrors("email", "Email is required");
          return;
        }
        navigate("/accounts/verification");
        break;
      case "verification":
        if (!personalInfo.verficationCode) {
          updateErrors("verficationCode", "Verification code is required");
          return;
        }
        navigate("/accounts/verified");
        break;
      case "verified":
        navigate("/accounts");
        break;
      case "change-password":
        if (validatePassword()) navigate("/accounts/old-password");
        break;

      case "old-password":
        if (!personalInfo.oldPassword) {
          updateErrors("oldPassword", "Password is required");
          return;
        }
        if (personalInfo.oldPassword !== personalInfo.password) {
          updateErrors("oldPassword", "Password is incorrect");
          return;
        }
        navigate("/accounts");
        break;
    }
  };
  const changeData: Record<any, any> = {
    "change-name": {
      title: "Change Name",

      content: (
        <ChangeHelperComponents
          label="Your Name"
          placeholder="Enter Your Name"
          type="text"
          value={personalInfo.name}
          error={personalInfoErrors.name}
          onChange={(value) => updatePersonalInfo("name", value)}
        />
      ),
      buttonText: "Update",
    },
    "change-email": {
      title: "Change Email",
      content: (
        <ChangeHelperComponents
          label="Your Email"
          placeholder="Enter Your Email"
          type="email"
          error={personalInfoErrors.email}
          value={personalInfo.email}
          onChange={(value) => updatePersonalInfo("email", value)}
        />
      ),
      buttonText: "Send Verification Code",
    },
    verification: {
      content: <Verification />,
      buttonText: "Verify & Continue",
    },
    verified: {
      content: <Verified />,
      buttonText: "Done",
    },
    "change-password": {
      content: (
        <CreatePassword
          title="Create your password"
          description="Enter a strong password to secure your account."
          field="password"
        />
      ),
      buttonText: "Next",
    },
    "old-password": {
      content: (
        <CreatePassword
          title="Enter Old Password"
          description="Enter Old password to confirm new password."
          field="oldPassword"
          hasConfirm={false}
          showStrength={false}
          label="Old Password"
          placeholder="Enter Old Password"
        />
      ),
      buttonText: "Update",
    },
  };

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
        <div className="flex items-center w-full flex-1 ">
          <span onClick={() => navigate(-1)} className="cursor-pointer">
            <LeftArrowIcon />
          </span>
          <p className="text-center mx-auto text-body4 font-bold text-content1-foreground">
            {changeData[params || ""]?.title}
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15} y={20}>
        <div className="mt-[1.688rem] w-full h-full">
          {changeData[params || ""]?.content}
        </div>
      </RevealOnScroll>
      <div className="mt-auto w-full">
        <Button
          onClick={handleButtonClick}
          buttonText={changeData[params || ""]?.buttonText}
          variant="secondary"
          textClassName="text-h5 !text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

import EmailImg from "@/assets/images/email.png";
interface EmailContentProps {
  text?: string;
  description?: string;
  email?: string;
}
export const EmailContent = ({
  text,
  description,
  email,
}: EmailContentProps) => {
  return (
    <div className="flex flex-col items-center mt-16">
      <img src={EmailImg} alt="email" width={160} height={160} />
      <div className="flex flex-col gap-[0.75rem] px-3">
        <p className="font-semibold text-[1.75rem] text-content1-foreground text-center ">
          {text}
        </p>
        <div className="flex flex-col items-center">
          <p className="!text-h6 text-secondary-150 text-center !leading-snug">
            {description}
          </p>
          <p className="text-h6 font-bold text-content1-foreground">{email}</p>
        </div>
      </div>
    </div>
  );
};

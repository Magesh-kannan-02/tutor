import { Wordscard } from "@/components";
import { frequencydata } from "@/data/report";


export const Fluency = () => {
  return (
    <div className="pt-[2rem] pb-[0.5rem]  w-[100%] flex flex-col gap-[1rem] ">
      {frequencydata?.map((item, index) => (
        <Wordscard
         className="bg-content1-foreground/5"
         key={index}
          icontype="snail"
          iconName="snail"
          title={item?.title}
          caption={item?.heading}
          description={item?.description}
        />
      ))}
    </div>
  );
};

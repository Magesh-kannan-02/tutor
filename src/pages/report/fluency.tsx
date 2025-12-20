import { Wordscard } from "@/components";
import { frequencydata } from "@/data/report";


export const Fluency = () => {
  return (
    <div className="py-[2rem] w-[100%] flex flex-col gap-[1rem] overflow-y-auto hide-scrollbar">
      {frequencydata?.map((item, index) => (
        <Wordscard
         className="bg-white/5"
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

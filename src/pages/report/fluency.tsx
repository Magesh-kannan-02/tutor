import { Wordscard ,RevealOnScroll} from "@/components";
import { frequencydata } from "@/data/report";


export const Fluency = () => {
  return (
    <div className="pt-[2rem] pb-[0.5rem]  w-[100%] flex flex-col gap-[1rem]">
      {frequencydata?.map((item, index) => (
        <RevealOnScroll
          key={index}
          delay={index * 0.08}
          y={12}
          threshold={0.2}
          springConfig={{
            type: "spring",
            stiffness: 130,
            damping: 18,
            mass: 0.7,
          }}
        >
          <Wordscard
            className="bg-content1-foreground/5"
            icontype="snail"
            iconName="snail"
            title={item?.title}
            caption={item?.heading}
            description={item?.description}
          />
        </RevealOnScroll>
      ))}
    </div>
  );
};
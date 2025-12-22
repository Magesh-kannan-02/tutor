import { GrammarCard, Wordscard } from "@/components";
import { grammarData ,grammarTitle} from "@/data/report";

export const Grammar = () => {
  return (
    <div className="pt-[2.9rem] pb-[1rem] flex flex-col gap-[0.75rem]  w-[100%]">
      <Wordscard
        icontype={grammarTitle?.iconType}
        iconName={grammarTitle?.iconType}
        title={grammarTitle?.title}
         className="!bg-content1-foreground/5"
        titleClassname="text-lg text-content1-foreground font-bold"
        caption="Let’s break them down and fix them fast."
        captionClassname="text-sm text-medium text-secondary-150"
      />

      <div className="flex flex-col gap-[1.75rem]">
        {grammarData?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-[1.75rem]" >
            <p className="font-bold font-sans text-body !text-secondary-150">
              {section?.category}
            </p>
            <div className="flex flex-col gap-[1rem]">

            {section?.cards?.map((card, cardIndex) => (
              <GrammarCard
               className="!bg-content1-foreground/5"
               label={card?.label}
                activelabelname={card?.activelabel}
                key={cardIndex}
                title={card?.title}
                message={card?.message}
                explanation={card?.explanation}
                
                
              />
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

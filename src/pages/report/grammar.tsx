import { GrammarCard, Wordscard,RevealOnScroll } from "@/components";
import { grammarData, grammarTitle } from "@/data/report";


export const Grammar = () => {
  return (
    <div className="pt-[2.9rem] pb-[1rem] flex flex-col gap-[0.75rem] w-[100%] ">
      <RevealOnScroll
        delay={0.1}
        y={16}
        threshold={0.3}  
      >
        <Wordscard
          icontype={grammarTitle?.iconType}
          iconName={grammarTitle?.iconType}
          title={grammarTitle?.title}
          className="!bg-content1-foreground/5"
          titleClassname="text-lg text-content1-foreground font-bold"
          caption="Let’s break them down and fix them fast."
          captionClassname="text-sm text-medium text-secondary-150"
        />
      </RevealOnScroll>

      <div className="flex flex-col gap-[1.75rem]">
        {grammarData?.map((section, sectionIndex) => (
          
            <div key={sectionIndex} className="flex flex-col gap-[1.75rem]">
              <p className="font-bold font-sans text-body !text-secondary-150">
                {section?.category}
              </p>

              <div className="flex flex-col gap-[1rem]">
                {section?.cards?.map((card, cardIndex) => (
                  <RevealOnScroll
                    key={cardIndex}
                    delay={cardIndex * 0.04}
                    y={8} // Smaller movement for cards
                    threshold={0.1} // Lower threshold for cards
                    springConfig={{
                      type: "spring",
                      stiffness: 140,
                      damping: 16,
                      mass: 0.6,
                    }}
                  >
                    <GrammarCard
                      className="!bg-content1-foreground/5 active:scale-[0.98] transition-transform duration-100" // Add tap feedback
                      label={card?.label}
                      activelabelname={card?.activelabel}
                      title={card?.title}
                      message={card?.message}
                      explanation={card?.explanation}
                    />
                  </RevealOnScroll>
                ))}
              </div>
            </div>
         
        ))}
      </div>
    </div>
  );
};

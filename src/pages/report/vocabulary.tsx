import { VocabularyCard, Wordscard, RevealOnScroll } from "@/components";
import { vocabularyData, vocabularyTitle } from "@/data/report";

export const Vocabulary = () => {
  return (
    <div className="flex pt-[1.813rem] pb-[1rem] flex-col gap-[1rem]">
      {/* Title Card */}
      <RevealOnScroll>
        <Wordscard
          icontype={vocabularyTitle?.iconType}
          iconName={vocabularyTitle?.iconType}
          className="px-[1rem] py-2"
          title={vocabularyTitle?.title}
          titleClassname="text-[1rem] font-sans text-content1-foreground font-bold"
        />
      </RevealOnScroll>

      {/* Header */}
      <RevealOnScroll delay={0.05}>
        <div className="grid grid-cols-5 items-center w-[90%] mx-[1rem]">
          <p className="col-span-1 font-bold text-secondary-150">Level</p>
          <p className="col-span-2 font-bold text-secondary-150">Your word</p>
          <p className="col-span-2 font-bold text-secondary-150">
            Say it better
          </p>
        </div>
      </RevealOnScroll>

      {/* Cards */}
      <div className="flex flex-col gap-[1.125rem]">
        {vocabularyData?.map((item, index) => (
          <RevealOnScroll
            key={item.id}
            delay={index * 0.05} 
            y={28}
          >
            <VocabularyCard
              className="!bg-content1-foreground/5"
              value={item?.value}
              level={item?.level}
              word={item?.word}
              optionalWord={item?.optionalWord}
              chips={item?.chips}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

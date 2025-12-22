import { VocabularyCard, Wordscard } from "@/components";
import { vocabularyData,vocabularyTitle } from "@/data/report";

export const Vocabulary = () => {
  return (
    <div className="flex pt-[1.813rem] pb-[1rem]  flex-col gap-[1rem]">
      <Wordscard
        icontype={vocabularyTitle?.iconType}
        iconName={vocabularyTitle?.iconType}
        className="px-[1rem] py-2"
        title={vocabularyTitle?.title}
        titleClassname="text-[1rem] font-sans text-content1-foreground font-bold"
      />

      {/* Header */}
      <div className="grid grid-cols-5 items-center w-[90%] mx-[1rem]">
        <p className="col-span-1 font-bold text-secondary-150">Level</p>
        <p className="col-span-2 font-bold text-secondary-150">Your word</p>
        <p className="col-span-2   grid   font-bold text-secondary-150">
          Say it better
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-[1.125rem]">
        {vocabularyData?.map((item) => (
          <VocabularyCard
            className="!bg-content1-foreground/5"
            key={item?.id}
            value={item?.value}
            level={item?.level}
            word={item?.word}
            optionalWord={item?.optionalWord}
            chips={item?.chips}
          />
        ))}
      </div>
    </div>
  );
};

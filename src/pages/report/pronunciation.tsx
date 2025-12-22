import { Wordscard } from "@/components";
import { Playcard } from "@/components/ui/playcard/playcard";
import { pronountiationTileData, pronountiationwords } from "@/data/report";
import React from "react";

const PronunciationCard = ({ item }: { item: any }) => {
  const [playingId, setPlayingId] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col gap-[0.813rem]">
      <p className="font-bold font-sans text-body !text-secondary-150">
        {item?.title}
      </p>

      <div className="flex flex-col gap-[0.75rem]">
        {item?.data?.map((data: any) => {
          const isPlaying = playingId === data.id;

          return (
            <Playcard
            className="cursor-pointer bg-content1-foreground/5"
              key={data.id}
              title={data.title}
              icontype={isPlaying ? "sound" : "play"}
              iconName={isPlaying ? "sound" : "play"}
              onClick={() => setPlayingId(isPlaying ? null : data.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Pronunciation = () => {
  return (
    <div className="flex flex-col pt-[2rem] pb-[1rem] gap-y-[1.25rem] w-full">
      {/* Summary Card */}
      <Wordscard
        className="bg-content1-foreground/5"
        icontype={pronountiationTileData?.icontype}
        iconName={pronountiationTileData?.icontype}
        caption={pronountiationTileData?.title}
        description={pronountiationTileData?.description}
      />

      {/* Pronunciation Sections */}
      <div className="flex flex-col gap-[1.25rem]">
        {pronountiationwords?.map((item: any) => (
          <PronunciationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

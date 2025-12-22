import { Wordscard, RevealOnScroll } from "@/components";
import { Playcard } from "@/components/ui/playcard/playcard";
import { pronountiationTileData, pronountiationwords } from "@/data/report";

import React from "react";

const PronunciationCard = ({ item }: { item: any }) => {
  const [playingId, setPlayingId] = React.useState<string | null>(null);

  return (
    <RevealOnScroll
      delay={0.05}
      y={12}
      threshold={0.2}
      springConfig={{
        type: "spring",
        stiffness: 130,
        damping: 18,
        mass: 0.7,
      }}
    >
      <RevealOnScroll
        key={item}
        delay={0.07}
        y={8}
        threshold={0.1}
        springConfig={{
          type: "spring",
          stiffness: 140,
          damping: 16,
          mass: 0.6,
        }}
      >
        <div className="flex flex-col gap-[0.813rem]">
          <p className="font-bold font-sans text-body !text-secondary-150">
            {item?.title}
          </p>

          <div className="flex flex-col gap-[0.75rem]">
            {item?.data?.map((data: any, index: number) => {
              const isPlaying = playingId === data.id;

              return (
                <RevealOnScroll
                  key={data.id}
                  delay={index * 0.04}
                  y={8}
                  threshold={0.1}
                  springConfig={{
                    type: "spring",
                    stiffness: 140,
                    damping: 16,
                    mass: 0.6,
                  }}
                >
                  <Playcard
                    className="cursor-pointer bg-content1-foreground/5"
                    title={data.title}
                    icontype={isPlaying ? "sound" : "play"}
                    iconName={isPlaying ? "sound" : "play"}
                    onClick={() => setPlayingId(isPlaying ? null : data.id)}
                  />
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </RevealOnScroll>
  );
};

export const Pronunciation = () => {
  return (
    <div className="flex flex-col pt-[2rem] pb-[1rem] gap-y-[1.25rem] w-full">
      {/* Summary Card */}
      <RevealOnScroll delay={0.1} y={16} threshold={0.3}>
        <Wordscard
          className="bg-content1-foreground/5"
          icontype={pronountiationTileData?.icontype}
          iconName={pronountiationTileData?.icontype}
          caption={pronountiationTileData?.title}
          description={pronountiationTileData?.description}
        />
      </RevealOnScroll>

      {/* Pronunciation Sections */}
      <div className="flex flex-col gap-[1.25rem]">
        {pronountiationwords?.map((item: any, index: number) => (
          <RevealOnScroll
            key={item.id}
            delay={index * 0.06}
            y={12}
            threshold={0.2}
            springConfig={{
              type: "spring",
              stiffness: 130,
              damping: 18,
              mass: 0.7,
            }}
          >
            <PronunciationCard item={item} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

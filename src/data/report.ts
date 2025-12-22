export const frequencydata = [
  {
    id: "1",
    title: "Words per minute",
    heading: "63 Words - Slow",
    description:
      "You’re improving steadily — just a little faster pacing can make your speech shine.",
  },
  {
    id: "2",
    title: "Parasitic Words",
    heading: "02 %",
    description:
      "You’re doing great! Push your pace slightly to sound more natural and lively.",
  },
];
export const pronountiationTileData = {
  title: "Challenging Sounds",
  description: "Replay. Repeat. Crush it.",
  icontype: "snail",
};
export const pronountiationwords = [
  {
    id: "1",
    title: "Sound /æ/",
    data: [
      {
        id: "1",
        title: "actually",
        phonetic: "/ˈæk.tʃu.ə.li/",
        meaning: "In fact; really",
        url: "https://example.com/audio/actually.mp3",
      },
      {
        id: "2",
        title: "apple",
        phonetic: "/ˈæp.əl/",
        meaning: "A round fruit with red or green skin",
        url: "https://example.com/audio/apple.mp3",
      },
      {
        id: "3",
        title: "cat",
        phonetic: "/kæt/",
        meaning: "A small domesticated animal",
        url: "https://example.com/audio/cat.mp3",
      },
    ],
  },
];
export const grammarTitle = {
  id: "1",
  iconType: "arm",
  title: "Grammar’s got a few tricks up its sleeve 😏",
  description: "Let’s break them down and fix them fast.",
};

export const grammarData = [
  {
    category: "Countable vs. Uncountable",
    cards: [
      {
        title: "Use the correct noun form:",
        message: "I’m working on it!",
        label: "Play your Audio",
        activelabel: "Stop Audio",
        explanation:
          "You can count apps or websites, but not software. Think of “software” as a whole category, not separate items.",
      },
      {
        title: "More examples:",
        message: "She has many books.",
        explanation: "Books are countable, but information is uncountable.",
      },
    ],
  },
  {
    category: "Articles",
    cards: [
      {
        title: "Choose the right article:",
        message: "She bought a new car.",
        explanation:
          "Use 'a' before words starting with a consonant sound, and 'an' before vowels.",
      },
    ],
  },
];
// data/report.ts

export const vocabularyTitle = {
  iconType: "virus",
  title: "Common words holding you back",
};

export const vocabularyData = [
  {
    id: "vocab-1",
    level: "A1",
    word: "Good",
    optionalWord: "Beneficial  Pleasant",
    value: "a1-good",
    chips: [
      {
        label: "Play your audio",
        activeLabel: "Helpful",
        audioUrl:""
      },
      {
        label: "Beneficial",
        activeLabel: "Helpful",
      },
      {
        label: "Pleasant",
        activeLabel: "Enjoyable",
      },
    ],
  },
  {
    id: "vocab-2",
    level: "A2",
    word: "Bad",
    optionalWord: "Harmful  Unpleasant",
    value: "a2-bad",
    chips: [
      {
        label: "Harmful",
        activeLabel: "Negative",
      },
      {
        label: "Unpleasant",
        activeLabel: "Negative",
      },
    ],
  },
];
export const FeedBackData = [
  { id: "1", icontype: "cup", title: "Epic session", type: "image" },
  { id: "2", icontype: "super", title: "Super helpful", type: "image" },
  { id: "3", icontype: "decent", title: "Decent", type: "image" },
  { id: "4", icontype: "sad", title: "Not great", type: "image" },
  
];

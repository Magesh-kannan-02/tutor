export interface VocabularySliceTypes{
  score: number;
  description: string;
  title:{
    iconType: string;
    title: string;
    description?: string;
  }


    
  data: {
    id: string;
    level: string;
    word: string;
    optionalWord?: string;
    value: string;
    chips: {
      label: string;
      activeLabel: string;
    }[];
  }[];
}
export type VocabularyState=VocabularySliceTypes;
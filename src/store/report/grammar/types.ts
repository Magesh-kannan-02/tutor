export interface GrammarSliceTypes{
    title: {
    iconType: string;
    title: string;
    description: string;
  };
  data: {
    category: string;
    cards: {
      title: string;
      message: string;
      explanation: string;
      label?: string;
      activelabel?: string;
    }[];
  }[];
}
export type GrammarState=GrammarSliceTypes;
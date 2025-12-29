
interface FeedbackSliceTypes {
  currentfeedbackid: string;
  

  updateFeedback: (feedback: string) => void;
  
}
export type FeedbackState = FeedbackSliceTypes;

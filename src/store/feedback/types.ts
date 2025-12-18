export interface FeedbackData {
  name?: string;
  email?: string;
  verficationCode?: string;
}
interface FeedbackSliceTypes {
  currentfeedbackid: string;
  personalInfo: FeedbackData;
  updateFeedback: (feedback: string) => void;
  updatePersonalInfo: <K extends keyof FeedbackData>(
    key: K,
    value: FeedbackData[K]
  ) => void;
    resetpersonalInfo: () => void;
}
export type FeedbackState = FeedbackSliceTypes;

export interface FeedbackData {
  name?: string;
  email?: string;
  verficationCode?: string;
  password:string,
  confirm_password?:string
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

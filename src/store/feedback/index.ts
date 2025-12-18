import { create} from 'zustand';
import type { FeedbackState } from './types';
import { immer } from 'zustand/middleware/immer';
import { createFeedbackSlice } from './feedbackSlice';

export const useOnboardingStore = create<FeedbackState>()(
    immer((...state)=>({
        ...createFeedbackSlice(...state)
    }))
    

)
    



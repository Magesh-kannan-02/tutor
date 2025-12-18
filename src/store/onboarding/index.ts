import { create} from 'zustand';
import type { OnboardingState } from './types';
import { immer } from 'zustand/middleware/immer';
import { createOnboardingSlice } from './onboardingSlice';

export const useOnboardingStore = create<OnboardingState>()(
    immer((...state)=>({
        ...createOnboardingSlice(...state)
    }))
    

)
    



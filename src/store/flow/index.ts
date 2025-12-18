// flow.store.ts
import { create } from "zustand";
import type { FlowState } from "./type";
import { immer } from "zustand/middleware/immer";
import { createFlowSlice } from "./flowSlice";
 

export const useFlowStore = create<FlowState>()  (
    immer((...state)=>({
        ...createFlowSlice(...state)
    }))
     
)

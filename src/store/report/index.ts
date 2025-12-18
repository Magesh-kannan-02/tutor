import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { FluencyState } from "./fluency/types";

import { createFluencySlice } from "./fluency/fluencySlice";

type ReportStore = FluencyState;

export const useReportStore = create<ReportStore>()(
  immer((...state) => ({
    ...createFluencySlice(...state),
  }))
);

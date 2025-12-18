import type { StateCreator } from "zustand";
import type { ReportState } from "./types";
export const createReportSlice: StateCreator<ReportState> = (set, get) => ({
  title: "",
  value: 0,
  description: "",
  gradientFrom: "",
  gradientTo: "",
  trackColor: "",
  bgColour: "",
});

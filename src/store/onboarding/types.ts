// Selection Types
export type AgeGroup = "<24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+";
export type Gender = "male" | "female";
export type EnglishLevel =
  | "beginner"
  | "intermediate"
  | "upperIntermediate"
  | "advanced";
export type FeelOption = "no" | "maybe" | "yes";

// Generic option
export interface Option<T = string> {
  id: T;
  label: string;
  icon?: string;
  iconClass?: string;
}

// Option Interfaces
export interface AgeGroupOption {
  id: AgeGroup;
  label: string;
}

export interface GenderOption extends Option<Gender> {
  icon: string;
}

export interface LevelOption extends Option<EnglishLevel> {
  description: string;
}

export interface SkillOption {
  id: string;
  title: string;
  icon: string;
}

export interface WorkAreaOption {
  label: string;
  icon: string;
  iconClass: string;
}

export interface DifficultyOption {
  label: string;
  icon: string;
  iconClass: string;
}

export interface TripOption {
  label: string;
  icon: string;
  iconClass: string;
}

export interface UseCaseOption {
  label: string;
  icon: string;
  iconClass: string;
}

export interface FeelOptionItem extends Option<FeelOption> {
  icon: string;
}

/* ✅ NEW: Explicit selections payload */
export interface OnboardingSelections {
  ageGroup: AgeGroup | null;
  gender: Gender | null;
  englishLevel: EnglishLevel | null;
  selectedSkills: string[];
  workArea: string | null;
  confidenceIssues: string[];
  difficultyFactors: string[];
  selectedTrips: string[];
  englishUseCases: string[];
  feelSameWay: FeelOption | null;
  contextCategory: string | undefined;
  selectedContext: string;
}

export interface OnboardingState {
  // USER SELECTIONS
  ageGroup: AgeGroup | null;
  gender: Gender | null;
  englishLevel: EnglishLevel | null;
  selectedSkills: string[];
  workArea: string | null;
  confidenceIssues: string[];
  difficultyFactors: string[];
  selectedTrips: string[];
  englishUseCases: string[];
  feelSameWay: FeelOption | null;
  contextCategory: string | undefined;
  selectedContext: string;

  // DATA
  ageGroups: AgeGroupOption[];
  genders: GenderOption[];
  levels: LevelOption[];
  skills: SkillOption[];
  workAreas: WorkAreaOption[];
  confidenceIssuesOptions: string[];
  difficultyOptions: DifficultyOption[];
  tripOptions: TripOption[];
  useCaseOptions: UseCaseOption[];
  feelOptions: FeelOptionItem[];
  contextChips: string[];
  contextCategories: { label: string; value: string }[];

  // UI / PROGRESS
  currentStep: number;
  totalSteps: number;
  isCompleted: boolean;
  percentage: number;
  statsValue: number;

  isCallDrawerOpen: boolean;
  callDrawerCloseIn: number;
}

export interface OnboardingActions {
  setAgeGroup: (age: AgeGroup) => void;
  setGender: (gender: Gender) => void;
  setEnglishLevel: (level: EnglishLevel) => void;
  setWorkArea: (area: string) => void;
  setFeelSameWay: (feel: FeelOption) => void;
  setContextCategory: (category: string | undefined) => void;
  setSelectedContext: (context: string) => void;

  toggleSkill: (skillId: string) => void;
  toggleConfidenceIssue: (issue: string) => void;
  toggleDifficultyFactor: (factor: string) => void;
  toggleTrip: (trip: string) => void;
  toggleUseCase: (useCase: string) => void;

  setSelectedSkills: (skills: string[]) => void;
  setConfidenceIssues: (issues: string[]) => void;
  setDifficultyFactors: (factors: string[]) => void;
  setSelectedTrips: (trips: string[]) => void;
  setEnglishUseCases: (useCases: string[]) => void;

  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;

  updateStats: (percentage: number, statsValue: number) => void;
  resetSelections: () => void;

  isStepValid: (step: number) => boolean;
  getProgressPercentage: () => number;
  getAllSelections: () => OnboardingSelections;

  openCallDrawer: (duration: number) => void;
  closeCallDrawer: () => void;
  tickCallDrawer: () => void;
}

export type OnboardingStore = OnboardingState & OnboardingActions;

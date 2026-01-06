// Selection Types
export type AgeGroup = "<24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+";
export type Gender = "male" | "female";
export type EnglishLevel =
  | "beginner"
  | "intermediate"
  | "upperIntermediate"
  | "advanced";
export type FeelOption = "no" | "maybe" | "yes";
export type Goal = number;

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

export interface FluentlyOption {
  label: string;
  icon: string;
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

export interface LevelAnalysisData {
  levelName: string;
  levelGrade: string;
  levelImage: string;
  radarData: number[];
  radarLabels: string[];
  themeColor: string;
}

/* Explicit selections payload */
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
  dailyGoal: Goal | null;
  correctionStyle: string | null;
  fluentlySource: string | null;
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
  dailyGoal: Goal | null;
  correctionStyle: string | null;
  fluentlySource: string | null;

  // Level Analysis Data
  levelAnalysisData: LevelAnalysisData;

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
  goalOptions: number[];
  correctionOptions: string[];
  fluentlyOptions: FluentlyOption[];

  // UI / PROGRESS
  currentStep: number;
  totalSteps: number;
  isCompleted: boolean;
  progress: number;
  percentage: number;
  statsValue: number;

  isCallDrawerOpen: boolean;
  callDrawerCloseIn: number;
  roadmapData: RoadmapData[];
  roadmapMilestones: RoadmapMilestone[];
}

export interface OnboardingActions {
  setAgeGroup: (age: AgeGroup) => void;
  setGender: (gender: Gender) => void;
  setEnglishLevel: (level: EnglishLevel) => void;
  setWorkArea: (area: string) => void;
  setFeelSameWay: (feel: FeelOption) => void;
  setContextCategory: (category: string | undefined) => void;
  setSelectedContext: (context: string) => void;
  setDailyGoal: (goal: Goal) => void;
  setCorrectionStyle: (style: string) => void;
  setFluentlySource: (source: string) => void;
  setLevelAnalysisData: (data: LevelAnalysisData) => void;

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
  setPercentage: (percentage: number) => void;
  setProgress: (progress: number) => void;
  resetSelections: () => void;

  isStepValid: (step: number) => boolean;
  getProgressPercentage: () => number;
  getAllSelections: () => OnboardingSelections;

  openCallDrawer: (duration: number) => void;
  closeCallDrawer: () => void;
  tickCallDrawer: () => void;

  setRoadmapData: (data: RoadmapData[]) => void;
  setRoadmapMilestones: (data: RoadmapMilestone[]) => void;
}

export interface RoadmapData {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapMilestone {
  id: string | number;

  percentage?: string;
  topLabel?: string;
  bottomLabel?: string;
  levelText?: string;
  color?: string;
  hidden?: boolean;
}

export type OnboardingStore = OnboardingState & OnboardingActions;

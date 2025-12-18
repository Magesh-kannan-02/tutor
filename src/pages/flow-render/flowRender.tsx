import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FLOW, type StepKey } from "@/utils/constants";
import { useFlowStore } from "@/store/flow";
import { DidYouKnow } from "../onboarding/steps/DidYouKnow";
import { SelectAge } from "../onboarding/steps/SelectAge";
import { SelectGender } from "../onboarding/steps/SelectGender";
import { SelectSkill } from "../onboarding/steps/SelectSkill";
import { SelectConfidence } from "../onboarding/steps/SelectConfidence";
import { SelectUse } from "../onboarding/steps/SelectUse";
import { SelectArea } from "../onboarding/steps/SelectArea";
import { SelectLevel } from "../onboarding/steps/SelectLevel";
import { SelectContext } from "../onboarding/steps/SelectContext";
import { Call } from "../onboarding/steps/call";
import { SelectFeel } from "../onboarding/steps/SelectFeel";
import { Percentage } from "../onboarding/steps/percentage";
import { SelectDifficulty } from "../onboarding/steps/SelectDifficulty";
import { SelectTrips } from "../onboarding/steps/SelectTrips";

export const FlowRenderer = () => {
  const { stepIndex, pageIndex, goTo } = useFlowStore();
  const navigate = useNavigate();
  const location = useLocation();

  const internalNav = useRef(false);

  const COMPONENTS: Record<StepKey, Record<string, React.ReactNode>> = {
    onboarding: {
      age: <SelectAge />,
      gender: <SelectGender />,
      skill: <SelectSkill />,
      confidence: <SelectConfidence />,
      feel:<SelectFeel/>,
      use: <SelectUse />,
      area: <SelectArea />,
      percentage:<Percentage/>,
      difficulty:<SelectDifficulty/>,
      trips:<SelectTrips/>,
      didYouKnow: <DidYouKnow/>,
      level: <SelectLevel />,
      context: <SelectContext />,
      call: <Call/>,
    },
    feedback: {},
    report: {
        
    },
  };

  const step = FLOW[stepIndex];
  const page = step.pages[pageIndex];

 
  useEffect(() => {
    const stepIdx = FLOW.findIndex((s) => s.path === location.pathname);
    if (stepIdx === -1) return;

    if (stepIdx !== stepIndex) {
      internalNav.current = true; 
      goTo(FLOW[stepIdx].key);
    }
  }, [location.pathname]);

 
  useEffect(() => {
    const path = FLOW[stepIndex].path;
    if (location.pathname !== path && !internalNav.current) {
      navigate(path);
    }

    internalNav.current = false; 
  }, [stepIndex]);

  return COMPONENTS[step.key][page] || null;
};

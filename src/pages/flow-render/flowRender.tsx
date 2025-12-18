import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FLOW, type StepKey } from "@/utils/constants";
import { useFlowStore } from "@/store/flow";
import { Report } from "../report";
import { Completion } from "../feedback/completion";
import { Verified } from "../feedback/verified";
import { Rating } from "../feedback/rating";
import { PersonalDetails } from "../feedback/personalDetails";
import { Verification } from "../feedback/verification";

export const FlowRenderer = () => {
  const { stepIndex, pageIndex, goTo } = useFlowStore();
  const navigate = useNavigate();
  const location = useLocation();

  const internalNav = useRef(false);

  const COMPONENTS: Record<StepKey, Record<string, React.ReactNode>> = {
    onboarding: {},
    feedback: {
      rating: <Rating />,
      completion: <Completion />,
      verified: <Verified />,
      feedbackuserdetails:<PersonalDetails />,
      verfication:<Verification />
    },
    report: {
      fluency: <Report />,
      pronunciation: <Report />,
      grammar: <Report />,
      vocabulary: <Report />,
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

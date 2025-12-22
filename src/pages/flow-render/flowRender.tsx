import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FLOW, KEYS, ONBOARDING_PAGES, STEPS } from "@/utils/constants";
import { useFlowStore } from "@/store/flow";
import { Report } from "../report";
import { Completion } from "../feedback/completion";
import { Verified } from "../feedback/verified";

import { PersonalDetails } from "../feedback/personalDetails";
import { Verification } from "../feedback/verification";

import { Onboarding } from "../onboarding";
import { FeedBack } from "../feedback";

export const FlowRenderer = () => {
  const { stepIndex, pageIndex, goTo } = useFlowStore();
  const navigate = useNavigate();
  const location = useLocation();

  const internalNav = useRef(false);

  const COMPONENTS: Record<string, Record<string, React.ReactNode>> = {
    [KEYS.ONBOARDING]: {
      [ONBOARDING_PAGES.AGE]: <Onboarding />,
      [ONBOARDING_PAGES.GENDER]: <Onboarding />,
      [ONBOARDING_PAGES.SKILL]: <Onboarding />,
      [ONBOARDING_PAGES.CONFIDENCE]: <Onboarding />,
      [ONBOARDING_PAGES.FEEL]: <Onboarding />,
      [ONBOARDING_PAGES.USE]: <Onboarding />,
      [ONBOARDING_PAGES.AREA]: <Onboarding />,
      [ONBOARDING_PAGES.PERCENT]: <Onboarding />,
      [ONBOARDING_PAGES.DIFFICULTY]: <Onboarding />,
      [ONBOARDING_PAGES.TRIPS]: <Onboarding />,
      [ONBOARDING_PAGES.DIDYOUKNOW]: <Onboarding />,
      [ONBOARDING_PAGES.LEVEL]: <Onboarding />,
      [ONBOARDING_PAGES.CONTEXT]: <Onboarding />,
      [ONBOARDING_PAGES.CALL]: <Onboarding />,
    },

    [KEYS.FEEDBACK]: {
      [STEPS.RATING]: <FeedBack />,
      [STEPS.COMPLETION]: <FeedBack />,
      [STEPS.FEED_BACKUSER_DDETAILS]: <FeedBack />,
      [STEPS.VERFIFICATION]: <FeedBack />,
      [STEPS.VERIFIED]: <FeedBack />,
    },

    [KEYS.REPORT]: {
      [STEPS.FLUENCY]: <Report />,
      [STEPS.PRONUNCIATION]: <Report />,
      [STEPS.GRAMMAR]: <Report />,
      [STEPS.VOCABULARY]: <Report />,
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

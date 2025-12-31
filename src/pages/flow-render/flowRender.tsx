import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FLOW, KEYS, ONBOARDING_PAGES, STEPS } from "@/utils/constants";
import { useFlowStore } from "@/store/flow";
import { Report } from "../report";

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
      [ONBOARDING_PAGES.LEVEL_ANALYSIS]: <Onboarding />,
      [ONBOARDING_PAGES.CONTEXT]: <Onboarding />,
      [ONBOARDING_PAGES.CALL]: <Onboarding />,
      [ONBOARDING_PAGES.ONBOARDING_COMPLETION]: <Onboarding />,
      [ONBOARDING_PAGES.STREAK]: <Onboarding />,
      [ONBOARDING_PAGES.LEVELUP]: <Onboarding />,
      [ONBOARDING_PAGES.GOAL]: <Onboarding />,
      [ONBOARDING_PAGES.CORRECTION]: <Onboarding />,
      [ONBOARDING_PAGES.FLUENTLY]: <Onboarding />,
      [ONBOARDING_PAGES.READY]: <Onboarding />,
    },

    [KEYS.FEEDBACK]: {
      [STEPS.RATING]: <FeedBack />,
      [STEPS.COMPLETION]: <FeedBack />,
      [STEPS.FEED_BACKUSER_DDETAILS]: <FeedBack />,
      [STEPS.VERFIFICATION]: <FeedBack />,
      [STEPS.VERIFIED]: <FeedBack />,
      [STEPS.CREATE_PASSWORD]: <FeedBack />,
    },

    [KEYS.REPORT]: {
      [STEPS.VIEW_REPORT]: <Report />,
      [STEPS.ACCENT]: <Report />,
      [STEPS.FLUENCY]: <Report />,
      [STEPS.PRONUNCIATION]: <Report />,
      [STEPS.GRAMMAR]: <Report />,
      [STEPS.VOCABULARY]: <Report onComplete={() => navigate("/report/badge")} buttonText="Next" />,
      [STEPS.BADGE]: <Report />,
    },

    [KEYS.PRACTICE_FLOW]: {
      [ONBOARDING_PAGES.CALL]: <Onboarding />,
      [ONBOARDING_PAGES.ONBOARDING_COMPLETION]: <Onboarding />,
      [STEPS.VIEW_REPORT]: <Report />,
      [STEPS.ACCENT]: <Report />,
      [STEPS.FLUENCY]: <Report />,
      [STEPS.PRONUNCIATION]: <Report />,
      [STEPS.GRAMMAR]: <Report />,
      [STEPS.VOCABULARY]: <Report onComplete={() => navigate("/")} />
    },
  };

  const step = FLOW[stepIndex] || FLOW[0];
  const page = step.pages[pageIndex] || step.pages[0];

  useEffect(() => {
    const parts = location.pathname.split("/").filter(Boolean);

    const currentStepKey = (parts[0] as keyof typeof COMPONENTS) || FLOW[0].key;
    const currentPageKey = parts[1] || step.pages[0];

    const stepIdx = FLOW.findIndex((s) => s.key === currentStepKey);
    if (stepIdx !== -1) {
      const pageExists = FLOW[stepIdx].pages.includes(currentPageKey as any);
      if (pageExists) {
        internalNav.current = true;
        goTo(
          currentStepKey,
          currentPageKey as (typeof FLOW)[number]["pages"][number]
        );
      }
    }
  }, [location.pathname, goTo]);

  useEffect(() => {
    const path = `/${step.key}/${page}`;
    if (location.pathname !== path && !internalNav.current) {
      navigate(path);
    }
    internalNav.current = false;
  }, [stepIndex, pageIndex, step, page, navigate, location.pathname]);

  return step && page ? COMPONENTS[step.key]?.[page] || null : null;
};

import {FlowRenderer, Home,NotAuthorized,PlayGround,SelectTest} from "@/pages";



import { ROUTES } from "@/utils";
interface Route {
  path: string;
  element: React.ReactNode;
}

// Public pages
export const publicRoutes :Route[]= [
  { path: ROUTES.NOT_AUTHORIZED, element: <NotAuthorized /> },
  { path: ROUTES.PLAYGROUND, element: <PlayGround /> },
  { path: ROUTES?.SELECT_TEST, element: <SelectTest /> }, 
   { path: "/onboarding", element: <FlowRenderer /> },
  { path: "/feedback", element: <FlowRenderer /> },
  { path: "/report", element: <FlowRenderer /> },
];

// Protected pages
export const privateRoutes = [{ path: ROUTES?.HOME, element: <Home /> }];

// Role-based access
export const roleRoutes: Record<string, string[]> = {
  admin: [ROUTES?.HOME],
  user: [ROUTES?.HOME],
};

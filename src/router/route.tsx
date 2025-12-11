import Home from "@/pages/home";
import NotAuthorized from "@/pages/not-authorised";
import { ROUTES } from "@/utils";
// Public pages
export const publicRoutes = [
  { path: ROUTES.NOT_AUTHORIZED, element: <NotAuthorized /> },
  
];

// Protected pages
export const privateRoutes = [
  { path: ROUTES?.HOME, element: <Home /> },
];

// Role-based access
export const roleRoutes: Record<string, string[]> = {
  admin: [ROUTES?.HOME],
  user: [ROUTES?.HOME],
};

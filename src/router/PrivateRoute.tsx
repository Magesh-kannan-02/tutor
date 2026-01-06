import { Navigate, useLocation } from "react-router-dom";
import { roleRoutes } from "@/router/route";
import { ROUTES } from "@/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { pathname } = useLocation();
  const { progress } = useOnboardingStore();

  const userRole = "user"; // get from auth store
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (progress < 100) {
    return <Navigate to={ROUTES.SELECT_TEST} replace />;
  }

  const allowedPaths = roleRoutes[userRole as keyof typeof roleRoutes];

  const isAllowed = allowedPaths?.some(
    (route) =>
      pathname === route || pathname.startsWith(`${route}/`)
  );

  if (!isAllowed) {
    return <Navigate to={ROUTES.NOT_AUTHORIZED} replace />;
  }

  return <>{children}</>;
}

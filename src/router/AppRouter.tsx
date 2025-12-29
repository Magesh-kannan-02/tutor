import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./PrivateRoute";
import { privateRoutes, publicRoutes } from "@/router/route";
import { NotFound } from "@/pages";
const renderRoutes = (routes: any[]) =>
  routes.map(({ path, element, children }) => (
    <Route
      key={path}
      path={path}
      element={<ProtectedRoute>{element}</ProtectedRoute>}
    >
      {children && renderRoutes(children)}
    </Route>
  ));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        {publicRoutes?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Protected routes */}
        {renderRoutes(privateRoutes)}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

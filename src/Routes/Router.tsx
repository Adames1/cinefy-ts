import { Routes, Route } from "react-router";
import { routes } from ".";
import { AppLayout } from "../layouts/layout";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
}

import type { ReactElement } from "react";
import type { LucideIcon } from "lucide-react";
import { Home, Compass, Film, Tv, CalendarDays } from "lucide-react";

import HomePage from "./pages/HomePage";
import ExplorerPage from "./pages/ExplorerPage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import PremiersPage from "./pages/PremiersPage";

export type AppRoute = {
  path: string;
  label: string;
  icon: LucideIcon;
  element: ReactElement;
};

export const routes: AppRoute[] = [
  { path: "/", label: "Inicio", icon: Home, element: <HomePage /> },
  {
    path: "/explorer",
    label: "Explorar",
    icon: Compass,
    element: <ExplorerPage />,
  },
  { path: "/movies", label: "Películas", icon: Film, element: <MoviesPage /> },
  { path: "/series", label: "Series", icon: Tv, element: <SeriesPage /> },
  {
    path: "/premiers",
    label: "Estrenos",
    icon: CalendarDays,
    element: <PremiersPage />,
  },
];

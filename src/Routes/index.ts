import { Home, Compass, Film, Tv, Calendar, Users } from "lucide-react";

import HomePage from "../pages/HomePage";
import ExplorerPage from "../pages/ExplorerPage";
import MoviePage from "../pages/MoviePage";
import SeriesPage from "../pages/SeriesPage";
import PremierePage from "../pages/PremierePage";
import PersonsPage from "../pages/PersonsPage";

export const routes = [
    { path: "/", component: HomePage, icon: Home },
    { path: "/explorer", component: ExplorerPage, icon: Compass },
    { path: "/movies", component: MoviePage, icon: Film },
    { path: "/series", component: SeriesPage, icon: Tv },
    { path: "/premiere", component: PremierePage, icon: Calendar },
    { path: "/persons", component: PersonsPage, icon: Users },
];
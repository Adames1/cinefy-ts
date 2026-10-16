import { Home, Film, Tv, Calendar, Users } from "lucide-react";

import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import SeriesPage from "../pages/SeriesPage";
import PremierePage from "../pages/PremierePage";
import PersonsPage from "../pages/PersonsPage";

export const routes = [
    { path: "/", label: "Home", component: HomePage, icon: Home },
    { path: "/movies", label: "Movies", component: MoviePage, icon: Film },
    { path: "/series", label: "Series", component: SeriesPage, icon: Tv },
    { path: "/premiere", label: "Premieres", component: PremierePage, icon: Calendar },
    { path: "/persons", label: "Persons", component: PersonsPage, icon: Users },
];
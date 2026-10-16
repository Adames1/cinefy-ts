import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { getTrendingMovies } from "../services/trendingServices"

export const useTrendingMovie = (time_window: "day" | "week", page: number) => {
    const query = useQuery({
        queryKey: ["trending", time_window, page],
        queryFn: () => getTrendingMovies(time_window, page),
        placeholderData: keepPreviousData
    })

    return query
}
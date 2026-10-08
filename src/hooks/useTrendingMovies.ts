import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { getTrendingMovies } from "../services/movieServices"
import type { TimeWindow } from "../types/index"

export function useTrendingMovies(timeWindow: TimeWindow = "week", page: number) {
    return useQuery({
        queryKey: ["movies", "trending", timeWindow, page],
        queryFn: () => getTrendingMovies(timeWindow, page),
        placeholderData: keepPreviousData
    })
}
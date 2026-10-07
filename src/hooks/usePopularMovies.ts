import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { getMoviesPopular } from "../services/movieServices"

export function usePopularMovies(page: number) {
    return useQuery({
        queryKey: ["movies", "popular", page],
        queryFn: () => getMoviesPopular(page),
        placeholderData: keepPreviousData
    })
}
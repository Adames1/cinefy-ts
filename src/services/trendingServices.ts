import { TmdbTrendingResponseSchema } from "../schemas/trendingMoviesSchemas"
import { tmdbApi } from "./api"

export const getTrendingMovies = async (time_window: "day" | "week", page: number) => {
    const { data } = await tmdbApi.get(`/trending/movie/${time_window}`, {
        params: { page }
    })
    const response = TmdbTrendingResponseSchema.parse(data)

    return response
}
import axios from 'axios';
import { MoviesSchemas, PaginatedResponseSchema } from "../schemas/movies-schemas"
import type { TimeWindow } from "../types/index"

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN_TMDB}`,
        Accept: "application/json"
    }
})

export async function getTrendingMovies(timeWindow: TimeWindow = "week", page = 1) {
    const { data } = await tmdbApi.get(`/trending/movie/${timeWindow}`, {
        params: { page }
    })

    return PaginatedResponseSchema(MoviesSchemas).parse(data)
}
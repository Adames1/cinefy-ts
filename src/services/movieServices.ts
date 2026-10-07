import axios from 'axios';
import { MoviesPopularSchemas, PaginatedResponseSchema } from "../schemas/movies-schemas"

const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN_TMDB}`,
        Accept: "application/json"
    }
})

export async function getMoviesPopular(page = 1) {
    const { data } = await tmdb.get("/movie/popular", {
        params: { page }
    })

    return PaginatedResponseSchema(MoviesPopularSchemas).parse(data)
}
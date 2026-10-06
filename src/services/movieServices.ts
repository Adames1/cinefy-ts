import { tmdb } from "../api/tmdb"
import { MoviesPopularSchemas, PaginatedResponseSchema } from "../schemas/movies-schemas"

export async function getMoviesPopular(page = 1) {
    const { data } = await tmdb.get("/movie/popular", {
        params: { page }
    })

    const parsed = PaginatedResponseSchema(MoviesPopularSchemas).safeParse(data)

    if (!parsed.success) {
        console.error("Respuesta de TMDB inválida:", parsed.error.issues)
        return []
    }

    return parsed.data.results
}
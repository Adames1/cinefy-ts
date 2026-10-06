import z from "zod"
import { MoviesPopularSchemas, PaginatedResponseSchema } from "../schemas/movies-schemas"

export type Movies = z.infer<typeof MoviesPopularSchemas>
export type PaginatedMovies = z.infer<typeof PaginatedResponseSchema>
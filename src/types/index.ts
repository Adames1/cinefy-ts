import z from "zod"
import { MoviesSchemas, PaginatedResponseSchema } from "../schemas/movies-schemas"

export type Movies = z.infer<typeof MoviesSchemas>
export type PaginatedMovies = z.infer<typeof PaginatedResponseSchema>
export type TimeWindow = "day" | "week" 
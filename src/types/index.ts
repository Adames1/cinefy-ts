import { z } from "zod"
import { TmdbTrendingMovieSchema, TmdbTrendingResponseSchema } from "../schemas/trendingMoviesSchemas"

export type TmdbTrendingMovie = z.infer<typeof TmdbTrendingMovieSchema>
export type TmdbTrendingResponse = z.infer<typeof TmdbTrendingResponseSchema>
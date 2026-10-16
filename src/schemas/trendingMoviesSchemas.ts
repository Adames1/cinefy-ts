import { z } from "zod"

export const TmdbTrendingMovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string() || z.null(),
    id: z.number(),
    title: z.string(),
    original_title: z.string(),
    original_language: z.string(),
    overview: z.string(),
    poster_path: z.string() || z.null(),
    media_type: z.string(),
    popularity: z.number(),
    release_date: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
})

export const TmdbTrendingResponseSchema = z.object({
    page: z.number(),
    results: z.array(TmdbTrendingMovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
})
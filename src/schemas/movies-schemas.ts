import z from "zod"

export const MoviesSchemas = z.object({
    id: z.number(),
    title: z.string(),
    overview: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
    release_date: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
})

export const PaginatedResponseSchema = <T extends z.ZodType>(item: T) => z.object({
    page: z.number(),
    results: z.array(item),
    total_pages: z.number(),
    total_results: z.number()
})
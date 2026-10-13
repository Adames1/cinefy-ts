import { useMemo, useEffect } from "react";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useBackgroundStore } from "../store/backgroundStore";
import { Star } from "lucide-react";

const POSTER_BASE = "https://image.tmdb.org/t/p/w342";

export default function HomePage() {
  const { data } = useTrendingMovies("day", 1);

  const activeIndex = useBackgroundStore((s) => s.activeIndex);
  const setBackdrops = useBackgroundStore((s) => s.setBackdrops);
  const setActiveIndex = useBackgroundStore((s) => s.setActiveIndex);
  const clear = useBackgroundStore((s) => s.clear);

  // show top 6 movies today
  const topSixMovies = useMemo(() => data?.results.slice(0, 6) ?? [], [data]);

  const total = topSixMovies.length;
  const activeMovie = topSixMovies[activeIndex];

  // Se guarda null donde no hay imagen para mantener alineados los índices.
  useEffect(() => {
    if (total === 0) return;
    setBackdrops(topSixMovies.map((m) => m.backdrop_path));
  }, [topSixMovies, total, setBackdrops]);

  // Al salir del home, vacía el store para que el Layout vuelva a su color base.
  useEffect(() => {
    return () => clear();
  }, [clear]);

  // Temporizador: se reprograma cada vez que cambia el índice
  useEffect(() => {
    if (total === 0) return;

    const id = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % total);
    }, 6000);

    return () => clearTimeout(id);
  }, [activeIndex, total, setActiveIndex]);

  return (
    <section className="min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-72px)] p-8 md:px-16 flex flex-col justify-end">
      {activeMovie && (
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* dynamic content with timer */}
          <div className="w-full max-w-2xl space-y-8 lg:space-y-10">
            <div className="space-y-2">
              <p className="text-[#ff4d2e] text-[12px] uppercase tracking-widest italic">
                Tendencia Hoy
              </p>

              <h1 className="text-2xl text-white uppercase font-black leading-tight md:text-4xl lg:text-6xl">
                {activeMovie.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-max flex items-center gap-2 border border-[#ff4d2e] px-3 py-1 rounded-lg">
                  <Star size={14} color="#ff4d2e" />
                  <span className="text-white text-xs">
                    {activeMovie.vote_average.toFixed(2)}
                  </span>
                </div>
                <p className="text-white text-xs">{activeMovie.release_date}</p>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-slate-100 text-sm font-light line-clamp-3 md:min-h-15">
                {activeMovie.overview}
              </p>

              <button
                type="button"
                className="bg-[#ff4d2e] font-semibold text-sm w-full rounded-md py-3 md:w-50 cursor-pointer"
              >
                Ver detalles
              </button>
            </div>

            {/* timer switch movie */}
            <div className="flex items-center gap-8">
              <div className="flex flex-1 gap-3">
                {topSixMovies.map((movie, index) => (
                  <div
                    key={movie.id}
                    className="flex-1 h-1 bg-slate-300/30 rounded-full relative overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 left-0 h-full bg-[#ff4d2e] ${
                        index <= activeIndex ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <span className="hidden lg:block shrink-0 text-slate-200/70 text-sm italic tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* next movies: only from lg */}
          <div className="hidden lg:flex shrink-0 items-end gap-4">
            {topSixMovies.map((movie, index) =>
              index === activeIndex ? null : (
                <button
                  key={movie.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="w-28 aspect-2/3 rounded-lg overflow-hidden bg-slate-800 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                >
                  {movie.poster_path && (
                    <img
                      src={`${POSTER_BASE}${movie.poster_path}`}
                      alt={movie.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </section>
  );
}

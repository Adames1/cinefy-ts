import { Outlet } from "react-router";
import { useBackgroundStore } from "../store/backgroundStore";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w1280";

export default function Layout() {
  const backdrops = useBackgroundStore((s) => s.backdrops);
  const activeIndex = useBackgroundStore((s) => s.activeIndex);

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#0e0d0c]">
      {/* naveigation menu responsive */}
      <Navbar />

      <main className="relative flex-1 order-1 md:order-2 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {backdrops.map((path, index) =>
            path ? (
              <img
                key={path}
                src={`${IMAGE_BASE}${path}`}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : null,
          )}

          {backdrops.length > 0 && (
            <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c] via-[#0e0d0c]/60 to-[#0e0d0c]/30" />
          )}
        </div>

        <div className="relative z-10">
          <Header />
          <div className="w-full">
            {/* main content */}
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
}

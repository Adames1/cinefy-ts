import logo from "../assets/cinefy_logo.svg";
import { NavLink } from "react-router";
import { routes } from "../routes";

export default function Navbar() {
  return (
    <aside className="order-2 shrink bg-black w-full h-18 px-4 space-y-6 md:py-4 md:order-1 md:w-24 md:h-screen">
      <NavLink to="/" className="hidden md:flex">
        <img src={logo} alt="Cinefy logo" className="mx-auto" />
      </NavLink>

      <nav className="w-full h-full flex items-center justify-between gap-2 md:h-[30%] md:flex-col relative">
        {routes.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 w-full py-2 rounded-lg md:h-full transition ${isActive ? "bg-[#ff4d2e]/30" : "hover:bg-slate-400/20"}`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-1.5 h-9 bg-[#ff4d2e] absolute -left-4.5 rounded-full hidden ${isActive ? "md:block" : "hidden"}`}
                ></div>
                <Icon
                  size={20}
                  className={isActive ? "text-[#ff4d2e]" : "text-slate-300"}
                />
                <span
                  className={`text-xs text-slate-300 ${isActive ? "font-bold text-white" : ""}`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

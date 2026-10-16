import { NavLink } from "react-router";
import { routes } from "../Routes/index";
import logo from "../assets/logo_cinefy.svg";

export default function SideBar() {
  return (
    <aside className="fixed bottom-0 z-50 w-full h-18 bg-[#0b0a09] border border-t-[#26231f] space-y-10 md:left-0 md:w-22 md:h-full md:py-4 md:border-r-[#26231f]">
      {/* logo cinefy */}
      <img src={logo} alt="Logo Cinefy" className="hidden mx-auto md:block" />

      {/* navigation */}
      <nav className="w-full h-full flex items-center justify-between gap-2 px-5 md:flex-col md:justify-start md:px-3">
        {routes.map((route) => (
          <NavLink
            key={route.label}
            to={route.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 w-full py-2 rounded-lg transition ${isActive ? "bg-[#ff4d2e]/30" : "hover:bg-slate-50/10"}`
            }
          >
            {({ isActive }) => (
              <>
                <route.icon
                  size={20}
                  className={isActive ? "text-[#ff4d2e]" : "text-[#a8a198]"}
                />
                <span
                  className={`text-xs ${isActive ? "text-white font-semibold" : "text-[#a8a198]"}`}
                >
                  {route.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

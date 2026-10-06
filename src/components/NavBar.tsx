import { Link, NavLink } from "react-router";
import { routes } from "../routes";
import logo from "../assets/logo_cinefy.svg";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 z-50 w-full h-18 bg-black px-5 md:top-0 md:h-screen md:w-24 md:px-0 md:py-6">
      <div className="w-full h-full flex justify-between items-center gap-3 md:flex-col md:justify-start md:gap-2">
        <Link to="/" className="hidden md:block mb-4 w-10 h-10">
          <img src={logo} alt="Cinefy logo" />
        </Link>

        {routes.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `w-20 h-14 flex flex-col items-center justify-center gap-1 rounded-lg text-white transition md:w-17 ${
                isActive ? "bg-[#FF4D2E]/20" : "hover:bg-white/10"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={isActive ? "text-[#FF4D2E]" : "text-white/60"}
                />
                <span
                  className={`text-xs ${isActive ? "text-white font-medium" : "text-white/60"}`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

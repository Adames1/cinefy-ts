import { NavLink } from "react-router";
import logo from "../assets/cinefy_logo.svg";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full p-4 flex items-center md:px-14 md:h-18">
      <div className="w-full grid grid-cols-2 items-center gap-2 md:flex md:justify-between">
        <NavLink to="/" className="md:hidden">
          <img src={logo} alt="Cinefy logo" className="" />
        </NavLink>

        <select
          name=""
          id=""
          className="ml-auto text-white flex items-center justify-center bg-[#0e0d0c] border border-slate-50/40 rounded-full text-xs font-semibold px-2.5 py-2 md:order-2"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>

        <div className="col-span-2 w-full flex items-center gap-3 border border-slate-50/40 mt-3 rounded-full px-4 py-2.5 bg-[#0e0d0c] md:max-w-lg">
          <Search size={18} className="text-slate-300" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Buscar peliculas, series, personas"
            className="w-full text-slate-300 text-sm outline-none"
          />
        </div>
      </div>
    </header>
  );
}

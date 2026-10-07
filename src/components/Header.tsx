import { NavLink } from "react-router";
import logo from "../assets/cinefy_logo.svg";

export default function Header() {
  return (
    <header className="w-full px-4 py-2 flex items-center md:px-14 md:h-18">
      <div className="w-full grid grid-cols-2 items-center gap-2 md:flex md:justify-between">
        <NavLink to="/" className="md:hidden">
          <img src={logo} alt="Cinefy logo" className="" />
        </NavLink>

        <div className="md:order-2 ml-auto">Lang</div>

        <div className="bg-amber-100 col-span-2 w-full">
          <input
            type="search"
            name=""
            id=""
            placeholder="Buscar peliculas, series, personas"
            className="w-full"
          />
        </div>
      </div>
    </header>
  );
}

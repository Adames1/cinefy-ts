import { Link } from "react-router";
import logo from "../assets/logo_cinefy.svg";

export default function Header() {
  return (
    <header className="w-full bg-transparent">
      <Link to="/" className="w-10 h-10 md:hidden">
        <img src={logo} alt="Cinefy logo" />
      </Link>

      <div>Other content</div>
    </header>
  );
}

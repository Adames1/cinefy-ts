import { Outlet } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <>
      <main className="w-full">
        <Header />
        <Outlet />
      </main>

      <NavBar />
    </>
  );
}

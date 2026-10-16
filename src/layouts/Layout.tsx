import { Outlet } from "react-router";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export function AppLayout() {
  return (
    <section className="min-h-screen">
      <main className="h-screen p-4 md:ml-22 lg:px-8">
        <Header />
        <Outlet />
      </main>

      {/* navegation menu */}
      <SideBar />
    </section>
  );
}

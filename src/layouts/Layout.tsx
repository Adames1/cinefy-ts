import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Layout() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* naveigation menu responsive */}
      <Navbar />

      <main className="flex-1 order-1 md:order-2">
        <Header />
        <div className="w-full">
          {/* main content */}
          <Outlet />
        </div>
      </main>
    </section>
  );
}

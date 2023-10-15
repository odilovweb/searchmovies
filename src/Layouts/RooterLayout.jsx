import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useContextGlobal } from "../hooks/useContextGlobal";
function RooterLayout() {
  const { color } = useContextGlobal().state;

  return (
    <>
      <header style={{ backgroundColor: color }}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-slate-400" style={{ backgroundColor: color }}>
        <Footer />
      </footer>
    </>
  );
}

export default RooterLayout;

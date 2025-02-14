import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
// import Navbar from "./Navbar.jsx";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;

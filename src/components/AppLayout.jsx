import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />

      <div>
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;

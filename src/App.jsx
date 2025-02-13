import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
<<<<<<< HEAD
  return (
    <div>
      <Navbar />


      <ContactPage />
      <Footer />
    </div>
  );
=======
  return <RouterProvider router={router} />;
>>>>>>> 91b173962621745c098fa591e7b1e84998bd3d87
}

export default App;

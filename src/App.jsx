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
  return <RouterProvider router={router} />;
}

export default App;

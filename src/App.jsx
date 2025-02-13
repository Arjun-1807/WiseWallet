import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      {/* for testing */}
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;

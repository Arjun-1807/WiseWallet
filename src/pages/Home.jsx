import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto px-6 py-20 bg-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Smart Financial Management With Purpose
          </h1>
          <p className="text-gray-400 mb-8">
            Take control of your finances with intelligent tracking, budgeting,
            and investment insights. Your path to financial freedom starts here.
          </p>
          <div className="flex space-x-4">
            <Link to="/Login">
              <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-white">
                Get Started
              </button>
            </Link>
            <button
              className="border border-gray-700 px-6 py-3 rounded-lg hover:border-blue-500 transition-colors text-gray-400"
              onClick={() => navigate("/Services")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800"
            alt="Mobile app interface"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;

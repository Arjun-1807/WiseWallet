function About() {
  return (
    <main className="container mx-auto px-8 py-24 bg-gray-800 text-gray-300">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-8 text-white uppercase tracking-wider drop-shadow-lg">
          Who We Are
        </h1>
        <p className="text-xl mb-10 leading-relaxed text-gray-400">
          Welcome to{" "}
          <span className="text-blue-500 font-bold">
            your ultimate financial companion
          </span>
          —where smart money moves meet cutting-edge technology. We're here to
          revolutionize how you track, invest, and grow your wealth with
          precision and ease.
        </p>
        <section className="mb-10">
          <h2 className="text-4xl font-bold mb-6 text-white tracking-wide">
            {" "}
            Game-Changing Features{" "}
          </h2>
          <ul className="space-y-5 text-left inline-block text-xl">
            <li>
              <strong className="text-blue-400">
                🚀 Intelligent Tracking:
              </strong>{" "}
              Master your spending habits like a pro.
            </li>
            <li>
              <strong className="text-blue-400">💰 Smart Budgeting:</strong>{" "}
              Take control of your cash flow effortlessly.
            </li>
            <li>
              <strong className="text-blue-400">📈 Investment Mastery:</strong>{" "}
              Decode the markets with real-time insights.
            </li>
            <li>
              <strong className="text-blue-400">🎯 Goal Domination:</strong>{" "}
              Set, smash, and celebrate your financial milestones.
            </li>
            <li>
              <strong className="text-blue-400">🔒 Rock-Solid Security:</strong>{" "}
              Your data stays safe, always.
            </li>
          </ul>
        </section>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl hover:scale-110 transition-transform duration-300 text-white font-bold shadow-xl uppercase tracking-wide text-lg">
          Get Started 🚀
        </button>
      </div>
    </main>
  );
}

export default About;

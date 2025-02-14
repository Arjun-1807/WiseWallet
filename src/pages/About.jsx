const About = () => {
  return (
    <main className="bg-gray-800 text-gray-300 min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-white mb-8 uppercase tracking-wide">
          About WiseWallet
        </h1>

        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          At <span className="text-blue-500 font-semibold">WiseWallet</span>, we
          believe in empowering individuals to take charge of their financial
          future. Our platform combines cutting-edge technology with
          user-friendly tools to make managing your finances effortless and
          intuitive.
        </p>

        <div className="mb-8">
          <img
            src="https://media.istockphoto.com/id/170088887/photo/business-silhouette-with-city-skyline-behind.jpg?s=612x612&w=0&k=20&c=dGfYU43YZtxQHg4oXEyAuTUfa1GpN_bGMTu5Kh2rNrY="
            alt="About WiseWallet"
            className="w-1/2 mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-gray-700 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Our mission is to simplify financial management for everyone. We aim
            to provide innovative solutions that help you track your expenses,
            optimize your investments, and achieve your financial goals—all
            while ensuring your data remains secure and private.
          </p>
        </div>

        <div className="bg-gray-700 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            WiseWallet is your trusted partner in navigating the complexities of
            personal finance. From budgeting to investment tracking, our tools
            are designed to adapt to your unique needs, making financial freedom
            accessible to everyone.
          </p>
        </div>

        <div className="bg-gray-700 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Vision</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            We envision a world where everyone has the tools and knowledge to
            achieve financial independence. By leveraging technology and
            innovation, we strive to bridge the gap between complex financial
            systems and everyday users.
          </p>
        </div>

        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Values</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            At WiseWallet, we prioritize transparency, innovation,
            accessibility, and security. These values guide our efforts to
            provide a financial management platform that is reliable,
            user-friendly, and tailored to your needs.
          </p>
        </div>

        <div className="mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg shadow-md transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;

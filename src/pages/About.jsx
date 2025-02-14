const About = () => {
  return (
    <main className="bg-gray-800 text-gray-300 min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-5xl font-bold text-white mb-12 uppercase tracking-wide">
          About WiseWallet
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section: Our Mission */}
          <div className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden p-8 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              Our mission is to simplify financial management for everyone. We
              aim to provide innovative solutions that help you track your
              expenses, optimize your investments, and achieve your financial
              goals—all while ensuring your data remains secure and private.
            </p>
          </div>

          {/* Section: Why Choose Us? */}
          <div className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden p-8 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              WiseWallet is your trusted partner in navigating the complexities
              of personal finance. From budgeting to investment tracking, our
              tools are designed to adapt to your unique needs, making financial
              freedom accessible to everyone.
            </p>
          </div>

          {/* Section: Our Vision */}
          <div className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden p-8 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              We envision a world where everyone has the tools and knowledge to
              achieve financial independence. By leveraging technology and
              innovation, we strive to bridge the gap between complex financial
              systems and everyday users.
            </p>
          </div>

          {/* Section: Our Values */}
          <div className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden p-8 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              At WiseWallet, we prioritize transparency, innovation,
              accessibility, and security. These values guide our efforts to
              provide a financial management platform that is reliable,
              user-friendly, and tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

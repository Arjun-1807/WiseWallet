import {
  FiTrendingUp,
  FiShield,
  FiDollarSign,
  FiUsers,
  FiBarChart,
} from "react-icons/fi"; // Feather Icons
import { FaPiggyBank } from "react-icons/fa"; // Font Awesome PiggyBank

function Services() {
  const features = [
    {
      icon: <FiTrendingUp className="h-10 w-10 text-blue-500" />,
      title: "Investment Trading",
      description:
        "We offer strategic investment plans tailored to your needs.",
    },
    {
      icon: <FiShield className="h-10 w-10 text-blue-500" />,
      title: "Support On Raising Funds",
      description:
        "Get expert assistance in securing funding for your business.",
    },
    {
      icon: <FaPiggyBank className="h-10 w-10 text-blue-500" />,
      title: "Taxation Planning",
      description:
        "Optimize your taxes and keep more of what you earn with smart planning.",
    },
    {
      icon: <FiDollarSign className="h-10 w-10 text-blue-500" />,
      title: "Save Money and Time",
      description:
        "Streamline your processes to save both money and valuable time.",
    },
    {
      icon: <FiUsers className="h-10 w-10 text-blue-500" />,
      title: "Outsourced Consulting Business",
      description:
        "We provide expert consulting to help grow and scale your business.",
    },
    {
      icon: <FiBarChart className="h-10 w-10 text-blue-500" />,
      title: "Market Analysis",
      description:
        "Receive in-depth market analysis to stay ahead of the competition.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16 bg-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Better Strategy With Quality Business
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Resolve business conflicts with expert guidance and strategic
          decision-making to help you achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-900 rounded-full">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

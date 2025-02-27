import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    time: "4:00 Available",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-2xl  md:space-y-0 md:space-x-6">
        {/* Left Side Image */}
        <div className="hidden md:block md:w-1/2 md:p-4">
          <img
            src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Man on phone"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Book Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-1 p-3 block w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="mt-1 p-3 block w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Department Dropdown */}
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-400"
              >
                Department *
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 p-3 block w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Please Select</option>
                <option value="Finance">Finance</option>
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
              </select>
            </div>

            {/* Time Dropdown */}
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-400"
              >
                Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 p-3 block w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="4:00 Available">4:00 Available</option>
                <option value="5:00 Available">5:00 Available</option>
                <option value="6:00 Available">6:00 Available</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

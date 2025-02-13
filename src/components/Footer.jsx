import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pl-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-blue-500 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-400 text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-blue-300 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold">Company info</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Carrier</a>
            </li>
            <li>
              <a href="#">We are hiring</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li>
              <a href="#">Business Marketing</a>
            </li>
            <li>
              <a href="#">User Analytic</a>
            </li>
            <li>
              <a href="#">Live Chat</a>
            </li>
            <li>
              <a href="#">Unlimited Support</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li>
              <a href="#">IOS & Android</a>
            </li>
            <li>
              <a href="#">Watch a Demo</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

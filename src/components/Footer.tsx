
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="h-10 w-10 bg-krishi-yellow rounded-full flex items-center justify-center mr-2">
                <span className="text-krishi-green font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold text-krishi-green">KrishiConnect</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Connecting farmers directly to consumers for fair prices and fresh produce.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-krishi-green mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-krishi-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-krishi-green transition-colors">About</Link></li>
              <li><Link to="/market" className="text-gray-600 hover:text-krishi-green transition-colors">Market</Link></li>
              <li><Link to="/tutorial" className="text-gray-600 hover:text-krishi-green transition-colors">Tutorials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-krishi-green mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/market/vegetables" className="text-gray-600 hover:text-krishi-green transition-colors">Vegetables</Link></li>
              <li><Link to="/market/fruits" className="text-gray-600 hover:text-krishi-green transition-colors">Fruits</Link></li>
              <li><Link to="/market/grains" className="text-gray-600 hover:text-krishi-green transition-colors">Grains</Link></li>
              <li><Link to="/market/pesticides" className="text-gray-600 hover:text-krishi-green transition-colors">Insecticides/Pesticides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-krishi-green mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@krishiconnect.com</li>
              <li className="text-gray-600">Phone: +91 12345 67890</li>
              <li className="text-gray-600">Address: KrishiConnect Office, Agriculture Hub, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-600">
            &copy; {currentYear} KrishiConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

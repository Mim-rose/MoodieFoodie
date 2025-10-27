import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-amber-700 to-yellow-200 text-white">
      {/* Main Container - matches navbar structure */}
      <div className="flex flex-col px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Brand Section */}
          <aside>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
              MoodieFoodie
            </h2>
            <p className="text-sm text-white/80 mt-2">
              Deliciously Designed. <br />
              &copy; {currentYear} All rights reserved.
            </p>
          </aside>

          {/* Explore Section */}
          <nav>
            <h6 className="text-white font-semibold mb-3">Explore</h6>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Menu</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Offers</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Catering</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Gift Cards</a>
          </nav>

          {/* Company Section */}
          <nav>
            <h6 className="text-white font-semibold mb-3">Company</h6>
            <a href="#" className="block text-white/80 hover:text-white mb-2">About Us</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Careers</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Contact</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Blog</a>
          </nav>

          {/* Legal Section */}
          <nav>
            <h6 className="text-white font-semibold mb-3">Legal</h6>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Terms of Use</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Privacy Policy</a>
            <a href="#" className="block text-white/80 hover:text-white mb-2">Cookie Policy</a>
          </nav>

          {/* Social Media Section */}
          <nav className="flex gap-4 items-start lg:justify-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-blue-500 transition-colors" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-blue-400 transition-colors" size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-pink-500 transition-colors" size={24} />
            </a>
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
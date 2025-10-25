
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="  footer sm:footer-horizontal bg-gradient-to-r from-amber-700 to-yellow-200 text-white p-10">
      <aside>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
          MoodieFoodie
        </h2>
        <p className="text-sm text-white/80 mt-2">
          Deliciously Designed. <br />
          &copy; {currentYear} All rights reserved.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title text-white">Explore</h6>
        <a className="link link-hover text-white/80">Menu</a>
        <a className="link link-hover text-white/80">Offers</a>
        <a className="link link-hover text-white/80">Catering</a>
        <a className="link link-hover text-white/80">Gift Cards</a>
      </nav>

      <nav>
        <h6 className="footer-title text-white">Company</h6>
        <a className="link link-hover text-white/80">About Us</a>
        <a className="link link-hover text-white/80">Careers</a>
        <a className="link link-hover text-white/80">Contact</a>
        <a className="link link-hover text-white/80">Blog</a>
      </nav>

      <nav>
        <h6 className="footer-title text-white">Legal</h6>
        <a className="link link-hover text-white/80">Terms of Use</a>
        <a className="link link-hover text-white/80">Privacy Policy</a>
        <a className="link link-hover text-white/80">Cookie Policy</a>
      </nav>

     <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-white hover:text-blue-500" size={24} />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-white hover:text-blue-400" size={24} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-white hover:text-pink-500" size={24} />
  </a>
</nav>

    </footer>
  );
};

export default Footer;
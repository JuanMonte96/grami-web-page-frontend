
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-BgSection text-UseColor text-center py-6 animate-fade-in delay-200">
      <div className="container mx-auto px-4">
        <p className="mb-4">&copy; 2025 Grami Vidrios y Soluciones. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ColorHover transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ColorHover transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ColorHover transition-colors"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

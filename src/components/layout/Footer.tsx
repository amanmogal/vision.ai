
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-pulse-900 via-dark-800 to-pulse-800 pt-16 pb-8 text-white">
      <div className="container-custom">
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="h-14 w-14 rounded-full bg-pulse-500 shadow-elegant flex items-center justify-center hover:bg-pulse-400 hover:scale-110 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6 text-white group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <img
              src="/lovable-uploads/68ac6025-a214-45c9-a801-b4d0dfc3ce81.png"
              alt="Vision AI Logo"
              className="h-12 md:h-14 inline-block mb-6 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-300 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Empowering Indian SMBs with AI automation and data excellence to drive growth and efficiency.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-6 text-pulse-200">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-pulse-300 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-pulse-300 after:transition-all hover:after:w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-pulse-300 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-pulse-300 after:transition-all hover:after:w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-300 hover:text-pulse-300 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-pulse-300 after:transition-all hover:after:w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-pulse-300 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-pulse-300 after:transition-all hover:after:w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-6 text-pulse-200">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/vision-ai-software"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-pulse-500 hover:scale-110 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-pulse-500 hover:scale-110 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-pulse-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-pulse-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vision AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-300 hover:text-pulse-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-pulse-300 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

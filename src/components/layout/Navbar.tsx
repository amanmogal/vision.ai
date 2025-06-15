
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-elegant py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#hero" className="flex items-center">
            <img
              src="/lovable-uploads/68ac6025-a214-45c9-a801-b4d0dfc3ce81.png"
              alt="Vision AI Logo"
              className={`transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'h-16 md:h-18 brightness-100 contrast-125' 
                  : 'h-20 md:h-24 brightness-110 contrast-110 drop-shadow-sm'
              }`}
              style={{
                filter: isScrolled 
                  ? 'brightness(1.1) contrast(1.2) saturate(1.1)' 
                  : 'brightness(1.15) contrast(1.15) saturate(1.15) drop-shadow(0 2px 4px rgba(255,255,255,0.3))'
              }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="nav-link"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="nav-link"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('use-cases')}
            className="nav-link"
          >
            Use Cases
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="nav-link"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="button-primary"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="hover:bg-pulse-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl">
          <div className="flex flex-col space-y-2 py-4 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-3 px-4 hover:bg-pulse-50 rounded-xl transition-colors nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-3 px-4 hover:bg-pulse-50 rounded-xl transition-colors nav-link"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-left py-3 px-4 hover:bg-pulse-50 rounded-xl transition-colors nav-link"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-left py-3 px-4 hover:bg-pulse-50 rounded-xl transition-colors nav-link"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-3 px-4 hover:bg-pulse-50 rounded-xl transition-colors nav-link"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="button-primary mt-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

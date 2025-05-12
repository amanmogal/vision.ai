
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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#hero" className="flex items-center">
            <img
              src="/lovable-uploads/68ac6025-a214-45c9-a801-b4d0dfc3ce81.png"
              alt="Vision AI Logo"
              className="h-12 md:h-14" /* Increased size from h-10 */
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('use-cases')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Use Cases
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-gradient px-6 py-2 rounded-lg"
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
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-gradient py-2 px-4 rounded-md"
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

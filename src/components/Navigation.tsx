import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#cta' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
            className="font-cinzel text-xl md:text-2xl font-bold text-white tracking-wider"
          >
            KAINOS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="relative text-sm text-gray-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-kainos-red transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#cta')}
              className="bg-transparent border border-kainos-red text-white hover:bg-kainos-red/10 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-kainos-dark border-l border-white/10 w-[280px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  onClick={() => scrollToSection('#cta')}
                  className="bg-kainos-red text-white hover:bg-kainos-red/90 mt-4"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}

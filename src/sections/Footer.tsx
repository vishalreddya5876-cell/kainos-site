import { ScrollReveal } from '@/components/ScrollReveal';
import { MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#solution' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#problem' },
  { label: 'Contact', href: '#cta' },
];

const socialLinks = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/918599012345',
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-kainos-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <ScrollReveal className="md:col-span-2">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="font-cinzel text-3xl font-bold text-white tracking-wider mb-4 block"
            >
              KAINOS
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Where Memories Find Their Place. Transform digital moments into tangible treasures.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-kainos-red hover:bg-kainos-red/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </ScrollReveal>
          
          {/* Navigation */}
          <ScrollReveal delay={0.1}>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-kainos-red transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-kainos-red transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          
          {/* Contact */}
<ScrollReveal delay={0.2}>
  <h4 className="text-white font-semibold mb-4">Contact</h4>
  <ul className="space-y-3 text-gray-400">
    <li>Available on WhatsApp</li>
  </ul>
</ScrollReveal>
        
        {/* Copyright */}
        <ScrollReveal delay={0.3}>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 KAINOS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-kainos-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-kainos-red transition-colors">Terms of Service</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

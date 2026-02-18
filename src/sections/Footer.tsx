import { MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#solution' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#problem' },
  { label: 'Contact', href: '#cta' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-kainos-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="font-cinzel text-3xl font-bold text-white tracking-wider mb-4 block"
            >
              KAINOS
            </a>
            <p className="text-gray-400 max-w-sm">
  Thoughtfully crafted photo magnets that keep your memories alive.
</p>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-kainos-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a
              href="https://wa.me/918599012345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-kainos-red transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp: +91 85990 12345
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          © 2025 KAINOS. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

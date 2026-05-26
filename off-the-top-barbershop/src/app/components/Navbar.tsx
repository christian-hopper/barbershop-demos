import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { business } from "../../data/business";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-heading font-bold uppercase tracking-wider"
        >
          <span
            className={
              isScrolled ? "text-[var(--shop-text-dark)]" : "text-white"
            }
          >
            {business.brand.name}
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {business.nav.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-[0.2em] relative group transition-colors ${isScrolled ? "text-[var(--shop-text-muted)] hover:text-[var(--shop-text-dark)]" : "text-neutral-300 hover:text-white"}`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-[var(--shop-accent)]"></span>
            </a>
          ))}

          <a
            href={business.contact.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-sm font-heading font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 shadow-lg ${isScrolled ? "bg-[var(--shop-bg-primary)] text-white hover:bg-[var(--shop-accent)]" : "bg-[var(--shop-accent)] text-white hover:bg-white hover:text-[var(--shop-text-dark)]"}`}
          >
            {business.nav.ctaText}
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X
              className={
                isScrolled ? "text-[var(--shop-text-dark)]" : "text-white"
              }
              size={28}
            />
          ) : (
            <Menu
              className={
                isScrolled ? "text-[var(--shop-text-dark)]" : "text-white"
              }
              size={28}
            />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-6 md:hidden"
        >
          {business.nav.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--shop-text-dark)] text-lg font-heading uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

          <a
            href={business.contact.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-[var(--shop-accent)] text-white text-center font-heading font-bold uppercase tracking-widest rounded-sm"
          >
            {business.nav.ctaText}
          </a>
        </motion.div>
      )}
    </nav>
  );
}

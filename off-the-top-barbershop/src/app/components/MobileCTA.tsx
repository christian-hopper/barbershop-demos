import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { business } from "../../data/business";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-40 md:hidden p-4 bg-white/90 backdrop-blur-md border-t border-[var(--shop-border-light)] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
          <a
            href={business.contact.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-[var(--shop-accent)] text-white text-center font-heading font-bold uppercase tracking-wider rounded-sm shadow-md active:bg-[var(--shop-bg-primary)] transition-colors"
          >
            {business.mobileCta.text}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

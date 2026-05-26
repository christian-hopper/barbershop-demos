import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { business } from "../../data/business";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[var(--shop-bg-primary)] text-[var(--shop-text-primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative p-4">
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[var(--shop-accent)]"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[var(--shop-accent)]"></div>
              <ImageWithFallback
                src={business.aboutSection.image}
                alt={business.aboutSection.imageAlt}
                className="w-full h-auto object-cover rounded-sm relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-heading font-bold text-[var(--shop-accent)] uppercase tracking-widest mb-2">
              {business.aboutSection.eyebrow}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8">
              {business.aboutSection.title} {business.aboutSection.titleAccent}
            </h3>
            <p className="text-[var(--shop-text-secondary)] font-body text-lg leading-relaxed mb-8">
              {business.aboutSection.description}
            </p>
            <a
              href={business.contact.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[var(--shop-accent)] text-white font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-white hover:text-[var(--shop-text-dark)] transition-all transform hover:scale-105 active:scale-95"
            >
              {business.aboutSection.buttonText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

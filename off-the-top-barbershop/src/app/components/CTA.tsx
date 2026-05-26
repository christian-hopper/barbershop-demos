import { motion } from "motion/react";
import { business } from "../../data/business";

export function CTA() {
  return (
    <section className="relative py-32 bg-[var(--shop-bg-primary)] text-[var(--shop-text-primary)] text-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-[var(--shop-accent)]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-[var(--shop-accent)]/50"></div>
            <span className="text-[var(--shop-accent)] text-sm font-heading font-semibold uppercase tracking-[0.2em]">
              {business.ctaSection.eyebrow}
            </span>
            <div className="h-[1px] w-8 bg-[var(--shop-accent)]/50"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-10 tracking-tight leading-tight">
            {business.ctaSection.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              {business.ctaSection.titleAccent}
            </span>
          </h2>

          <a
            href={business.contact.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-[var(--shop-accent)] text-white font-heading font-bold uppercase tracking-[0.2em] text-lg rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">
              {business.ctaSection.buttonText}
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-sm bg-white transition-all duration-300 ease-out group-hover:scale-100" />
            <span className="absolute inset-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 text-[var(--shop-text-dark)] font-heading font-bold uppercase tracking-[0.2em]">
              {business.ctaSection.buttonText}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

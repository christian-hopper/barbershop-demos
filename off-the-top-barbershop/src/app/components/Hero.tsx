import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { business } from "../../data/business";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={business.hero.backgroundImage}
          alt={business.hero.backgroundAlt}
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--shop-bg-primary)] via-[var(--shop-bg-primary)]/70 to-[var(--shop-bg-primary)]/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-[var(--shop-accent)]/50 bg-[var(--shop-accent)]/10 text-[var(--shop-accent)] text-xs font-heading tracking-[0.2em] uppercase backdrop-blur-sm">
            {business.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
        >
          {business.hero.headlineLine1} <br className="hidden md:block" />
          {business.hero.headlineLine2}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--shop-accent)] to-[var(--shop-accent-dark)]">
            {business.hero.headlineAccent}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--shop-text-secondary)] font-body mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {business.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href={business.contact.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[var(--shop-accent)] text-white font-heading font-bold uppercase tracking-widest rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
          >
            <span className="relative z-10">{business.hero.primaryCta}</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-sm bg-white transition-all duration-300 ease-out group-hover:scale-100" />
            <span className="absolute inset-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 text-[var(--shop-text-dark)] font-heading font-bold uppercase tracking-widest">
              {business.hero.primaryCta}
            </span>
          </a>

          <a
            href={business.hero.secondaryHref}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-heading font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 hover:border-white transition-all text-center backdrop-blur-sm"
          >
            {business.hero.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

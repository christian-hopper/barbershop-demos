import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { business } from "../../data/business";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-32 bg-[var(--shop-soft-bg)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--shop-accent)]/5 blur-3xl -z-10 rounded-full translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-[var(--shop-accent)]"></div>
            <h2 className="text-sm font-heading font-semibold text-[var(--shop-accent)] uppercase tracking-[0.2em]">
              {business.testimonialsSection.eyebrow}
            </h2>
            <div className="h-[1px] w-12 bg-[var(--shop-accent)]"></div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--shop-text-dark)] uppercase tracking-tight"
          >
            {business.testimonialsSection.title}{" "}
            {business.testimonialsSection.titleAccent}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {business.testimonialsSection.items.map((review, index) => (
            <motion.div
              key={`${review.author}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              className="relative bg-[var(--shop-card-bg)] p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-all duration-500 border border-[var(--shop-border-light)] flex flex-col h-full hover:-translate-y-2 group"
            >
              <Quote className="absolute top-6 right-6 w-20 h-20 text-neutral-50 rotate-180 -z-0 group-hover:text-[var(--shop-accent)] transition-colors duration-500 opacity-30" />

              <div className="flex text-[var(--shop-accent)] mb-8 relative z-10 gap-1">
                {[...Array(business.testimonialsSection.ratingStars)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current drop-shadow-sm"
                    />
                  ),
                )}
              </div>

              <p className="text-[var(--shop-text-muted)] font-body leading-relaxed mb-8 flex-grow relative z-10 text-lg line-clamp-6">
                "{review.text}"
              </p>

              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-[var(--shop-border-light)]">
                <div className="w-10 h-10 rounded-full bg-[var(--shop-soft-bg)] flex items-center justify-center font-heading font-bold text-[var(--shop-accent)]">
                  {review.author.charAt(0)}
                </div>
                <div className="font-heading font-bold uppercase text-[var(--shop-text-dark)] tracking-wider text-sm">
                  {review.author}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

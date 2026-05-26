import { motion } from "motion/react";
import { Scissors, Sparkles, User, Smile, Brush } from "lucide-react";
import { business } from "../../data/business";

const icons = {
  scissors: <Scissors className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  user: <User className="w-6 h-6" />,
  smile: <Smile className="w-6 h-6" />,
  brush: <Brush className="w-6 h-6" />,
};

export function Services() {
  return (
    <section id="services" className="py-32 bg-[var(--shop-soft-bg)]">
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
              {business.servicesSection.eyebrow}
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
            {business.servicesSection.title}{" "}
            {business.servicesSection.titleAccent}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {business.servicesSection.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group bg-[var(--shop-card-bg)] p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-all duration-500 border border-[var(--shop-border-light)] hover:border-[var(--shop-accent)] hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-[var(--shop-accent)]/5 blur-2xl group-hover:bg-[var(--shop-accent)]/10 transition-colors duration-500"></div>

              <div className="w-14 h-14 rounded-xl bg-[var(--shop-soft-bg)] flex items-center justify-center mb-8 text-[var(--shop-accent)] group-hover:bg-[var(--shop-accent)] group-hover:text-white transition-colors duration-500 shadow-sm">
                {icons[service.icon as keyof typeof icons]}
              </div>

              <h4 className="text-2xl font-heading font-bold text-[var(--shop-text-dark)] uppercase mb-3 tracking-wide">
                {service.title}
              </h4>

              <p className="text-[var(--shop-text-muted)] font-body leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

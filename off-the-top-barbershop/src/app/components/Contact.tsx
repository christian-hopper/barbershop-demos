import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";
import { business } from "../../data/business";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[var(--shop-light-bg)] relative">
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
              {business.contactSection.eyebrow}
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
            {business.contactSection.title}{" "}
            {business.contactSection.titleAccent}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-12"
          >
            <div className="flex items-start space-x-6 group">
              <div className="bg-[var(--shop-soft-bg)] p-4 rounded-xl text-[var(--shop-accent)] group-hover:bg-[var(--shop-accent)] group-hover:text-white transition-colors duration-300 shadow-sm border border-[var(--shop-border-light)]">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="pt-1">
                <h4 className="font-heading font-bold text-xl uppercase mb-2 text-[var(--shop-text-dark)]">
                  {business.contactSection.locationLabel}
                </h4>
                <p className="font-body text-[var(--shop-text-muted)] leading-relaxed text-lg">
                  {business.contact.addressLine1}
                  <br />
                  {business.contact.addressLine2}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="bg-[var(--shop-soft-bg)] p-4 rounded-xl text-[var(--shop-accent)] group-hover:bg-[var(--shop-accent)] group-hover:text-white transition-colors duration-300 shadow-sm border border-[var(--shop-border-light)]">
                <Phone className="w-7 h-7" />
              </div>
              <div className="pt-1">
                <h4 className="font-heading font-bold text-xl uppercase mb-2 text-[var(--shop-text-dark)]">
                  {business.contactSection.callLabel}
                </h4>
                <p className="font-body text-[var(--shop-text-muted)] leading-relaxed text-lg">
                  {business.contact.phoneFormatted}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="bg-[var(--shop-soft-bg)] p-4 rounded-xl text-[var(--shop-accent)] group-hover:bg-[var(--shop-accent)] group-hover:text-white transition-colors duration-300 shadow-sm border border-[var(--shop-border-light)]">
                <Clock className="w-7 h-7" />
              </div>
              <div className="pt-1">
                <h4 className="font-heading font-bold text-xl uppercase mb-2 text-[var(--shop-text-dark)]">
                  {business.contactSection.hoursLabel}
                </h4>
                <ul className="font-body text-[var(--shop-text-muted)] space-y-2 text-lg">
                  {business.contactSection.hours.map((item) => (
                    <li
                      key={item.days}
                      className={`flex justify-between w-64 ${item.closed ? "opacity-60" : "border-b border-[var(--shop-border-light)] pb-1"}`}
                    >
                      <span>{item.days}</span>
                      <span
                        className={
                          item.closed
                            ? ""
                            : "text-[var(--shop-text-dark)] font-medium"
                        }
                      >
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={business.contact.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-10 py-4 bg-[var(--shop-accent)] text-white font-heading font-bold uppercase tracking-widest rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 text-center shadow-lg"
              >
                <span className="relative z-10">
                  {business.contactSection.bookNowText}
                </span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-sm bg-[var(--shop-bg-primary)] transition-all duration-300 ease-out group-hover:scale-100" />
                <span className="absolute inset-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 text-white font-heading font-bold uppercase tracking-widest">
                  {business.contactSection.bookNowText}
                </span>
              </a>

              <a
                href={`tel:${business.contact.phoneRaw}`}
                className="px-10 py-4 bg-transparent border-2 border-[var(--shop-border-light)] text-[var(--shop-text-dark)] font-heading font-bold uppercase tracking-widest rounded-sm hover:border-[var(--shop-text-dark)] transition-all text-center hover:bg-[var(--shop-soft-bg)]"
              >
                {business.contactSection.callNowText}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full h-[450px] lg:h-[600px] bg-stone-200 rounded-2xl overflow-hidden relative shadow-2xl shadow-neutral-950/5"
          >
            <div className="absolute inset-0 border-4 border-white z-10 rounded-2xl pointer-events-none"></div>
            <iframe
              src={business.contact.mapsEmbedHref}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[50%] contrast-[90%] opacity-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700 ease-out"
              title={`${business.brand.fullName} Location`}
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

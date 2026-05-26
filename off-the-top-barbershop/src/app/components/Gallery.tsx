import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Maximize2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { business } from "../../data/business";

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-[var(--shop-light-bg)]">
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
              {business.gallerySection.eyebrow}
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
            {business.gallerySection.title}{" "}
            {business.gallerySection.titleAccent}
          </motion.h3>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {business.gallerySection.images.map((src, index) => (
              <motion.div
                key={`${src}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl group cursor-pointer relative shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative w-full h-full aspect-square md:aspect-auto">
                  <ImageWithFallback
                    src={src}
                    alt={`${business.brand.fullName} work ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}

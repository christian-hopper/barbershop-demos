import { Instagram } from "lucide-react";
import { business } from "../../data/business";

export function Footer() {
  return (
    <footer className="bg-[var(--shop-bg-primary)] text-[var(--shop-text-primary)] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-heading font-bold uppercase tracking-wider mb-6">
            {business.brand.name}
          </h2>
          <p className="text-[var(--shop-text-secondary)] font-body mb-6 max-w-sm">
            {business.footer.description}
          </p>

          <a
            href={business.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--shop-accent)] transition-colors"
            aria-label={`${business.brand.fullName} Instagram`}
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-wider mb-6 text-[var(--shop-accent)]">
            {business.footer.quickLinksTitle}
          </h4>

          <ul className="space-y-3 font-body text-[var(--shop-text-secondary)]">
            {business.nav.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-wider mb-6 text-[var(--shop-accent)]">
            {business.footer.ctaTitle}
          </h4>
          <p className="text-[var(--shop-text-secondary)] font-body mb-6">
            {business.footer.ctaText}
          </p>
          <a
            href={business.contact.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[var(--shop-accent)] text-white font-heading font-bold uppercase tracking-wider rounded-sm hover:bg-white hover:text-[var(--shop-text-dark)] transition-all"
          >
            {business.footer.ctaButtonText}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-neutral-500 font-body text-sm">
        <p>
          &copy; {new Date().getFullYear()} {business.brand.fullName}.{" "}
          {business.footer.copyrightText}
        </p>
        <p className="mt-2 md:mt-0">{business.contact.fullAddress}</p>
      </div>
    </footer>
  );
}

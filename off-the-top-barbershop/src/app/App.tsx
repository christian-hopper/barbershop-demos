import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MobileCTA } from "./components/MobileCTA";
import { business } from "../data/business";

export default function App() {
  useEffect(() => {
    document.title = business.brand.fullName;

    const root = document.documentElement;

    root.style.setProperty("--shop-accent", business.theme.accent);
    root.style.setProperty("--shop-accent-dark", business.theme.accentDark);
    root.style.setProperty("--shop-bg-primary", business.theme.bgPrimary);
    root.style.setProperty("--shop-bg-secondary", business.theme.bgSecondary);
    root.style.setProperty("--shop-light-bg", business.theme.lightBg);
    root.style.setProperty("--shop-soft-bg", business.theme.softBg);
    root.style.setProperty("--shop-card-bg", business.theme.cardBg);
    root.style.setProperty("--shop-text-primary", business.theme.textPrimary);
    root.style.setProperty("--shop-text-dark", business.theme.textDark);
    root.style.setProperty("--shop-text-muted", business.theme.textMuted);
    root.style.setProperty(
      "--shop-text-secondary",
      business.theme.textSecondary,
    );
    root.style.setProperty("--shop-border-light", business.theme.borderLight);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--shop-light-bg)] text-[var(--shop-text-dark)] font-body selection:bg-[var(--shop-accent)] selection:text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

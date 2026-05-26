# 💈 Premium Barbershop Template

A reusable barbershop website template built with **React, Vite, TypeScript, and Tailwind CSS**.

This project is designed so you can launch a new barbershop website quickly by editing one central data file instead of changing content across multiple components.

---

## ✨ Features

- Reusable component-based structure
- Centralized business content in one file
- Easy per-client branding with theme variables
- Mobile-first responsive design
- GitHub Pages deployment ready
- Built for fast cloning and reuse across multiple barbershop clients

---

## 🛠️ Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

---

## 📂 Project Structure

src/

- app/
  - components/
    - Navbar.tsx
    - Hero.tsx
    - Services.tsx
    - Gallery.tsx
    - About.tsx
    - Reviews.tsx
    - CTA.tsx
    - MobileCTA.tsx
    - Contact.tsx
    - Footer.tsx
  - App.tsx
- data/
  - business.ts
- styles/
  - index.css
  - theme.css

---

## 🧠 How It Works

All business-specific content is stored in:

`src/data/business.ts`

This includes:

- business name
- logo text
- phone number
- address
- services
- testimonials
- gallery images
- CTA text
- footer content
- theme colors

To reuse this template for a new barbershop, you mainly update that one file.

---

## 📝 Notes

- This template is best for brochure-style small business sites
- Always test mobile layout before deployment
- Replace stock content before launching a real client site
- Optimize images for performance when possible

---

## 📈 Future Improvements

Potential upgrades:

- SEO meta tags per business
- real contact form backend
- analytics integration
- booking integration
- CMS support
- stronger TypeScript typing for `business.ts`

---

## 👨‍💻 Author

Christian Hopper

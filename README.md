# Hopp Digital Demo Showroom

This repository keeps the existing `barbershop-demos` name and GitHub Pages URL, but now publishes both protected demo families:

- Barbershops
- Home Services: HVAC, plumbing, and electrical

The repository has been intentionally reset to a clean foundation. Business demos are commissioned only through Hopp Digital Sales OS.

```text
docs/
├── .nojekyll
├── _hopp/shared-demos.json
└── _shared/
    ├── barbershop/<version>/
    └── home-services/<version>/
```

New commissions add thin business route folders and template-specific data under `_data/`. Do not edit compiled shared runtimes or generated business folders manually. Configure GitHub Pages to deploy the default branch from `/docs`.

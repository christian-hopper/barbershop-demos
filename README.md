# Hopp Digital Barbershop Demos

Compiled demo websites published through GitHub Pages.

```text
docs/
├── .nojekyll
├── shop-one/
├── shop-two/
└── ...
```

Configure GitHub Pages to deploy the default branch from `/docs`.

Do not edit compiled shop files manually. Update `src/data/business.ts` in the sibling reusable template and run:

```bash
npm run demo:publish
```

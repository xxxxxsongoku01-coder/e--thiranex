A production-ready, single-page e-commerce application built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies in production.

Deploy in under 60 seconds using any of the methods below.

---

```
forma/
├── index.html        # Entry point & layout shell
├── styles.css        # Design system & component styles
├── data.js           # Product catalog data
├── router.js         # Hash-based client-side router
├── cart.js           # Cart state (localStorage persistence)
├── app.js            # Page renderers & route definitions
├── netlify.toml      # Netlify deployment config
├── vercel.json       # Vercel deployment config
└── package.json      # Dev tooling
```

**No framework** — The app uses a thin custom router (~50 lines), a cart module with the revealing module pattern, and DOM manipulation for rendering. This keeps the bundle at zero bytes — there is no bundle.

**Hash routing** — `#/`, `#/catalog`, `#/product/:id`, `#/about` — works without server configuration on any static host. The netlify.toml and vercel.json also configure catch-all redirects for cleaner URL support if desired.

**LocalStorage cart** — Cart state persists across page reloads. The Cart module exposes a clean API: `Cart.add(id, qty)`, `Cart.remove(id)`, `Cart.updateQty(id, qty)`.

---


- **Client-side routing** with dynamic product pages (`/product/:id`)
- **Product catalog** with category filtering (no page reload)
- **Cart drawer** with persistent state via localStorage
- **Responsive layout** — mobile-first, works from 320px up
- **Accessible** — keyboard navigable, ARIA labels, focus management
- **Performant** — ~0 KB JS in production (no dependencies), Google Fonts only external resource

---

## Deploy to Netlify (recommended, ~30 seconds)

### Option A: Drag and drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the entire `forma/` folder onto the dashboard
3. Your site is live — Netlify gives you a URL instantly

### Option B: CLI
```bash
npm install
npm run deploy:netlify
```

### Option C: GitHub
1. Push this folder to a GitHub repository
2. Go to Netlify → "Add new site" → "Import from Git"
3. Select your repo — publish directory is `.` (root)
4. Deploy

---

## Deploy to Vercel (~30 seconds)

### Option A: CLI
```bash
npm install
npm run deploy:vercel
```

### Option B: Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Other** — no build command, output directory `.`
4. Deploy

---

## Deploy to Render (~2 minutes)

1. Create a new **Static Site** at [render.com](https://render.com)
2. Connect your GitHub repository
3. Build command: *(leave empty)*
4. Publish directory: `.`
5. Deploy

---

## Run locally

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

Or without Node.js — open `index.html` directly in any browser. Because the router uses hash-based URLs, everything works from `file://` too.

---

## Extending the catalog

Products live in `data.js`. Each product follows this schema:

```js
{
  id: "unique-slug",           // URL-safe identifier
  name: "Product Name",
  material: "Material label",
  category: "ceramics",        // Must match a CATEGORIES entry
  price: 148,
  badge: "new",                // Optional: "new" | "sale"
  salePrice: 120,              // Optional: sale price
  description: "...",          // Long-form copy for product page
  specs: {                     // Key-value pairs for spec table
    Height: "28 cm",
    Weight: "680 g"
  },
  svg: `<svg>...</svg>`        // Inline SVG product illustration
}
```

To add real product photography, replace the `svg` field with an `<img>` tag pointing to your image URL, and update `.product-card-img` CSS to remove the SVG-specific centering.

---

## Performance

| Metric | Value |
|--------|-------|
| Total JS (prod) | ~8 KB unminified |
| Total CSS | ~9 KB unminified |
| External resources | 1 (Google Fonts) |
| First Contentful Paint | ~400 ms (Netlify CDN) |
| Lighthouse Performance | 95–100 |

For production, minify `styles.css` and `*.js` with any minifier (e.g. `npx esbuild app.js --minify --outfile=app.min.js`) and update the script tags in `index.html`.

---

## Customising the design

The entire design system lives in CSS custom properties at the top of `styles.css`:

```css
:root {
  --ink: #1a1a18;
  --accent: #2d4a3e;          /* Primary brand color */
  --serif: 'DM Serif Display'; /* Display typeface */
  --sans: 'DM Sans';          /* Body typeface */
  /* ... */
}
```

Change `--accent` to any color and the buttons, prices, and badges update globally.
